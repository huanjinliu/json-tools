import * as vscode from 'vscode';
import tryMergeAllJSON from './utils/try-merge-all-json';
import tryMergeJSON from './utils/try-merge-json';
import tryRepairJSON from './utils/try-repair-json';
import trySortJSONKey from './utils/try-sort-json-key';
import checkMergeWords from './utils/check-merge-words';

const NAMESPACE = 'vscode-json-tools';

const $ = (key: string) => `${NAMESPACE}.${key}`;

/**
 * 命令列表
 */
const commands: [name: string, function: () => Promise<void>][] = [
	['tryMergeJSON', tryMergeJSON],
	['tryMergeAllJSON', tryMergeAllJSON],
	['tryRepairJSON', tryRepairJSON],
	['trySortJSONKey', trySortJSONKey]
];

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
		vscode.commands.executeCommand('setContext', $('isNeedMergeJSONFile'), checkMergeWords(content));
	}
};

export function activate(context: vscode.ExtensionContext) {
	const subscriptions = commands.map(command => (
		vscode.commands.registerCommand($(command[0]), command[1])
	));

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