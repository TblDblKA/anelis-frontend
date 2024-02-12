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
              v-model="name"
              class="page-bottom__input"
              :class="{ 'page-bottom__input_error': nameError }"
              @input="nameError = false"
          />
          <div class="page-bottom__contact">
            <input
                class="page-bottom__input page-bottom__email"
                placeholder="email"
                v-model="email"
                @input="emailError = false"
                :class="{ 'page-bottom__input_error' : emailError }"
            />
            <div
              class="page-bottom__contact-button"
              @click="onSubmitForm"
            >
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
            <a href="tel:+66 62 080 4986">+66 62 080 4986</a>
          </div>
          <div class="page-bottom__socials">
            <a
              href="https://www.instagram.com/buro.anelis/"
              target="_blank"
              rel="noopener"
            >
              <app-sprite-icon :icon-link="$options.icons.Instagram"/>
            </a>
            <a
              href="https://wa.me/message/DI3UVFEMU2JTJ1"
              target="_blank"
              rel="noopener"
            >
              <app-sprite-icon :icon-link="$options.icons.WhatsApp"/>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082230406340&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener"
            >
            <app-sprite-icon :icon-link="$options.icons.Facebook"/>
            </a>
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
            <a
              href="mailto:buro.anelis@agency"
            >
              buro.anelis@agency
            </a>
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
        <router-link
            class="footer__button"
            :to="{ name: 'Home' }"
        >
          COMPANY
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'

import emailjs from 'emailjs-com'

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
  data () {
    return {
      name: '',
      email: '',
      nameError: false,
      emailError: false
    }
  },
  methods: {
    onPageChange () {
      this.$router.push({ name: 'Policies' })
    },
    onSubmitForm () {
      let validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      const validate = validRegex.test(this.email.toLowerCase())
      if (this.name === '' || !validate) {
        if (this.name === '') {
          this.nameError = true
        }
        if (!validate) {
          this.emailError = true
        }
        return
      }
      try {
        emailjs.send('service_s03yd9z', 'template_39ek00t', {
          name: this.name,
          email: this.email,
          source: 'NA',
          surname: 'NA',
          country: 'NA',
          project: 'NA',
          company: 'NA',
          services: 'NA'
        })

      } catch(error) {
          console.log({error})
      }
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .page-bottom {
    padding: 250px 30px 50px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    & a {
      color: #FFF9F9;
      text-decoration: none;
    }
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
      &_error {
        background-color: #cc0000;
        &::placeholder {
          color: #FFF9F9!important;
        }
      }
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
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
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
      & a {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
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
}

@media screen and (max-width: 600px) {
  .page-bottom {
    padding: 43px 10px 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & a {
      color: #FFF9F9;
      text-decoration: none;
    }
    &__content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 10px
    }
    &__elem {
      display: flex;
      flex-direction: column;
      gap: 7px
    }
    &__title {
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      //line-height: 40px;
      letter-spacing: 0;
      text-align: left;
      overflow-x: auto;
    }
    &__form {
      display: flex;
      flex-direction: column;
      gap: 12px
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
      font-size: 7px;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: left;
      height: 13px;
      padding-left: 5px;
      &_error {
        background-color: #cc0000;
        &::placeholder {
          color: #FFF9F9!important;
        }
      }
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
      font-size: 7px;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0 auto;
      cursor: pointer;
    }
    &__adress-text {
      font-family: Manrope;
      font-size: 7px;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0;
      text-align: left;
    }
    &__links {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
    &__telephone {
      font-family: Manrope;
      font-size: 7px;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0.025em;
      text-align: left;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    &__socials {
      display: flex;
      flex-direction: row;
      gap: 7px;
      & .app-sprite-icon {
        height: 13px;
        width: 13px;
        cursor: pointer;
      }
    }
    &__connect {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    &__connect-text {
      font-family: Manrope;
      font-size: 7px;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0;
      text-align: left;
      word-wrap: break-word;
      & a {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__header {
      //font-family: SF Pro Display;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0;
      text-align: right;
    }
    &__buttons {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: flex-end;
    }
    &__button {
      font-family: Manrope;
      font-size: 5px;
      font-weight: 400;
      line-height: 10px;
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
}
</style>