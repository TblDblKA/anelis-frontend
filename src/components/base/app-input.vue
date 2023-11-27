<template>
  <div class="app-input__wrapper">
    <div class="app-input">
      <input type="text" :placeholder="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-input',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    req: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    text () {
      return this.req ? `${this.placeholder}*` : this.placeholder
    }
  }
}
</script>

<style lang="scss">
.app-input {
  &__wrapper {
    border-bottom: 1px solid #FFF9F9;
    width: 100%;
    height: 45px;
  }
  & input {
    background: none;
    border: none;
    width: 100%;
    &:focus {
      outline: none;
    }
    font-family: Manrope, serif;
    font-size: 27px;
    font-weight: 400;
    line-height: 37px;
    text-align: left;
    color: #FFF9F9;
  }
}
</style>