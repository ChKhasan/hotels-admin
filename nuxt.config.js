export default {
  head: {
    title: "hotels-admin",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    { src: "~plugins/antd-ui.js", ssr: false },
    { src: "~plugins/quill-editor.js", ssr: false },
    { src: "~/plugins/ymapPlugin.js", mode: "client" },
  ],
  ssr: false,
  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: "https://api.hotels.ndc.uz/api/admin",
  },
  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/axios"],

  build: {},
};
