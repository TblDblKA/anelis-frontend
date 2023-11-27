<template>
  <div class="app-button">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'app-button'
}
</script>

<style lang="scss">
  .app-button {
    & button {
      background-color: #FFF9F9;
      outline: none;
    }
  }
</style>