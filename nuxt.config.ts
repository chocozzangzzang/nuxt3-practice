import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: { shim: false, typeCheck: true },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    vueI18n: resolve('./i18n.config.ts'),
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  ssr: true,
  app: {
    head: {
      title: 'Vue&Nuxt 강의',
      meta: [{ name: 'description', content: '짐코딩 Vue & Nuxt 강의입니다.' }],
    },
  },
});
