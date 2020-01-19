<template>
    <form @submit.prevent="handleEvent">
            <label for="title">
                <input 
                    type="text" 
                    name="title" 
                    autocomplete="off"
                    placeholder="Book"
                    v-model="book.title"
                    @blur="isValid.title.$touch()">
            </label>
            <label for="author">
                <input 
                    type="text" 
                    name="author" 
                    autocomplete="off"
                    placeholder="Author"
                    :class="{ error: isValid.author.$error}"
                    v-model="book.author"
                    @blur="isValid.author.$touch()">
            </label>
            <label for="year">
                <input 
                    type="year"
                    name="year" 
                    autocomplete="off"
                    placeholder="Year"
                    :class="{ error: isValid.year.$error}"
                    v-model="book.year"
                    @blur="isValid.year.$touch()">
            </label>
            <button :disabled="isValid.$invalid" type="submit">Confirm!</button>
        </form>
</template>

<script>
export default {
    props: {
        book: Object,
        method: Function,
        isValid: Object
    },
    methods: {
        addBook() {
            this.$store.dispatch('ADD_BOOK', this.book)
            this.$router.push('/')
        },
        editBook() {
            this.$store.dispatch('EDIT_BOOK', this.book)
            this.$router.push('/')
        },
        handleEvent() {
            if (this.$route.params.id) {
                return this.editBook()
            } else {
                return this.addBook()
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
input {
    width: 300px;
    height: 40px;
    padding-left: 5px;
    margin-top: 10px;
    outline: none;
    font-size: 18px;
}
button {
    margin: 10px auto;
    width: 300px;
    height: 40px;
    font-size: 18px;
}
</style>