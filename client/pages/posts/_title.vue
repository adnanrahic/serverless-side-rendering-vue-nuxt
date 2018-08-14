<template>
  <h2>Post title: {{ title }}</h2>
</template>

<script>
  export default {
    layout: 'post',
    data () {
      return {
        title: this.$route.params.title
      }
    },
    head () {
      return {
        title: `${this.title} Person`,
        meta: [
          { hid: 'description', name: 'description', content: `You are ${this.title} hello 👋` }
        ]
      }
    }
  }
</script>