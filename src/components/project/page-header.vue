<template>
  <div class="page-header">
    <div class="page-header__wrapper">
      <div class="page-header__header">
        <div class="page-header__title">
          <span>
            ANELIS AGENCY
          </span>
        </div>
        <div
            class="page-header__hamburger page-header__hamburger_close"
            @click.stop="showMenu"
        >
          <app-sprite-icon :icon-link="$options.icons.HamburgerIcon"/>
        </div>
        <div
            class="page-header__buttons"
            v-if="isSmall || isShownMenu"
            v-click-outside="showMenu"
        >
          <router-link
              class="page-header__button"
              :to="{ name: 'Home' }"
          >
            HOME
          </router-link>
          <router-link
              class="page-header__button"
              :to="{ name: 'AboutUs' }"
          >
            ABOUT US
          </router-link>
          <router-link
              class="page-header__button"
              :to="{ name: 'Cases' }"
          >
            CASES
          </router-link>
          <router-link
              class="page-header__button"
              :to="{ name: 'Services' }"
          >
            SERVICES
          </router-link>
          <router-link
            class="page-header__button"
            :to="{ name: 'Contacts' }"
        >
          CONTACTS
        </router-link>
        </div>
      </div>
      <div class="page-header__lang">
        <span class="page-header__eng">
          | ENG
        </span>
      </div>
      <div
          class="page-header__empty"
          v-if="isShownMenu"
      ></div>

    </div>
  </div>

</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'
import HamburgerIcon from '@/assets/svg/hamburger.svg'

export default {
  name: "page-header",
  icons: {
    HamburgerIcon
  },
  data () {
    return {
      isShownMenu: false,
      isSmall: true
    }
  },
  components: {
    AppSpriteIcon
  },
  methods: {
    showMenu () {
      const hamburger = document.querySelector('.page-header__hamburger')
      if (this.isShownMenu) {
        hamburger.className = hamburger.className.replace('page-header__hamburger_open', 'page-header__hamburger_close')
      } else {
        hamburger.className = hamburger.className.replace('page-header__hamburger_close', 'page-header__hamburger_open')
      }
      this.isShownMenu = !this.isShownMenu
    }
  },
  mounted() {
    this.isSmall = !(window.innerWidth <= 600)
  },
  watch: {
    '$route' () {
      this.showMenu()
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .page-header {
    position: relative;
    z-index: 10;
    &__wrapper {
      display: flex;
      flex-direction: column;
      font-size: 22px;
      gap: 30px;
    }
    &__header {
      //width: inherit;
      /*height: 100px;*/
      padding: 50px 30px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
    &__title {
      margin-right: 50px;
      flex-shrink: 0;
    }
    &__buttons {
      display: flex;
      gap: 60px;
    }
    &__button {
      cursor: pointer;
      color: #FFF9F9;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &__lang {
      align-self: flex-end;
      transform: rotate(-90deg);
      line-height: 17px;
      margin-right: 20px;
    }
  }

}

@media screen and (min-width: 600px) {
  .page-header {
    position: relative;
    z-index: 10;
    &__wrapper {
      display: flex;
      flex-direction: column;
      font-size: 22px;
      gap: 30px;
    }
    &__header {
      //width: inherit;
      /*height: 100px;*/
      padding: 50px 30px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
    &__title {
      margin-right: 50px;
      flex-shrink: 0;
    }
    &__buttons {
      display: flex;
      gap: 60px;
    }
    &__button {
      cursor: pointer;
      color: #FFF9F9;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &__lang {
      align-self: flex-end;
      transform: rotate(-90deg);
      line-height: 17px;
      margin-right: 20px;
    }
    &__hamburger {
      display: none;
    }
    &__empty {
      display: none;
    }
  }
}

@media screen and (max-width: 600px) {
  .page-header {
    position: relative;
    z-index: 10;
    &__wrapper {
      display: flex;
      flex-direction: column;
      font-size: 10px;
      gap: 30px;
    }
    &__header {
      //width: inherit;
      /*height: 100px;*/
      padding: 50px 30px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
    &__title {
      margin-right: 50px;
      flex-shrink: 0;
    }
    &__buttons {
      position: absolute;
      display: flex;
      flex-direction: column;
      //top: 20px;
      gap: 25px;
      right: 100px;
      justify-content: flex-end;
    }
    &__button {
      cursor: pointer;
      color: #FFF9F9;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &__lang {
      align-self: flex-end;
      transform: rotate(-90deg);
      line-height: 14px;
      margin-right: 8px;
    }
    &__hamburger {
      cursor: pointer;
      & .app-sprite-icon {
        width: 30px;
        height: 9px;
      }
      width: 30px;
      height: 30px;
      transition: all 0.75s;
      &_close {
        transform: rotate(0deg);
      }
      &_open {
        transform: rotate(90deg);
      }
    }
    &__empty {
      height: 100px;
    }
  }
}
</style>