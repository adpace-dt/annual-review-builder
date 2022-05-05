<template>
  <div class="section">
    <div class="section-menu">Edit</div>
    <h3>Room for Improvement</h3>
    <ul class="section-list">
      <li v-for="(improvement, i) in improvements" :key="i">{{improvement}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Improvement",
  data() {
    return {
      improvements: ['great', 'nice', 'wonderful', 'smart']
    }
  }
}
</script>

<style scoped>

</style>
