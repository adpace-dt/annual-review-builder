<template>
<div v-if="parsedData.length" class="card">
  <div class="row">
    <div class="col-xs-12">
      <button :disabled="!parsedData" class="btn btn-success" @click="_export">Export</button>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      <div class="table-responsive">
        <table class="">
          <thead class="col-headers">
          <tr>
            <th v-for="c in cols" :key="c.key">{{ c.name }}</th>
          </tr>
          </thead>
          <tbody class="col-body">
          <tr v-for="(r, key) in parsedData" :key="key">
            <td v-for="c in cols" :key="c.key" class="table-def"> {{ r[c.key] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  mounted() {},
  data() {
    return {
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    _export(evt) {
      /* convert state to workbook */
      const ws = XLSX.utils.aoa_to_sheet(this.data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
      /* generate file and send to client */
      XLSX.writeFile(wb, "sheetjs.xlsx");
    }
  },
  computed: {
    parsedData() {
      return this.$store.getters.data
    },
    cols() {
      return this.$store.getters.cols
    },
    feedbackStrengthsIndex() {
      return this.parsedData[0].indexOf(`In your opinion, what are this person's greatest areas of strength?`)
    }
  }
};
</script>

<style scoped>
.col-headers {
  background: darkgreen;
}

.table-def {
  background: darkslategrey;
}

.card {
  background: white;
}

.dark-text {
  color: black;
  display: inline-flex;
}
</style>

