import * as vscode from 'vscode';
import sortObjectKey from './sort-object-key';

/**
 * 排序JSON字段
 */
const trySortJSONKey = async () => {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) { return; }

	try {
		await activeTextEditor.edit(editBuilder => {
			const document = activeTextEditor.document;
			const content = document.getText();
			const parseJSONData = JSON.parse(content);
			const newJSONData = JSON.stringify(sortObjectKey(parseJSONData), undefined, 2);
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

export default trySortJSONKey;