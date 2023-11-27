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
      <app-input placeholder="name" req/>
      <app-input placeholder="email" req/>
      <app-input placeholder="how did you know about us"/>
      <app-input placeholder="surname" req/>
      <app-input placeholder="country"/>
      <app-input placeholder="tell more about your project"/>
      <app-input placeholder="company name"/>
      <app-input placeholder="services you are interested in"/>
      <div class="work__submit-button">SUBMIT</div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/base/app-input'
export default {
  name: 'work-with-us',
  components: {
    AppInput
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