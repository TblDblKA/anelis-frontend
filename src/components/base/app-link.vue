<template>
  <div :class="buttonModifiers">
    <div
        :class="textModifiers"
        @click="$emit('click')"
    >
      <slot></slot>
    </div>
    <div :class="arrowModifiers">
      <app-sprite-icon
          :icon-link="$options.icons.LongRightArrow"
          @click.native="$emit('click')"
      />
    </div>
  </div>
</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'

import LongRightArrow from '@/assets/svg/long-right-arrow.svg'

export default {
  name: "app-link",
  components: {AppSpriteIcon},
  icons: {
    LongRightArrow
  },
  props: {
    minor: {
      type: Boolean,
      default: false
    },
    middle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonModifiers () {
      if (this.minor) {
        return 'app-link-minor'
      }
      else if (this.middle) {
        return 'app-link-middle'
      }
      else {
        return 'app-link-major'
      }
    },
    textModifiers () {
      if (this.minor) {
        return 'app-link-minor__text'
      }
      else if (this.middle) {
        return 'app-link-middle__text'
      }
      else {
        return 'app-link-major__text'
      }
    },
    arrowModifiers () {
      if (this.minor) {
        return 'app-link-minor__arrow'
      }
      else if (this.middle) {
        return 'app-link-middle__arrow'
      }
      else {
        return 'app-link-major__arrow'
      }
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .app-link-major {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 25px;
    &__text {
      font-size: 30px;
      line-height: 50px;
      cursor: pointer;
      border-bottom: 1px solid #131315;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
    &__arrow {
      //align-self: center;
      position: relative;
      top: 15px;
      color: #FFF9F9;
      width: 101px;
      height: 8px;
      &:hover {}
      cursor: pointer;
    }
  }

  .app-link-minor {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    &__text {
      font-size: 17px;
      line-height: 22px;
      cursor: pointer;
      border-bottom: 1px solid #131315;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
    &__arrow {
      //align-self: center;
      position: relative;
      //top: px;
      color: #FFF9F9;
      width: 51px;
      height: 8px;
      &:hover {}
      cursor: pointer;
    }
  }

  .app-link-middle {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    &__text {
      font-size: 22px;
      line-height: 30px;
      cursor: pointer;
      // TODO: фон по фону элемента
      border-bottom: 1px solid #131F31;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
    &__arrow {
      //align-self: center;
      position: relative;
      top: 5px;
      color: #FFF9F9;
      width: 72px;
      height: 8px;
      &:hover {}
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 600px) {
  .app-link-major {
    padding: 5px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    &__text {
      font-size: 20px;
      line-height: 27px;
      cursor: pointer;
      border-bottom: 1px solid #131315;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
    &__arrow {
      //align-self: center;
      position: relative;
      top: 4px;
      color: #FFF9F9;
      width: 80px;
      height: 8px;
      &:hover {}
      cursor: pointer;
    }
  }

  .app-link-minor {
    padding: 3px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    &__text {
      font-size: 10px;
      line-height: 14px;
      cursor: pointer;
      border-bottom: 1px solid #131315;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
    &__arrow {
      //align-self: center;
      position: relative;
      //top: px;
      color: #FFF9F9;
      width: 25px;
      height: 13px;
      &:hover {}
      cursor: pointer;
      & .app-sprite-icon {
        height: 13px;
      }
    }
  }

  .app-link-middle {
    padding: 5px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    &__text {
      font-size: 8px;
      line-height: 11px;
      cursor: pointer;
      border-bottom: 1px solid #131F31;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
    &__arrow {
      //align-self: center;
      position: relative;
      //top: 5px;
      color: #FFF9F9;
      width: 25px;
      height: 15px;
      &:hover {}
      cursor: pointer;
    }
  }
}
</style>