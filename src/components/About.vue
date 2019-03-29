<template>
  <div>
    <div class="container box mt-5">
      <Nombre :nombre="nombreM()"/>
      <hr>
      <h2 class="animated fadeIn fast">Desarrollador Web</h2>
      <p class="animated fadeIn">
        Experto en desarrollo Web / Cátedra Universidad-Empresa Innovación y
        Competencias. Universidad Politécnica de Madrid - Programación Web HTML/CSS.
        - Programación PHP. - JavaScript/Ajax. - Bases de Datos MySQL. -
        Administración de Servidores Web (Apache). - “Ecommerce” y Legislación TIC.
      </p>
      <hr>
      <h2 class="animated fadeIn fast">Certificaciones</h2>
      <p class="animated fadeIn">
        Responsive Web Design Projects Node.js: De cero a experto Curso de Vue JS 2
        Diseño Web Desde Cero a Avanzado 45h Aprende a crear tu primer sitio web con
        Laravel 5.4 Crear una aplicación web de Chat con NodeJS y SocketIO Efectos
        CSS3 Introducción a Laravel 5 Javascript en Páginas web SEO
      </p>
    </div>
    <svg
      class="mt-5 pb-5 atom"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-52 -53 100 100"
      stroke-width="1"
      ref="atom"
    >
      <g fill="none">
        <ellipse stroke="#9C688C" rx="6" ry="44"></ellipse>
        <ellipse stroke="#000000" rx="6" ry="44" transform="rotate(-66)"></ellipse>
        <ellipse stroke="#fa7c91" rx="6" ry="44" transform="rotate(66)"></ellipse>
      </g>
      <g fill="#9C688C" stroke="#fff">
        <circle fill="#fa7c91" r="13"></circle>
      </g>
    </svg>
  </div>
</template>

<script>
import Nombre from "./Nombre";
import { TimelineMax } from "gsap";

export default {
  name: "About",
  data: () => ({ nombre: "José García Máñez" }),
  methods: {
    nombreM() {
      return this.nombre.toUpperCase();
    }
  },
  components: {
    Nombre
  },
  mounted() {
    const { atom } = this.$refs;
    const timeline = new TimelineMax({ id: "timeline" });
    timeline.to(
      atom,
      1,
      {
        x: 200,
        rotation: 200,
        ease: Back.easeInOut,
        id: "ida"
      },
      "+=2"
    );
    timeline.to(atom, 2, {
      x: 0,
      rotation: 0,
      ease: Back.easeInOut,
      id: "vuelta"
    });
    GSDevTools.create({ id: "timeline", visibility: "hidden" });
  }
};
</script>

<style scoped>
.atom {
  width: 100px;
}
</style>