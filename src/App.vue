<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSelector from './components/AppSelector.vue';
import { store } from './store.js';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppSelector,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    categorySelector() {

      const selected = this.store.selected;
      const url = `${this.store.API_URL}?category=${selected}`;

      axios.get(url).then(resp => {

        console.log(resp);

        this.store.characters = resp.data;
        this.store.loading = false;
        console.log(this.store.characters);
      })
        .catch(err => {
          console.log(err);
        })
    }
  },
  mounted() {
    this.categorySelector(this.store.API_URL);//invocazione funzione di chiamata Api

  },

}


</script>

<template>

  <AppHeader />

  <div class="container">
    <AppSelector @searchData="categorySelector" />
    <AppMain />
  </div>
</template>
