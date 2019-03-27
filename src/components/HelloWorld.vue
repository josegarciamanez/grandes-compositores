<template>
  <section>
    <div class="container is-fluid main-container mt-5">
      <div class="columns is-flex is-multiline">
        <div
          class="column is-one-third-desktop is-half-tablet is-full-mobile px-3 px-md-3 px-lg-2"
          v-for="(item, idx) in compositores"
          :key="idx"
        >
          <div class="card animated fadeIn">
            <div class="card-image">
              <figure class="image">
                <img :src="item.img">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-5">{{ item.nombre }}</p>
                  <p class="has-text-left">{{ item.resumen | shortBio }}</p>
                </div>
              </div>
              <div class="content has-text-centered">
                <button
                  class="button is-primary is-outlined is-rounded is-small"
                  @click="getComposer(idx)"
                >Ver Más...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import json from "../assets/data.json";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      compositores: json.json
    };
  },
  /*  created: function() {
    console.log(this.compositores);
  }, */
  methods: {
    getComposer: function(idx) {
      // console.log(idx);
      this.$router.push({ path: `/composer/${idx}` });
    }
  },
  filters: {
    shortBio: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.slice(0, 400);
    }
  }
};
</script>
