<!-- @format -->

## Husky

1. 安装：npm install husky -D
2. 配置 husky 接管 git hooks：
   （1）命令行：npm set-script prepare 'husky install'【npm version 7.x 版本】
   （2）手动添加 prepare 脚本
3. 作用：项目安装完依赖，自动执行 prepare 脚本，初始化 husky
4. 添加脚本：
   （1）pre-commit：npx husky add .husky/pre-commit 'npx lint-staged'
   (2) commit-msg：npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

## lint-staged

1. 安装：npm install lint-staged -D
2. 配置文件

## commitlint

1. 安装：npm install commitlint @commitlint/config-conventional -D
2. 配置文件
