import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import Composer from "./components/Composer.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/composer/:id",
      name: "composer",
      component: Composer
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
