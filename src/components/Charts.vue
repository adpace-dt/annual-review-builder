<template>
  <div class="section">
    <div class="section-menu">Edit</div>
    <h3>Aggregate Results</h3>
    <charts-aggregate></charts-aggregate>
<!--    <h3>Team Results</h3>
    <charts-team></charts-team>-->
  </div>
</template>

<script>
import ChartsAggregate from '@/components/ChartsAggregate';
// import ChartsTeam from '@/components/ChartsTeam';

export default {
  name      : "Charts",
  components: {
    ChartsAggregate,
    // ChartsTeam
  }
}
</script>

<style scoped>

</style>
