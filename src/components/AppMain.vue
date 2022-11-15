<script>
import CharacterList from './CharacterList.vue';
import AppLoader from './AppLoader.vue';


export default {
    name: 'AppMain',
    name: 'AppLoader',
    components: {
        CharacterList,
        AppLoader,
    },
}



</script>

<template>


    <main id="site_main">
        <div class="container">
            <!-- <select v-model="store.selected" @change="$emit('searchData')">
                <option value="">Select category</option>
                <option value="Breaking+Bad">Breaking Bad</option>
                <option value="Better+Call+Saul">Better Call Saul</option>

            </select> -->
            <!-- /.dropdown -->

            <CharacterList />
            <AppLoader />

        </div>


    </main>
    <!-- /#site_main -->

</template>

<style>

</style>