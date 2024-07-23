import path from 'path';
import * as vscode from 'vscode';

const { jsonrepair } = require("jsonrepair");

/**
 * 尝试修复JSON文件错误语法
 */
const tryRepairJSON = async () => {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) { return; }

	try {
		await activeTextEditor.edit(editBuilder => {
			const document = activeTextEditor.document;
			const content = document.getText();
			const repairedJSONData = jsonrepair(content);
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

export default tryRepairJSON;