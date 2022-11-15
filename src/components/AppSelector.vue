<script>
import { store } from '../store.js'
export default {
    name: 'AppSelector',
    emits: ['searchData'],
    data() {
        return {
            store
        }
    }
}
</script>


<template>

    <select class="select form-select" v-model="store.selected" @change="$emit('searchData')">
        <option value="">Select category</option>
        <option value="Breaking+Bad">Breaking Bad</option>
        <option value="Better+Call+Saul">Better Call Saul</option>

    </select>
    <!-- /select -->

</template>

<style lang="scss" scoped>
select {
    width: fit-content;
}
</style>