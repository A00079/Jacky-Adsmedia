/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
const Vue = require('vue')
Vue.use(VueScrollTo)

createApp(App)
  .use(router)
  .mount("#app");
