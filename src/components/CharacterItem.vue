<script>
export default {
    name: 'CharacterItem',
    props: {
        character: Object
    }
}
</script>

<template>

    <!-- singola card -->
    <div class="col">
        <div class="character_card border-0 text-center">
            <img :src="character.img" alt="">
            <h6>{{ character.name }}</h6>
            <div class="details text-muted fw-lighter">
                <span>{{ character.category }}</span>
                <span>{{ character.status }}</span>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

.character_card {
    background-color: $dark;
    padding: 1rem;
    border-radius: 0;
    height: 100%;
}

h6 {
    color: $light;
    text-transform: uppercase;
    margin-top: 1rem;
}

span {
    display: block;
}
</style>