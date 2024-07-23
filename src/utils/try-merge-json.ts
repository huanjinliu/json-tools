import * as vscode from 'vscode';
import removeMergeWords from './remove-merge-words';

const { jsonrepair } = require("jsonrepair");

/**
 * 尝试合并JSON冲突
 */
const tryMergeJSON = async () => {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) { return; }

	try {
		await activeTextEditor.edit(editBuilder => {
			const document = activeTextEditor.document;
			const content = document.getText();
			const repairedJSONData = jsonrepair(removeMergeWords(content));
			const parseJSONData = JSON.parse(repairedJSONData);
			const newJSONData = JSON.stringify(parseJSONData, undefined, 2);
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

export default tryMergeJSON;