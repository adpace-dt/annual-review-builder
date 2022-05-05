<template>
  <div class="section">
    <div class="section-menu">Edit</div>
    <h3>Accomplishments</h3>
    <ul class="section-list">
      <li v-for="(accomplishment, i) in accomplishments" :key="i">{{accomplishment}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Accomplishments",
  data() {
    return {
      accomplishments: ['great', 'nice', 'wonderful', 'smart']
    }
  }
}
</script>

<style scoped>

</style>
