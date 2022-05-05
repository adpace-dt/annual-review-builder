<!--*DO NOT PLACE A TEMPLATE TAG IN THIS COMPONENT OR IT WILL NOT RENDER-->
<script>
import {Bar} from 'vue-chartjs'
import {Line} from 'vue-chartjs'
export default {
  name: "ChartsTeam",
  extends: {Bar, Line},
  props: ['chartData', 'options'],
  mounted() {
    // this.renderChart(this.chartData, this.options)
  }
}
</script>

<style scoped>

</style>
