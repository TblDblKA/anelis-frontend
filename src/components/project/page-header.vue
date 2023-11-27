<template>
  <div class="page-header">
    <div class="page-header__wrapper">
      <div class="page-header__header">
        <div class="page-header__title">
      <span>
        ANELIS AGENCY
      </span>
        </div>
        <div class="page-header__buttons">
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
    </div>
  </div>

</template>

<script>
export default {
  name: "page-header"
}
</script>

<style lang="scss">
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

</style>