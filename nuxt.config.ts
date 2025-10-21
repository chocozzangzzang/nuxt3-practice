// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: { shim: false, typeCheck: true },
  modules: ['nuxt-quasar-ui'],
  quasar: {
    /* */
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      },
    ],
  },
});
