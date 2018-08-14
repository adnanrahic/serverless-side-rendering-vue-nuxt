<template>
  <h1>Here you have all posts {{type}}</h1>
</template>

<script>
  export default {
    layout: 'post',
    data () {
      return {
        type: 'Posts'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: blueviolet
  }
</style>
