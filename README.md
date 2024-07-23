# VSCode · JSON多工具插件

该插件在进入JSON文件编辑时功能生效，满足某些条件下将会在右上角出现对应按钮：

![buttons-sample](https://github.com/huanjinliu/vscode-json-tools/blob/master/resources/buttons-sample.png?raw=true)

##### 1. 尝试修复JSON文件错误语法（快捷键：ctrl+r）

   内部使用三方库 [jsonrepair](https://github.com/josdejong/jsonrepair) 来尝试修复错误JSON代码，其具体修复规则可前往其主页查看。

##### 2. 尝试简单合并JSON文件冲突（快捷键：ctrl+m）

   ⚠️ 其合并逻辑仅仅是将前后更改代码进行简单合并，当前后更改出现相同字段时，后者将覆盖前者。

##### 3. 尝试简单合并某个文件夹下的所有JSON文件冲突（快捷键：ctrl+alt+m）

   弹出的输入框内输入文件夹路径，路径下所有的JSON文件都会去尝试合并JSON文件冲突，只要有一个无法成功合并，整个流程都将终止，且不更改任一文件。

##### 4. 排序JSON字段（快捷键：ctrl+s）

   优先非对象类型排序，其次按字段的字符排序。

**Enjoy!**
