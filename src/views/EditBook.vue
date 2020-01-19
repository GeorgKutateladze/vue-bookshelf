<template>
    <div class="addbook">
        <BookForm :book="book" :isValid="$v.book"/>
    </div>
</template>

<script>
import BookForm from '@/components/BookForm'
import { required, maxValue, numeric } from 'vuelidate/lib/validators'

export default {
    components: {
        BookForm
    },
    data() {
        return {
            book: {
                title: this.$route.params.title || '',
                author: this.$route.params.author || '',
                year: this.$route.params.year || '',
                id: this.$route.params.id || Math.floor(Math.random()*10000)

            }
        }
    },
    validations: {
        book: {
            title: {
                required,
            },
            author: {
                required,
            },
            year: {
                required,
                numeric,
                maxValue: maxValue(2020)
            }
        }
    },
    methods: {
        addBook() {
            this.$store.dispatch('ADD_BOOK', this.book)
            this.$router.push('/')
        },
        editBook() {
            this.$store.dispatch('EDIT_BOOK', this.book)
            this.$router.push('/')
        }
    }
}
</script>
