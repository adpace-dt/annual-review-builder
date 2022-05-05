<template>
<div class="section">
  <h3 class="section-title">Money</h3>
  ${{salaryIncrease}}% bump {{currentSalary}} => ${{newSalary}}
  <h3 class="section-title">Bonus</h3>
${{currentBonus}} => ${{newBonus}}
</div>
</template>

<script>
export default {
  name: "Money",
  data(){
    return {
      currentSalary: 108000,
      salaryIncrease: 4,
      currentBonus: '10000',
      newBonus: '12500'
    }
  },
  computed: {
    newSalary(){
      return this.currentSalary + (this.salaryIncrease / 100 * this.currentSalary)
    }
  }
}
</script>

<style scoped>

</style>
