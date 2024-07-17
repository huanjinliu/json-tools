import path from 'path';
import * as vscode from 'vscode';

const { jsonrepair } = require("jsonrepair");

const NAMESPACE = 'vscode-json-tools';

const $ = (key: string) => `${NAMESPACE}.${key}`;

/**
 * 移除合并字符
 */
const removeMergeWords = (content: string) => {
	return content
		.replace(/<<<<<<<.+/g, "")
		.replace(/>>>>>>>.+/g, "")
		.replace(/=======.*/g, "");
};

/**
 * 对对象的字段进行排序
 */
const sortObject = (obj: Record<string, any>): typeof obj => {
	if (Array.isArray(obj)) {
		return obj.map(sortObject);
	} else if (obj !== null && typeof obj === "object") {
		return Object.keys(obj)
			.sort((key1, key2) => {
				if (typeof obj[key1] === "object" && typeof obj[key2] !== "object") { return 1; }
				if (typeof obj[key1] !== "object" && typeof obj[key2] === "object") { return -1; }
				return key2 > key1 ? -1 : 1;
			})
			.reduce((result, key) => {
				result[key] = sortObject(obj[key]);
				return result;
			}, {} as typeof obj);
	}
	return obj;
};

/**
 * 尝试合并JSON冲突
 */
const tryMergeJson = async () => {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) { return; }

	try {
		await activeTextEditor.edit(editBuilder => {
			const document = activeTextEditor.document;
			const content = document.getText();
			const repairedJsonData = jsonrepair(removeMergeWords(content));
			const parseJsonData = JSON.parse(repairedJsonData);
			const newJSONData = JSON.stringify(parseJsonData, undefined, 2);
			const entireRange = new vscode.Range(
				document.positionAt(0),
				document.positionAt(document.getText().length)
			);
			editBuilder.replace(entireRange, newJSONData);
		});
	} catch (error) {
		vscode.window.showErrorMessage(`JSON Repair Error: ${(error as Error).message}`);
	}
};

/**
 * 尝试合并某个文件夹下的所有JSON冲突
 */
const tryMergeAllJson = async () => {
	const document = vscode.window.activeTextEditor?.document;
	if (!document) { return; }

	const workspace = vscode.workspace.getWorkspaceFolder(document.uri)!;

	const quickPick = vscode.window.createQuickPick();
	quickPick.placeholder = '输入目标文件夹路径';
	quickPick.title = '合并所有含有代码冲突的JSON文件';

	quickPick.onDidChangeValue(async (value) => {
		if (value) {
			const folders = await vscode.workspace.findFiles(`**/${value}*/**`, '**/node_modules/**', 10);
			const folderPathSet = new Set<string>();

			for (const folder of folders) {
				const relativePath = path.relative(workspace.uri.fsPath, path.dirname(folder.fsPath));
				if (!relativePath) { continue; }
				let folderPath = '';
				for (const item of relativePath.split('/')) {
					folderPath = folderPath ? `${folderPath}/${item}` : item;
					folderPathSet.add(folderPath);
				}
			}

			const uniqueFolderPaths = Array.from(folderPathSet);
			uniqueFolderPaths.sort((a, b) => a.length - b.length);
			folderPathSet.clear();

			quickPick.items = uniqueFolderPaths.map(folderPath => ({ label: folderPath }));
		} else {
			quickPick.items = [];
		}
	});

	quickPick.onDidAccept(() => {
		const selectedFolder = quickPick.selectedItems[0];
		if (selectedFolder) {
			try {
				const directory = path.join(workspace.uri.fsPath, selectedFolder.label);

				const mergeFile = async (_path: string) => {
					const directory = vscode.Uri.parse(_path);
					const files = await vscode.workspace.fs.readDirectory(directory);
					await Promise.all(files.map(async ([filePath, FileType]) => {
						// 如果是文件
						if (FileType === 1) {
							// 如果不是json文件直接跳出
							if (path.extname(filePath).toLowerCase() !== '.json') { return; }
							const file = vscode.Uri.joinPath(directory, filePath);
							const fileUint8 = await vscode.workspace.fs.readFile(file);
							// 如果不需要合并直接跳出
							const content = fileUint8.toString();
							if (!(
								/<<<<<<</.test(content) && /=======/.test(content) && />>>>>>>/.test(content)
							)) { return; }
							const repairedJsonData = jsonrepair(removeMergeWords(content));
							const parseJsonData = JSON.parse(repairedJsonData);
							const newJSONData = JSON.stringify(parseJsonData, undefined, 2);
							const newContent = Buffer.from(newJSONData, 'utf-8');
							vscode.workspace.fs.writeFile(file, newContent);
						}
						// 如果是文件夹
						if (FileType === 2) {
							await mergeFile(vscode.Uri.joinPath(directory, filePath).fsPath);
						}
					}));
				};

				mergeFile(directory);
			} catch (error) {
				vscode.window.showErrorMessage(`JSON Merge Error: ${(error as Error).message}`);
			}
		}
		quickPick.hide();
	});

	quickPick.onDidHide(() => quickPick.dispose());
	quickPick.show();
};

/**
 * 尝试修复JSON文件错误语法
 */
const tryRepairJson = async () => {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) { return; }

	try {
		await activeTextEditor.edit(editBuilder => {
			const document = activeTextEditor.document;
			const content = document.getText();
			const repairedJsonData = jsonrepair(content);
			const parseJsonData = JSON.parse(repairedJsonData);
			const newJSONData = JSON.stringify(parseJsonData, undefined, 2);
			const entireRange = new vscode.Range(
				document.positionAt(0),
				document.positionAt(document.getText().length)
			);
			editBuilder.replace(entireRange, newJSONData);
		});
	} catch (error) {
		vscode.window.showErrorMessage(`JSON Repair Error: ${(error as Error).message}`);
	}
};

/**
 * 排序JSON字段
 */
const sortJSONKey = async () => {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) { return; }

	try {
		await activeTextEditor.edit(editBuilder => {
			const document = activeTextEditor.document;
			const content = document.getText();
			const parseJsonData = JSON.parse(content);
			const newJSONData = JSON.stringify(sortObject(parseJsonData), undefined, 2);
			const entireRange = new vscode.Range(
				document.positionAt(0),
				document.positionAt(document.getText().length)
			);
			editBuilder.replace(entireRange, newJSONData);
		});
	} catch (error) {
		vscode.window.showErrorMessage(`JSON Repair Error: ${(error as Error).message}`);
	}
};

/**
 * 判断并设置上下文
 */
const setExtensionContent = (editor: vscode.TextEditor | undefined) => {
	const document = editor?.document;
	if (!document || document.languageId !== 'json') {
		// throw Error('No valid json file!'); 
		return;
	};

	const content = document.getText();

	try {
		JSON.parse(content);
		vscode.commands.executeCommand('setContext', $('isValidJSONFile'), true);
		vscode.commands.executeCommand('setContext', $('isNeedMergeJSONFile'), false);
	} catch {
		vscode.commands.executeCommand('setContext', $('isValidJSONFile'), false);
		vscode.commands.executeCommand('setContext', $('isNeedMergeJSONFile'), (
			/<<<<<<</.test(content) && /=======/.test(content) && />>>>>>>/.test(content)
		));
	}
};

export function activate(context: vscode.ExtensionContext) {
	const subscriptions = [
		vscode.commands.registerCommand($('tryMergeJson'), tryMergeJson),
		vscode.commands.registerCommand($('tryMergeAllJSON'), tryMergeAllJson),
		vscode.commands.registerCommand($('tryRepairJson'), tryRepairJson),
		vscode.commands.registerCommand($('sortJSONKey'), sortJSONKey),
	];

	context.subscriptions.push(...subscriptions);

	vscode.window.onDidChangeActiveTextEditor(setExtensionContent, null, context.subscriptions);

	vscode.workspace.onDidChangeTextDocument(event => {
		const editor = vscode.window.activeTextEditor;
		if (editor && event.document === editor.document) {
			setExtensionContent(editor);
		}
	}, null, context.subscriptions);

	vscode.workspace.onDidOpenTextDocument(document => {
		const editor = vscode.window.activeTextEditor;
		if (editor && document === editor.document) {
			setExtensionContent(editor);
		}
	}, null, context.subscriptions);

	if (vscode.window.activeTextEditor) {
		setExtensionContent(vscode.window.activeTextEditor);
	}
}

export function deactivate() { }