// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/motion/nuxt', "nuxt-shiki"],
  shiki: {
    bundledThemes: ['github-light'],
    bundledLangs: ['js','python']
  },
  css: ['~/assets/css/tailwind.css'],
  // modules: ['shadcn-nuxt'],
  // shadcn: {
  //   prefix: '',
  //   componentDir: './components/ui'
  // },
  components: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})