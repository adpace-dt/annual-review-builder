<template>
  <div class="section">
    <div class="section-menu">Edit</div>
    <h3 class="section-title">Feedback</h3>
    <div class="feedback-title">In your opinion, what are this person's greatest areas of strength?</div>
    <ul v-if="feedbackStrengths" class="section-list">
      <li v-for="(feedback, i) in feedbackStrengths" :key="i">{{ feedback }}</li>
    </ul>
    <div class="feedback-title">In your opinion, what are the main areas of improvement this person should concentrate
      on?
    </div>
    <ul class="section-list">
      <li v-for="(feedback, i) in feedbackImprovements" :key="i">{{ feedback }}</li>
    </ul>
    <div class="feedback-title">Any additional comments?</div>
    <ul class="section-list">
      <li v-for="(feedback, i) in feedbackOther" :key="i">{{ feedback }}</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {
      feedbackItems: ['great', 'nice', 'wonderful', 'smart']
    }
  },
  computed: {
    feedbackStrengths() {
      let data = this.$store.getters.data
      let strengths = []
      if (data) {
        for ( let i = 1; i < data.length ; i++ ) {
          if(data[i][data[0].length - 3].length && data[i][data[0].length - 3] !=='N/A') {
            strengths.push(data[i][data[0].length - 3])
          }
        }
      }
      return strengths
    },
    feedbackImprovements() {
      let data = this.$store.getters.data
      let improvements = []
      if (data) {
        for ( let i = 1; i < data.length ; i++ ) {
          if(data[i][data[0].length - 2] && data[i][data[0].length - 2] !=='N/A') {
            improvements.push(data[i][data[0].length - 2])
          }
        }
      }
      return improvements
    },
    feedbackOther() {
      let data = this.$store.getters.data
      let other = []
      if (data) {
        for ( let i = 1; i < data.length ; i++ ) {
          if(data[i][data[0].length - 1] && data[i][data[0].length - 1] !=='N/A') {
            other.push(data[i][data[0].length - 1])
          }
        }
      }
      return other
    }
  }
}
</script>

<style scoped>
.feedback-title {
  font-weight: bolder;
}
</style>

