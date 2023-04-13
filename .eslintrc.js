/** @format */

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // this turns on the rule provided by prettier, which runs  within ESLint:换句话说就是注入prettier规则，如果书写规则违背prettier，则会报错
    'prettier/prettier': ['error'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用 debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用 console
    'no-bitwise': 'off', // 禁用按位运算符
    'array-element-newline': ['error', 'consistent'], // 强制数组元素间出现换行
    'comma-dangle': ['error', 'only-multiline'], // 要求或禁止末尾逗号
    'object-curly-spacing': ['error', 'always'], // 强制在大括号中使用一致的空格
    'no-new': 'off', // 禁止使用 new 以避免产生副作用
    'linebreak-style': 'off', // 强制使用一致的换行风格
    'import/extensions': 'off', // 确保在导入路径中统一使用文件扩展名
    'eol-last': 'off', // 要求或禁止文件末尾存在空行
    'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
    'no-unused-vars': 'warn', // 禁止出现未使用过的变量
    'import/no-cycle': 'off', // 禁止一个模块导入一个有依赖路径的模块回到自己身上
    eqeqeq: 'off', // 要求使用 === 和 !==
    'no-param-reassign': 'off', // 禁止对 function 的参数进行重新赋值
    'import/prefer-default-export': 'off', // 如果模块只输入一个名字，则倾向于默认输出
    'no-use-before-define': 'off', // 禁止在变量定义之前使用它们，则倾向于默认输出
    'no-continue': 'off', // 禁用 continue 语句
    'prefer-destructuring': 'off', // 优先使用数组和对象解构
    'no-plusplus': 'off', // 禁用一元操作符 ++ 和 --
    'prefer-const': 'warn', // 要求使用 const 声明那些声明后不再被修改的变量
    'global-require': 'off', // 要求 require() 出现在顶层模块作用域中
    'no-prototype-builtins': 'off', // 禁止直接调用 Object.prototypes 的内置属性
    'consistent-return': 'off', // 要求 return 语句要么总是指定返回的值，要么不指定
    'one-var-declaration-per-line': 'off', // 要求或禁止在变量声明周围换行
    'one-var': 'off', // 强制函数中的变量要么一起声明要么分开声明
    'import/named': 'off', // 确保命名导入与远程文件中的命名导出相对应
    'object-curly-newline': 'off', // 强制大括号内换行符的一致性
    'default-case': 'off', // 要求 switch 语句中有 default 分支
    'no-trailing-spaces': 'off', // 禁用行尾空格
    'func-names': 'off', // 要求或禁止使用命名的 function 表达式
    radix: 'off', // 强制在 parseInt() 使用基数参数
    'no-unused-expressions': 'off', // 禁止出现未使用过的表达式
    'no-underscore-dangle': 'off', // 禁止标识符中有悬空下划线
    'no-nested-ternary': 'off', // 禁用嵌套的三元表达式
    'no-restricted-syntax': 'off', // 禁用特定的语法
    'no-await-in-loop': 'off', // 禁止在循环中出现 await
    'import/no-extraneous-dependencies': 'off', // 禁止使用外部包
    'import/no-unresolved': 'off', // 确保导入指向一个可以解析的文件/模块
    'arrow-body-style': ['error', 'as-needed'], // 在函数体周围强制使用大括号
    '@typescript-eslint/no-var-requires': 'off', // 除import语句外，禁止使用require语句
    '@typescript-eslint/no-empty-function': 'off', // 不允许空函数
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    'guard-for-in': 'off', // 要求 for-in 循环中有一个 if 语句
    'class-methods-use-this': 'off', // 强制类方法使用 this
    // 'vue/html-indent': ['error', 2], // 在<template>中强制一致缩进
    'vue/html-self-closing': 'off', // 执行自闭合的风格
    'prefer-promise-reject-errors': ['off'],
    'vue/singleline-html-element-content-newline': 'off', // 要求单行元素的内容前后有一个换行符
    'vue/no-mutating-props': 0,
    'vue/multi-word-component-names': ['error', { ignores: ['Index'] }]
  }
}
