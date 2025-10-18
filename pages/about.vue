<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class="column">
        <RouterLink to="/">Router Link Home</RouterLink>
        <RouterLink to="https://youtube.com/@gymcoding"
          >Router Link Youtube</RouterLink
        >
        <br />
        <NuxtLink prefetched-class="bg-yellow" to="/">Nuxt Link Home</NuxtLink>
        <NuxtLink to="https://youtube.com/@gymcoding"
          >Nuxt Link Youtube</NuxtLink
        >
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
