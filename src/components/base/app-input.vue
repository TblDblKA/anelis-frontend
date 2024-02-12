<template>
  <div
    class="app-input__wrapper"
    :class="{ 'app-input__wrapper_error': error }"
  >
    <div class="app-input">
      <input
        type="text"
        :placeholder="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
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
    },
    value: {
      type: String,
      required: true
    },
    error: {
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
@media screen and (min-width: 600px) {
  .app-input {
    &__wrapper {
      border-bottom: 1px solid #FFF9F9;
      width: 100%;
      height: 45px;
      &_error {
        border-bottom: red 1px solid;
      }
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
}

@media screen and (max-width: 600px) {
  .app-input {
    &__wrapper {
      border-bottom: 1px solid #FFF9F9;
      width: 100%;
      //height: 15px;
      &_error {
        border-bottom: red 1px solid;
      }
    }
    & input {
      background: none;
      border: none;
      width: 100%;
      &:focus {
        outline: none;
      }
      font-family: Manrope, serif;
      font-size: 8px;
      font-weight: 400;
      line-height: 13px;
      text-align: left;
      color: #FFF9F9;
    }
  }
}
</style>