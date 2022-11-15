<script>
import CharacterList from './CharacterList.vue';
import AppLoader from './AppLoader.vue';
import AppSelector from './AppSelector.vue';
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        CharacterList,
        AppLoader,
        AppSelector
    },
    emits: ['searchData'],
    data() {
        return {
            store
        }
    }
}



</script>

<template>


    <main id="site_main">

        <!-- <select v-model="store.selected" @change="$emit('searchData')">
                <option value="">Select category</option>
                <option value="Breaking+Bad">Breaking Bad</option>
                <option value="Better+Call+Saul">Better Call Saul</option>

            </select>
            -->

        <CharacterList />
        <AppLoader />




    </main>
    <!-- /#site_main -->

</template>

<style>

</style>