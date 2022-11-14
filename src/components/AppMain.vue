<script>
import CharacterList from './CharacterList.vue';
import AppLoader from './AppLoader.vue';
export default {
    name: 'AppMain',
    components: {
        CharacterList,
        AppLoader,
    }
}
</script>

<template>

    <main id="site_main">
        <CharacterList />
        <AppLoader />
    </main>
    <!-- /#site_main -->

</template>

<style>

</style>