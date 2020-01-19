<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  mounted() {
    this.$store.dispatch("GET_BOOKS")

    if (!localStorage.getItem('db')) {
      localStorage.setItem('db', JSON.stringify([]))
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
