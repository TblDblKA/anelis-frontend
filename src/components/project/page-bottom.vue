<template>
  <div class="page-bottom">
    <div class="page-bottom__content">
      <div class="page-bottom__elem">
        <div class="page-bottom__title">
          WANT TO WORK IN OUR COMPANY? SUBMIT A FORM!
        </div>
        <div class="page-bottom__form">
          <input
              placeholder="your name"
              class="page-bottom__input"
          />
          <div class="page-bottom__contact">
            <input
                class="page-bottom__input page-bottom__email"
                placeholder="email"
            />
            <div class="page-bottom__contact-button">
              contact me
            </div>
          </div>
        </div>
      </div>
      <div class="page-bottom__elem">
        <div class="page-bottom__title">
          ADDRESS
        </div>
        <div class="page-bottom__address">
          <div class="page-bottom__adress-text">
            179/450 Had Surin Soi 4,
          </div>
          <div class="page-bottom__adress-text">
            Moo 3 Choengtalay, Thalang
          </div>
        </div>
      </div>
      <div class="page-bottom__elem">
        <div class="page-bottom__title">
          TELEPHONE
        </div>
        <div class="page-bottom__links">
          <div class="page-bottom__telephone">
            +66 62 080 4986
          </div>
          <div class="page-bottom__socials">
            <app-sprite-icon :icon-link="$options.icons.Instagram"/>
            <app-sprite-icon :icon-link="$options.icons.WhatsApp"/>
            <app-sprite-icon :icon-link="$options.icons.Facebook"/>
          </div>
        </div>
      </div>
      <div class="page-bottom__elem">
        <div class="page-bottom__title">
          GET IN TOUCH
        </div>
        <div class="page-bottom__connect">
          <div class="page-bottom__connect-text">
            Feel free to get in touch with us via email
          </div>
          <div class="page-bottom__connect-text">
            buro.anelis@agency
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer__header">
        ANELIS AGENCY
      </div>
      <div class="footer__buttons">
        <router-link
            class="footer__button"
            :to="{ name: 'Policies' }"
        >
          POLICIES
        </router-link>
        <div class="footer__button">
          COMPANY
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'

import Instagram from '@/assets/svg/instagram.svg'
import WhatsApp from '@/assets/svg/whatsapp.svg'
import Facebook from '@/assets/svg/facebook.svg'
export default {
  name: 'page-bottom',
  components: {AppSpriteIcon},
  icons: {
    Instagram,
    WhatsApp,
    Facebook
  },
  methods: {
    onPageChange () {
      this.$router.push({ name: 'Policies' })
    }
  }
}
</script>

<style lang="scss">
.page-bottom {
  padding: 250px 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  &__content {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 100px
  }
  &__elem {
    display: flex;
    flex-direction: column;
    gap: 24px
  }
  &__title {
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    //line-height: 40px;
    letter-spacing: 0;
    text-align: left;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 30px
  }
  &__input {
    background-color: #FFF9F9;
    outline: none;
    border: none;
    color: #131315;
    &:focus {
      outline: #848484;
    }
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    height: 50px;
    padding-left: 20px;
  }
  &__contact {
    display: flex;
    flex-direction: row;
    gap: 0;
    border: 1px solid #FFF9F9;
  }
  &__email {
    width: 55%;
  }
  &__contact-button {
    &:hover {
      text-decoration: underline;
    }
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 auto;
    cursor: pointer;
  }
  &__adress-text {
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  &__telephone {
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.025em;
    text-align: left;
  }
  &__socials {
    display: flex;
    flex-direction: row;
    gap: 8px;
    & .app-sprite-icon {
      height: 24px;
      width: 24px;
      cursor: pointer;
    }
  }
  &__connect {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__connect-text {
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    word-wrap: break-word;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 40px;
  &__header {
    //font-family: SF Pro Display;
    font-size: 90px;
    font-weight: 400;
    letter-spacing: 0;
    text-align: right;
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 80px;
    justify-content: flex-end;
  }
  &__button {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    cursor: pointer;
    border-bottom: 1px solid #131315;
    color: #FFF9F9;
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid #FFF9F9;
    }

  }
}
</style>