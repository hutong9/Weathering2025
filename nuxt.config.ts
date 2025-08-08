

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt", // 导航中使用到了，需要保留
  ],
  typescript: {
    typeCheck: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
