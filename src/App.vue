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
    //chiamata Api per ottenere i dati
    callApi(url) {
      axios.get(url)
        .then(response => {

          this.store.characters = response.data; /* metto all'interno di store.characters i dati presi dall'api */
          //console.log(this.store.characters);
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message;
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL);//invocazione funzione di chiamata Api

  }
}


</script>

<template>

  <AppHeader />
  <AppMain />

</template>

<style lang="scss" scoped>

</style>
