<template>
  <div @mouseenter="showLiControls" @mouseleave="hideLiControls" class="liContainer">
    <span v-if="liControlsVisible">
      <b-icon icon="trash" aria-hidden="true" class="icon"></b-icon>
    </span>{{ listItem }}
  </div>
</template>

<script>
export default {
  name : "LiControls",
  props: ['listItem', 'idx'],
  data() {
    return {
      highlights       : ['great', 'nice', 'wonderful', 'smart'],
      highlightValue   : '',
      liControlsVisible: false
    }
  },
  methods: {
    showLiControls() {
      this.liControlsVisible = true
    },
    hideLiControls() {
      this.liControlsVisible = false
    }
  }
}
</script>

<style scoped>
.icon {
  position: absolute;
  top: 8px;
  left: -30px;
}
.liContainer {
  position: relative;
}
</style>
