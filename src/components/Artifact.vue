<template>
  <div class="artifact custom-card">
    <h2>Artifact</h2>
    <div>Click Create .PDF at bottom to export</div>
    <highlights></highlights>
    <accomplishments></accomplishments>
    <improvements></improvements>
    <money></money>
    <feedback></feedback>
<!--    <charts></charts>-->
  </div>
</template>

<script>
import Highlights from '@/components/Highlights';
import Accomplishments from '@/components/Accomplishments';
import Improvements from '@/components/Improvements';
import Money from '@/components/Money';
import Feedback from '@/components/Feedback';
// import Charts from '@/components/Charts';

export default {
  name      : "Artifact",
  components: {
    Highlights,
    Accomplishments,
    Improvements,
    Money,
    Feedback,
    // Charts
  }
}
</script>

<style scoped>
.artifact {
  background: #2c3e50;
}
</style>
