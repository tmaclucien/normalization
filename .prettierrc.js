/** @format */

module.exports = {
  semi: false,
  printWidth: 130,
  singleQuote: true,
  trailingComma: 'none',
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'avoid', // 单行箭头函数，单参数时取消添加括号
  insertPragma: true // 在文件顶部插入一个@format特殊注释，以此表明当前文件已经被prettier格式化过了
}
