import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { TimelineMax } from "gsap";
import { interpolate } from "polymorph-js";

Vue.use(VueAxios, axios, TimelineMax, interpolate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
