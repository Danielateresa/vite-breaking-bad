<script>
import CharacterItem from './CharacterItem.vue';

import { store } from '../store.js'

export default {
    name: 'CharacterList',
    components: {
        CharacterItem,

    },
    data() {
        return { store, }
    }
}

</script>

<template>

    <section class="character mt-4">

        <div class="character_box">

            <h6>Found 62 characters</h6>

            <div class="row row-cols-5 px-2 g-3">
                <CharacterItem :character="character" v-for="character in store.characters"
                    v-show="store.characters.length === 62" />

            </div>
        </div>

    </section>
    <!-- /.character -->

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

.character_box {
    background-color: $light;
    padding: 2rem;
    margin-top: 1rem;
}

.row {
    height: 100%
}

h6 {
    background-color: $darker;
    color: $light;
    padding: 1rem
}
</style>