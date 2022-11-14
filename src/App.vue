<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {

          this.store.characters = response.data; /* metto all'interno di store.characters i dati presi dall'api */
          console.log(store.characters);
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message;
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL);

  }
}


</script>

<template>

  <AppHeader />
  <AppMain />

</template>

<style lang="scss" scoped>

</style>
