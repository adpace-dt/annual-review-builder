<template>
  <div class="section" @mouseenter="showControls" @mouseleave="hideControls">

    <div v-if="controlsVisible" class="section-menu">
      <b-button v-b-modal.modal-highlights size="sm" class="mb-2">
        <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
      </b-button>
    </div>

    <b-modal id="modal-highlights" title="Edit Highlights">
      <b-form-textarea v-model="highlightValue" type="text" debounce="300"></b-form-textarea>
      <b-button @click="addHighlight(highlightValue)" class="my-1">Add Highlight</b-button>
      <ul v-if="highlights.length">
        <li v-for="(highlight, i) in highlights" :key="i">{{highlight}}</li>
      </ul>
      <p v-else>Please enter a highlight</p>
    </b-modal>

    <h3>360 Highlights</h3>
    <ul class="section-list">
      <li v-for="(highlight, i) in highlights" :key="i">{{highlight}}</li>
    </ul>

  </div>
</template>

<script>
// import LiControls from '@/components/LiControls';
export default {
  name: "Highlights",
  components: {
    // LiControls
  },
  data() {
    return {
      highlightValue: '',
      controlsVisible: false,
      liControlsVisible: false
    }
  },
  methods: {
    showControls(){
      this.controlsVisible = true
    },
    hideControls(){
      this.controlsVisible = false
    },
    showLiControls(){
      this.liControlsVisible = true
    },
    hideLiControls(){
      this.liControlsVisible = false
    },
    addHighlight(highlightValue){
      this.$store.dispatch({
        type: 'setHighlights',
        data: highlightValue
      })
      this.highlightValue = ''
    }
  },
  computed: {
    highlights(){
      return this.$store.getters.highlights
    }
  }
}
</script>

<style scoped >
.highlights {
}

.highlights :hover {
  box-shadow: 5px -5px 2px 1px #E6E6ED;
             }
</style>
