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

    <select v-model="store.selected" @change="$emit('searchData')">
        <option disabled selected>Select category</option>
        <option value="Breaking+Bad">Breaking Bad</option>
        <option value="Better+Call+Saul">Better Call Saul</option>

    </select>
    <!-- /.dropdown -->

</template>