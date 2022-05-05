<!--*DO NOT PLACE A TEMPLATE TAG IN THIS COMPONENT OR IT WILL NOT RENDER-->
<script>
import { Bar } from 'vue-chartjs'
export default {
  name: "ChartsAggregate",
  extends: Bar,
  mounted () {
    console.log('chartsAgg mounted');
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}
</script>

