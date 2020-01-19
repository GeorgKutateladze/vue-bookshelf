<template>
    <div class="search">
        <input
            type="text" 
            placeholder="Search for the book?"
            autocomplete="off"
            v-model="search" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    watch: {
        search() {
            this.$store.dispatch("FILTER_BOOKS", this.search)
        }
    }
}
</script>

<style scoped>
.search>input {
    color: teal;
    width: 100%;
    height: 40px;
    font-size: 20px;
    outline: none;
    border: none;
    margin-top: 10px;
}
</style>