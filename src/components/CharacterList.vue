<script>
export default {
    name: 'CharacterList',
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

        </div>
    </section>
    <!-- /.character -->

</template>

<style lang="scss" scoped>

</style>