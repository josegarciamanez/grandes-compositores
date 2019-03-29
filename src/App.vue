<template>
  <div id="app">
    <Nav/>
    <Descripcion/>
    <!-- <div class="container">
      <div class="columns">
        <div class="column is-4">
          <Beethoven/>
        </div>
        <div class="column is-4">
          <Bach/>
        </div>
        <div class="column is-4">
          <Mozart/>
        </div>
      </div>
    </div>-->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import "./assets/css/payp.css";
import Descripcion from "./components/Descripcion";
import Beethoven from "./components/Beethoven";
import Bach from "./components/Bach";
import Mozart from "./components/Mozart";
import Nav from "./components/Nav";
import "./assets/css/main.css";

export default {
  name: "App",
  components: {
    Descripcion,
    Nav,
    Beethoven,
    Bach,
    Mozart
  }
};
</script>
