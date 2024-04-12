// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
