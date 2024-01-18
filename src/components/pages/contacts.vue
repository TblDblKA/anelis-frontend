<template>
  <div class="contacts">
    <div class="contacts__header">
      <div class="contacts__subheader">
        <div class="contacts__title">
          Contacts
        </div>
        <div class="contacts__links">
          <div class="contacts__row">
            <div class="contacts__item">
              <div class="contacts__name">
                collaboration
              </div>
              <a class="contacts__mail" href="mailto:cooperation.Anelis@agency">
                cooperation.Anelis@agency
              </a>
            </div>
            <div class="contacts__item">
              <div class="contacts__name">
                contact our HR manager
              </div>
              <a class="contacts__mail" href="mailto:hr.Anelis@agency">
                hr.Anelis@agency
              </a>
            </div>
          </div>
          <div class="contacts__item">
            <div class="contacts__name">
              Start a whatsapp chat
            </div>
            <!-- <div > -->
              <a
                href="https://wa.me/message/DI3UVFEMU2JTJ1"
                target="_blank"
                rel="noopener"
                class="contacts__button"
              >
                <app-sprite-icon :icon-link="$options.icons.RightArrrow"/>
              </a>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="contacts__image">
<!--        <img src="@/assets/images/map.png"/>-->
      </div>
    </div>
    <results/>
    <work-with-us/>
  </div>
</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'
import Results from '@/components/project/results'
import WorkWithUs from '@/components/project/work-with-us'

import RightArrrow from '@/assets/svg/right-arrow-black.svg'
export default {
  name: 'contacts',
  components: {
    Results,
    AppSpriteIcon,
    WorkWithUs,
  },
  icons: {
    RightArrrow
  }
}
</script>

<style lang="scss">
.contacts {
  padding-left: 21px;
  padding-right: 21px;
  &__header {
    width: 100%;
    z-index: 10;
    position: relative;
    margin-bottom: 250px;
  }
  &__title {
    font-size: 230px;
    font-weight: 400;
    line-height: 274px;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
  }
  &__subheader {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //align-items: flex-end;
    gap: 90px;
    width: 100%;
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 90px;
    height: max-content;
    padding-left: 10px;
  }
  &__row {
    display: flex;
    flex-direction: row;
    gap: 150px;
  }
  &__item {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__name {
    font-family: Manrope;
    font-size: 20px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
  }
  &__mail {
    font-family: Manrope;
    font-size: 20px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0;
    text-align: left;
    cursor: pointer;
    color: #FFF9F9;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &__button {
    //width: 100%!important;
    height: 40px;
    background-color: #FFF9F9;
    padding: 0 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & .app-sprite-icon {
      width: 101px;
      height: 8px;
    }
  }
  &__image {
    position: absolute;
    background-image: url("../../assets/images/map.png");
    height: 100%;
    opacity: .3;
    background-size: cover;
    top: 0;
    bottom: 0;
    right: -21px;
    z-index: -1;
    aspect-ratio: 1.3;
    //width: ;
    & img {
      width: auto;
      height: 100%;
      aspect-ratio: 1.3;
      z-index: -1;
    }
  }
}
</style>