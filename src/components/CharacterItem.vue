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
        <div class="card border-0">
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

.card {
    background-color: $dark;
    padding: 1rem;
    border-radius: 0;

}

h6 {
    color: $light;
    text-transform: uppercase;
}

span {
    display: block;
}
</style>