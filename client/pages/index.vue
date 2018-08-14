<template>
  <div class="indexMargin">
    <h1>This is the Front Page.</h1>
    <h3>The chosen one is called {{ chosenOne }}</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get("https://swapi.co/api/people/1/");
    return { chosenOne: data.name };
  },
  computed: {
    theName() {
      return this.name || "anon";
    }
  }
};
</script>

<style scoped>
.indexMargin {
  margin: 15px;
}
</style>