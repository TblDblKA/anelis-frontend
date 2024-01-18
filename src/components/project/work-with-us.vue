<template>
  <div class="work">
    <div class="work__header">
      <div class="work__header_start">
        <div class="work__header_first">
          WORK WITH
        </div>
        <div class="work__header_second">
          (WE HAVE SOMETHING TO OFFER)
        </div>
      </div>
      <div class="work__header_third">
        US
      </div>
    </div>
    <div class="work__title">
      leave your contacts and we will write to you
    </div>
    <div class="work__form">
      <app-input
        placeholder="name"
        req
        :error="nameError"
        @input="nameError = false"
        v-model="name"
      />
      <app-input
        placeholder="email"
        req
        :error="emailError"
        v-model="email"
        @input="emailError = false"
      />
      <app-input
        placeholder="how did you know about us"
        v-model="source"
      />
      <app-input
        placeholder="surname"
        req
        :error="surnameError"
        v-model="surname"
        @input="surnameError = false"
      />
      <app-input
        placeholder="country"
        v-model="country"
      />
      <app-input
        placeholder="tell more about your project"
        v-model="project"
      />
      <app-input
        placeholder="company name"
        v-model="company"
      />
      <app-input
        placeholder="services you are interested in"
        v-model="services"
      />
      <div
        class="work__submit-button"
        @click="onSendForm()"
      >
          SUBMIT
        </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import AppInput from '@/components/base/app-input'
export default {
  name: 'work-with-us',
  components: {
    AppInput
  },
  data () {
    return {
      name: '',
      email: '',
      source: '',
      surname: '',
      country: '',
      project: '',
      company: '',
      services: '',
      nameError: false,
      surnameError: false,
      emailError: false
    }
  },
  computed: {
  },
  methods: {
    onSendForm () {
      let validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      const validate = validRegex.test(this.email.toLowerCase())
      if (this.name === '' || this.surname === '' || !validate) {
        if (this.name === '') {
          this.nameError = true
        }
        if (this.surname === '') {
          this.surnameError = true
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
          source: this.source || 'NA',
          surname: this.surname,
          country: this.country || 'NA',
          project: this.project || 'NA',
          company: this.company || 'NA',
          services: this.services || 'NA'
        })

      } catch(error) {
          console.log({error})
      }
      this.name = ''
      this.email = ''
      this.source = ''
      this.surname = ''
      this.country = ''
      this.project = ''
      this.company = '',
      this.services = ''
    }
  },
  mounted () {
    emailjs.init('UpdwaIsjU6S8ZNPq5');
  }
}
</script>

<style lang="scss">
.work {
  //position: relative;
  background-image: url("../../assets/images/homepage/mapsicle-map.png");
  height: calc(0.72 * 100vw);
  width: calc(100vw - 60px);
  background-size: cover;
  &__header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &_start {
      //display: flex;
      //flex-direction: column;
      //gap: 10px
      width: max-content;
    }
    &_first {
      padding-top: 36px;
      padding-left: 31px;
      font-weight: 400;
      font-family: SFPro, serif;
      font-size: 212px;
      line-height: 200px;
      word-wrap: break-word;
      text-align: left;
      width: max-content;
      //align-self: flex-start;
    }
    &_second {
      padding-top: 20px;
      padding-left: 31px;
      font-weight: 400;
      font-family: SFPro, serif;
      font-size: 55px;
      line-height: 65px;
      word-wrap: break-word;
      width: max-content;
      //text-align: right;
      font-style: italic;
      //align-self: flex-end;
      position: relative;
      margin: 0 0 0 auto;
    }
    &_third {
      font-weight: 400;
      font-family: SFPro, serif;
      font-size: 212px;
      line-height: 200px;
      word-wrap: break-word;
      text-align: right;
      padding-right: 36px;
      //align-self: flex-start;
    }
    margin-bottom: 10px;
  }
  &__title {
    font-family: Manrope, serif;
    font-size: 40px;
    font-weight: 500;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 36px;
    margin-bottom: 80px;

  }
  &__form {
    padding-left: 36px;
    padding-right: 36px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 99px 50px;
  }
  &__submit-button {
    background-color: #FFF9F9;
    width: 220px;
    font-family: Manrope, serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: 0;
    cursor: pointer;
    color: #131315;
    text-align: center;
  }
}
</style>