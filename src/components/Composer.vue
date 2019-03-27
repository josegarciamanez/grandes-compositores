<template>
  <section>
    <div class="container is-fluid main-container mt-5">
      <div class="columns is-flex is-multiline">
        <div class="column is-half-desktop is-full-tablet is-full-mobile p-3">
          <div class="card box animated fadeIn">
            <div class="card-image">
              <figure class="image">
                <img :src="compositor.img">
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-half-desktop is-full-tablet is-full-mobile p-3">
          <div class="card box animated fadeIn">
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-5 has-text-primary">{{ compositor.nombre }}</p>
                  <p class="has-text-center has-text-link">NACIMIENTO: {{ compositor.nacimiento }}</p>
                  <p
                    class="has-text-center has-text-link mb-3"
                  >FALLECIMIENTO: {{ compositor.fallecimiento }}</p>
                  <span v-html="compositor.bio" class="has-text-left"></span>
                </div>
              </div>
              <div class="content has-text-centered mt-5">
                <router-link
                  to="/"
                  tag="button"
                  class="button is-primary is-outlined is-rounded is-small"
                >Volver...</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="card box animated fadeIn">
            <div class="has-text-center">
              <h2 class="has-text-primary mt-5 mb-2">ESCUCHAR OBRAS PRINCIPALES</h2>
              <ul>
                <li v-for="(track, i) in tracks" :key="i">
                  <a :href="track.url" target="_blank">{{track.name}}</a>
                </li>
              </ul>
            </div>
            <div class="content has-text-centered mt-5">
              <router-link
                to="/"
                tag="button"
                class="button is-primary is-outlined is-rounded is-small"
              >Volver...</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import json from "../assets/data.json";
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  name: "Composer",
  props: {},
  data() {
    return {
      compositor: json.json[this.$route.params.id],
      tracks: []
    };
  },
  mounted: function() {
    this.axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${
          this.compositor.nombre
        }&api_key=5eea612c4df88414e2cd318a72c1dc37&format=json`
      )
      .then(response => {
        console.log(response.data.results.trackmatches.track);
        this.tracks = response.data.results.trackmatches.track;
      });
  }
  /* created: function() {
    console.log(this.$route.params.id);
  } */
};
</script>

<style scoped>
li {
  list-style-type: none;
}
svg {
  width: 100%;
}
</style>

