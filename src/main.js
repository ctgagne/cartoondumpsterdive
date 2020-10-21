import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Meta from "vue-meta";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
window.axios = require("axios");

Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
