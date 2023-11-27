<template>
  <svg
      class="app-sprite-icon"
      @click="onClick"
  >
    <use :xlink:href="`${iconLink}`"></use>
  </svg>
</template>

<script>
/*
Refactored 15.07
*/
export default {
  name: 'app-sprite-icon',
  props: {
    iconLink: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.app-sprite-icon {
  width: 100%;
  height: 100%;
}
</style>
