<!-- @format -->

## 关闭 vscode 中安装的 eslint、prettier 插件，避免干扰

## Husky

1. 安装：npm install husky -D
2. 配置 husky 接管 git hooks：
   （1）命令行：npm set-script prepare 'husky install'【npm version 7.x 版本】
   （2）手动添加 prepare 脚本
3. 作用：项目安装完依赖（npm install），自动执行 prepare 脚本，初始化 husky
4. 添加钩子脚本：
   （1）pre-commit：npx husky add .husky/pre-commit 'npx lint-staged'
    (2) commit-msg：npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

## lint-staged

1. 安装：npm install lint-staged -D
2. 配置文件(.lintstagedrc.js)
   eg."\*.{js,jsx,ts,tsx,vue}": ["prettier --write .", "eslint --fix"]

## commitlint

1. 安装：npm install commitlint @commitlint/config-conventional -D
2. 配置文件(commitlint.config.js)
   eg. module.exports = {
   // 引用 angular 提交规范
   extends: ['@commitlint/config-conventional']
   }
