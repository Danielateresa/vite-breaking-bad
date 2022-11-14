<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header id="site_header">
        <img src="../assets/img/breaking.png" alt="">
        <h1>Breaking Bad Api</h1>
    </header>
    <!-- /#site_header -->

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

img {
    height: 50px;
    aspect-ratio: 1/1;
}


h1 {
    color: $light;
    display: inline;
    margin-left: 1rem;
}
</style>