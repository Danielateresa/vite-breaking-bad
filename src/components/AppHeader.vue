<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header id="site_header">
        <h1>Breaking Bad Api</h1>
    </header>
    <!-- /#site_header -->

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

img {
    width: 100px;
    aspect-ratio: 1/1;
}

h1 {
    color: $light;
}
</style>