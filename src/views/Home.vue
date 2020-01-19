<template>
  <div class="homepage">
    <Search />
    <div class="bookshelf" >
      <BookCard v-for="book in filteredBooks" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard'
import Search from '@/components/Search'

export default {
  components: {
    BookCard,
    Search
  },
  computed: {
    books() {
      return this.$store.state.books
    },
    filter() {
      return this.$store.state.filter
    },
    filteredBooks() {
      return this.books.filter(book => {
        let valid = true;
        if (this.filter
            && !book.title.toLowerCase().includes(this.filter.toLowerCase())
            && !book.author.toLowerCase().includes(this.filter.toLowerCase())
            && !book.year.toLowerCase().includes(this.filter.toLowerCase())) {
            valid = false;
        }
        return valid
      })
    }
  }
}
</script>

<style scoped>
.homepage {
  margin: 0 20px;
}
.bookshelf {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
</style>