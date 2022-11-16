<script>
import { store } from '../store.js'
export default {
    name: 'AppLoader',
    data() {
        return { store, }
    }
}


</script>

}

<template>
    <div class="container text-center mt-5" v-show="!store.characters">
        <h1>Attendi il caricamento...</h1>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

h1 {
    color: $light,
}
</style>