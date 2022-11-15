<script>
import CharacterList from './CharacterList.vue';
import AppLoader from './AppLoader.vue';
import { store } from '../store.js'
import axios from 'axios';
export default {
    name: 'AppMain',
    components: {
        CharacterList,
        AppLoader,
    },
    data() {
        return {
            store,

        }
    },
    methods: {
        categorySelector() {


            const url = `${this.store.API_URL}?category=${this.store.selected}`;

            axios.get(url).then(resp => {

                console.log(resp);

                this.store.characters = resp.data.results;

            })
        }
    }
}


</script>

<template>


    <main id="site_main">
        <div class="container">
            <select v-model="store.selected" @change="categorySelector">
                <option value="">Select category</option>
                <option value="Breaking+Bad">Breaking Bad</option>
                <option value="Better+Call+Saul">Better Call Saul</option>

            </select>
            <!-- /.dropdown -->
            <CharacterList />
            <AppLoader />

        </div>


    </main>
    <!-- /#site_main -->

</template>

<style>

</style>