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
    },
    computed: {
        Results() {
            return this.store.characters.length
        }
    }
}

</script>

<template>

    <section class="character mt-4">

        <div class="character_box">

            <h6 v-if="store.characters !== null">Found {{ Results }} characters</h6>

            <div class="row row-cols-5 px-2 g-3">
                <CharacterItem :character="character" v-for="character in store.characters" />

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