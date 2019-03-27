<template>
  <div id="app">
    <Nav/>
    <Descripcion/>
    <router-view/>
  </div>
</template>

<script>
import "./assets/css/payp.css";
import Descripcion from "./components/Descripcion";
import Nav from "./components/Nav";
import "./assets/css/main.css";

export default {
  name: "App",
  components: {
    Descripcion,
    Nav
  }
};
</script>
