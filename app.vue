<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
console.log('nuxt app : ', nuxtApp);

// ex. vue application instance
// nuxtApp.vueApp.component()
// nuxtApp.vueApp.directive()
// nuxtApp.vueApp.use();

// provide
// nuxtApp.provide('hello', (msg: string) => `hello ${msg}`);
</script>
