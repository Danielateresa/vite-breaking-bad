<script>
import CharacterItem from './CharacterItem.vue';
export default {
    name: 'CharacterList',
    components: {
        CharacterItem,
    }
}

</script>

<template>

    <section class="character mt-4">
        <div class="container">
            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Select category
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <!-- /.dropdown -->

            <div class="character_box">

                <h6>Found 62 characters</h6>
                <div class="row p-2">
                    <CharacterItem /> <!-- aggiungere v-for -->
                </div>
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

h6 {
    background-color: $darker;
    color: $light;
    padding: 1rem
}
</style>