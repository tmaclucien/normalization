<!-- @format -->
<script setup lang="ts">
/**
 * 命名不规范 - 变量名使用拼音或者缩写
 */
// 不规范
const khbq = '客户标签'
// 规范
const customerTagGroup = '客户标签'

/**
 * 命名不规范 - 变量名不具有描述性
 */
// 不规范
const x = 5
// 规范
const count = 5

/**
 * 命名不规范 - 函数名或者参数名不具有描述性或者不符合函数命名规范
 */
// 不规范
function f(a: number, b: number) {}
// 规范
function calculateTotalPrice(basePrice: number, totalNum: number) {}

/**
 * 未进行代码格式化或者规则校验
 */
// 不规范
function isValid(x) {
  if (x > 10) {
    alert('x must be less than 10')
    return false
  }
}
// // 规范
// function isValid(x: number) {
//             if (x > 10) {
//               alert('x must be less than 10')
//               return false
//             }
// }
</script>

<template>
  <!-- 不规范 -->
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <!-- 规范 -->
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <!-- 命名不规范 - 不使用语义化标签 -->
  <div class="container">
    <div class="heade r"></div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
  <!-- 命名规范 - 使用语义化标签 -->
  <div class="container">
    <header></header>
    <main></main>
    <footer></footer>
  </div>
</template>

<style lang="scss" scoped>
/**
* 命名不规范 - 不使用BEM
*/
// 不规范
.box {
  width: 100px;
}
.box p {
  font-size: 14px;
}
// 规范
.box__text {
  font-size: 14px;
}
</style>
