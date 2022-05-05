<template>
  <div id="app">
    <h1 class="pageTitle">Annual Review Builder</h1>

    <p>This application automates the process of building an annual review by importing the Microsoft Forms Excel file.
      Simply import the file to build the document. The contents of the excel file can be viewed and edited directly in
      this web application. When editing is complete, click export to build a deliverable .pdf file.</p>

    <button @click="temp" class="btn">retrieve local storage of data object</button>

    <ImportFile/>
    <div v-if="data.length" class="spreadsheetControls">
      <div>
        <button @click="toggleSpreadsheet" class="btn btn-outline-light">Show / Hide Spreadsheet</button>
      </div>
    </div>
    <Spreadsheet v-if="showSpreadsheet" class="spreadsheet"/>

    <Artifact></Artifact>

  </div>
</template>

<script>
import Spreadsheet from '@/components/Spreadsheet.vue'
import ImportFile from '@/components/ImportFile';
import Artifact from '@/components/Artifact';

export default {
  name      : 'App',
  components: {
    Spreadsheet,
    ImportFile,
    Artifact
  },
  methods   : {
    toggleSpreadsheet() {
      this.$store.dispatch('toggleSpreadsheet')
    },
    temp() {
      console.log(window.localStorage.getItem('data'));
    }
  },
  computed  : {
    data() {
      return this.$store.getters.data
    },
    cols() {
      return this.$store.getters.cols
    },
    showSpreadsheet() {
      return this.$store.getters.showSpreadsheet
    }
  }
}
</script>

<style>
html body {
  background: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 20px .5rem 0;
  background: #2c3e50;
}

.pageTitle {
  text-align: center;
}

.spreadsheet {
  margin: 2rem 0;
}

.custom-card {
  border: 2px solid #fff;
  border-radius: 10px;
  overflow-x: scroll;
  padding: 0 .75rem;
}

.spreadsheetControls {
  display: flex;
  width: 100%;
  justify-content: end;
  margin-bottom: 2rem;
}

/*SECTIONS*/

.section {
  text-align: left;
  position: relative;
}

.section-menu {
  position: absolute;
  top: 20px;
  left: 90vw;
  /*background: darkslategrey;*/
  /*opacity: 0.5;*/
}

.section-menu :hover {
  opacity: 1;
}

.section-list {
}
</style>
