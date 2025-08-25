// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: [
    'ant-design-vue/dist/reset.css',
    '@/assets/css/jp-theme.css'
  ],
  typescript: {
    strict: true
  },
  alias: {
    '@': '.'
  },
  i18n: {
    locales: [
      { code: 'zh-TW', name: '繁體中文' },
      { code: 'zh-CN', name: '简体中文' },
      { code: 'en', name: 'English' }
    ],
    defaultLocale: 'zh-TW',
    strategy: 'no_prefix'
  }
})