<!-- @format -->

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue" // prettier-error: doubleQuoate -> singleQuate

const a = (e: any) => {
  console.log(e); // prettier-error: semi(false) && eslint-warning: no-console
} // eslint-warning : no-unused-vars

let b = 1 // eslint-error: prefer const && eslint-warning: no-unused-vars
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <!-- prettier-error: tabWidth -->
<a href="https://vuejs.org/" target="_blank">
<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
</a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
/* <!-- prettier-error: tabWidth --> */
.logo {
padding: 1.5em;
will-change: filter;
transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
