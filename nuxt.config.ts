

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
  // 确保SSR正常工作
  ssr: true,
  // 添加组件自动导入配置
  components: true,
});
