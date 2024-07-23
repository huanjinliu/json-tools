import path from 'path';
import * as vscode from 'vscode';
import removeMergeWords from './remove-merge-words';
import checkMergeWords from './check-merge-words';

const { jsonrepair } = require("jsonrepair");

/**
 * 尝试合并某个文件夹下的所有JSON冲突
 */
const tryMergeAllJSON = async () => {
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

      quickPick.items = uniqueFolderPaths.map(folderPath => ({ label: `${folderPath}/` }));
    } else {
      quickPick.items = [];
    }
  });

  quickPick.onDidAccept(async () => {
    const selectedFolder = quickPick.selectedItems[0];
    if (selectedFolder) {
      const directory = path.join(workspace.uri.fsPath, selectedFolder.label);
      const successFiles = new Map<vscode.Uri, Buffer>([]);

      try {
        const collectFiles = async (_path: string) => {
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
              if (!checkMergeWords(content)) { return; }
              // 如果需要则判断是否能成功合并
              const repairedJSONData = jsonrepair(removeMergeWords(content));
              const parseJSONData = JSON.parse(repairedJSONData);
              const newJSONData = JSON.stringify(parseJSONData, undefined, 2);
              const newContent = Buffer.from(newJSONData, 'utf-8');
              successFiles.set(file, newContent);
            }
            // 如果是文件夹
            if (FileType === 2) {
              await collectFiles(vscode.Uri.joinPath(directory, filePath).fsPath);
            }
          }));
        };
        await collectFiles(directory);

        await Promise.all(Array.from(successFiles).map(([url, content]) =>
          vscode.workspace.fs.writeFile(url, content)
        ));
      } catch (error) {
        vscode.window.showErrorMessage(`JSON Merge Error: ${(error as Error).message}`);
      } finally {
        successFiles.clear();
      }
    }
    quickPick.hide();
  });

  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
};

export default tryMergeAllJSON;