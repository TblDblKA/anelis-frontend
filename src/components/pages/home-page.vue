<template>
  <div
      class="home-page"
      ref="homepageref"
  >
    <div class="home-page__header">
      <div class="home-page__title">
        WE ARE MARKETING AGENCY
        <div class="home-page__subtitle">
        <span>
          We work for those who wants to be remembered
        </span>
        </div>
      </div>
      <img
          src="@/assets/images/homepage/title.png"
          class="home-page__follow-me"
      />
    </div>
    <div class="home-page__about-us">
      <div class="hp-about-us__title">
        ABOUT &nbsp;&nbsp;US
      </div>
      <div class="hp-about-us__subheader">
        <div class="hp-about-us__subheader_text">
          <span>A team of specialists who knows no limits to creativity</span>
        </div>
        <div class="hp-about-us__subtitle">
          <span>
            Lack of boundaries in the mindset of our employees allows us to find the best solutions for business.
            We believe that great creativity requires freedom, so we give that freedom to the team. Regular discoveries,
            new experiences, and learning aboutt the cultures of different countries allows our employees to make
            memorable projects around the world.
          </span>
        </div>
      </div>
      <div class="hp-about-us__more-button">
        <app-link
            @click="$router.push({ name: 'AboutUs' })"
        >
          MORE
        </app-link>
      </div>
    </div>
    <div class="hp-reviews">
      <div class="hp-reviews__text">
        <div class="hp-reviews__title">
          How to increase the number of subscribers through a bloggers’ collaboration with a brand?
        </div>
        <div class="hp-reviews__subtitle">
          <span>
            Anelis knows how to make the most of blogger collaborations. We analyze competitors, the blogger market,
            their values and the philosophy they communicate to their audience. It’s important to us that bloggers are
            fully aligned with your brand values. We analyze the blogger's audience activity: reach, views, subscribers,
            likes.
          </span>
          <span>
            This allows us to implement the most effective advertising campaigns for our clients.
          </span>
        </div>
      </div>
      <div class="hp-reviews__all-reviews">
        <img
            src="@/assets/images/homepage/reviews.png"
            class="hp-reviews-img"
        />
<!--        <app-link>-->
<!--          VIEW ALL REVIEWS-->
<!--        </app-link>-->
      </div>
      <div class="hp-reviews__review">
        <div class="hp-reviews__review-text">
          <span>
            “We barely had time to send out orders to everyone. They took a huge number of pictures with our product.
            We didn’t even plan for you to find so many cool bloggers. Our audience has grown from 546 followers to
            17,573. It's exactly what we've been looking for for so long. Colleagues, thank you for your work!”
          </span>
        </div>
        <div class="hp-reviews__person">
          <img
              src="@/assets/images/homepage/review-photo.jpg"
              class="hp-reviews__person-photo"
          >
          <div class="hp-reviews__person-fullname">
            <div class="hp-reviews__person-name">
              Anna
            </div>
            <div class="hp-reviews__person-job">
              Co-founder Epic Organic
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hp-our-services">
      <div class="hp-our-services__header">
        OUR SERVICES
      </div>
        <vue-custom-scrollbar
            class="scroll-area__services"
            :settings="settings"
            tagname="div"
        >
          <div class="hp-our-services__content">
<!--        TODO: исправить ошибку с тем, что выравнивание по нижнему краю в разделе OUR SERVICES у маленького элемента-->
        <div
            class="hp-our-services__item"
            v-for="item in serviceList"
            :key="item.header"
        >
          <div class="hp-our-services__item-title">
            <div class="hp-our-services__item-header">
              {{ item.header }}
            </div>
            <div class="hp-our-services__item-label">
              {{ item.label }}
            </div>
          </div>
          <div class="hp-our-services__item-footer">
            <div class="hp-our-services__item-text">
              {{ item.text }}
            </div>
            <div class="hp-our-services__item-link">
              <app-link
                  :minor="true"
                  @click="$router.push({
                    name: 'Services',
                    params: {
                      currentItem: item.header
                    }
                  })"
              >
                Read more
              </app-link>
            </div>
          </div>
        </div>
          </div>
        </vue-custom-scrollbar>
    </div>
    <div class="hp-cases">
      <div class="hp-cases__header">
        VIEW CASES
      </div>
      <div class="hp-cases__content">
        <div class="hp-cases__cases">
          <div class="hp-cases__title">
            <div class="hp-cases__name">ZIEDA'S CLINIC</div>
            <app-link
                :middle="true"
                @click="onCaseClick('zieda-clinic')"
            >
              view case
            </app-link>
          </div>
          <img
              src="@/assets/images/cases/zieda.png"
              class="hp-cases__case-pic"
          />
          <img
              src="@/assets/images/cases/cerreto.png"
              class="hp-cases__case-pic"
          />
          <div class="hp-cases__title">
            <div class="hp-cases__name">CERRETO.MEAT</div>
            <app-link
                :middle="true"
                @click="onCaseClick('ceretto')"
            >
              view case
            </app-link>
          </div>
          <div class="hp-cases__title">
            <div class="hp-cases__name">STARTUP CFFERA</div>
            <app-link
                :middle="true"
                @click="onCaseClick('cffera')"
            >
              view case
            </app-link>
          </div>
          <img
              src="@/assets/images/cases/cffera.png"
              class="hp-cases__case-pic"
          />
        </div>
        <span
          class="hp-cases__view"
          @click="$router.push('/cases')"
        >
          VIEW ALL
        </span>
      </div>
    </div>
    <f-a-q/>
    <work-with-us/>
  </div>
</template>

<script>
import AppLink from 'components/base/app-link'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"


import FAQ from '@/components/project/FAQ'
import WorkWithUs from 'components/project/work-with-us'

export default {
  name: "home-page",
  components: {
    AppLink,
    WorkWithUs,
    FAQ,
    vueCustomScrollbar
  },
  data () {
    return {
      settings: {
        suppressScrollX: false,
        // useBothWheelAxes: true,
      },
      serviceList: [
        {
          header: '01',
          label: 'PACKING SOCIAL MEDIA ACCOUNTS',
          text: 'It doesn’t matter whether you have a new profile or an existing one. The right packaging will help your business grow'
        },
        {
          header: '02',
          label: 'ORGANISING AN ADVERTISING CAMPAIGN',
          text: 'Targeted advertising, influencer marketing, brand ambassador, contextual advertising, raising brand awareness'
        },
        {
          header: '03',
          label: 'IDENTITY AND LAYOUT DESIGN IN SOCIAL MEDIA',
          text: 'Logo, brandbook, presentation design, storis/posts layouts, sticker packs, stationery design'
        },
        {
          header: '04',
          label: 'COUNSELLING AND AUDIT',
          text: 'Advice on profile management, positioning, development point analysis, assistance in developing a promotion strategy'
        }
      ]
    }
  },
  methods: {
    onCaseClick (label) {
      document.querySelector('.ps').scrollTo(0,0)
      this.$router.push({
        name: 'Cases',
        params: {
          currentItem: label
        }
      })
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .home-page {
    padding: 0 29px;
    &__header {
      margin-bottom: 180px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &__title {
      font-size: 240px;
      line-height: 270px;
      font-weight: 400;
      text-align: start;
      display: inline-block;
      margin-bottom: 150px;
    }
    &__subtitle {
      display: inline-block;
      font-size: 25px;
      line-height: 34px;
      width: 290px;
      padding-left: 20px;
      text-align: left;
    }
    &__follow-me {
      width: calc(100% - 60px);
      //height: ;
      padding: 0 25px;
    }
    &__about-us {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 150px;
    }
    &__reviews {
      display: flex;
      flex-direction: row;
      gap: 130px;
      &-img {
        width: 695px;
        height: 800px;
      }
    }
  }

  .hp-about-us {
    &__title {
      font-size: 212px;
      line-height: 253px;
      //text-align: left;
    }
    &__subheader {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: Manrope, serif;
      max-width: fit-content;

      &_text {
        font-size: 40px;
        line-height: 55px;
        text-align: left;
        padding-bottom: 40px;
        margin-bottom: 70px;
        border-bottom: 1px solid #FFF9F9;
        display: inline-block;
        width: auto;
      }
    }
    &__subtitle {
      font-size: 25px;
      text-align: left;
      //width: inherit;
      width: 1010px;
    }
  }

  .hp-reviews {
    display: flex;
    flex-direction: row;
    gap: 70px;
    position: relative;
    justify-content: space-between;
    margin-bottom: 180px;
    &-img {
      max-width: 842px;
      //max-height: 968px;
      width: 100%;
      flex-grow: 1;
    }
    font-family: Manrope, serif;
    &__title {
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      word-wrap: break-word;
      text-align: left;
      max-width: 730px;
      margin-bottom: 50px;
    }
    &__subtitle {
      font-size: 18px;
      min-width: 520px;
      max-width: 620px;
      font-weight: 400;
      line-height: 26px;
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 30px;
      & span + span {
        margin-bottom: 30px;
      }
    }
    &__review {
      position: absolute;
      top: 500px;
      left: 600px;
      max-width: 444px;
      //height: 280px;
      background-color: white;
      box-shadow: 53.9735107421875px 53.9735107421875px 107.947021484375px rgba(0, 0, 0, 0.15);
      border-radius: 8.64px;
      padding: 20px 25px 24px;
    }
    &__review-text {
      color: #131315;
      font-size: 17px;
      font-family: Manrope, serif;
      font-weight: 400;
      line-height: 28.07px;
      word-wrap: break-word;
      text-align: left;
      margin-bottom: 30px;
    }
    &__person {
      display: flex;
      flex-direction: row;
      gap: 15px
    }
    &__person-photo {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
    &__person-fullname {
      //display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: flex-start;
      align-items: flex-start;
      display: inline-flex;
    }
    &__person-name {
      color: #131315;
      font-size: 17.27px;
      font-weight: 600;
    }
    &__person-job {
      color: #131315;
      font-size: 14px;
      font-weight: 400;
    }
    &__all-reviews {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;
      flex-grow: 0.5;
    }
  }

  .hp-our-services {
    font-family: 'SFPro', serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 150px;
    padding-bottom: 20px;
    margin-bottom: 185px;
    &__header {
      font-size: 212px;
      font-weight: 400;
      width: 100%;
      word-wrap: break-word;
      text-align: left;
    }
    &__content {
      display: flex;
      flex-direction: row;
      gap: 60px;
      justify-content: space-between;
    }
    &__item {
      display: flex;
      flex-direction: column;
      width: 20%;
      border-left: 1px solid #D9D9D9;
      padding-left: 55px;
      gap: 250px;
      &-title {
        display: flex;
        flex-direction: column;
        gap: 25px;
        flex-grow: 1;
        flex-shrink: 1;
      }
      &-header {
        font-size: 150px;
        font-weight: 600;
        font-family: SFProSemiBold, serif;
        align-self: flex-start;
      }
      &-label {
        font-size: 24px;
        font-family: Manrope, serif;
        font-weight: 500;
        text-align: left;
        word-wrap: break-word;
        //padding-right: 60px;
        height: 66px;
      }
      &-footer {
        display: flex;
        flex-direction: column;
        gap: 50px;
      }
      &-text {
        display: inline-block;
        text-align: left;
        word-wrap: break-word;
        padding-right: 60px;
        font-size: 17px;
        font-family: Manrope, serif;
        font-weight: 400;
      }
    }
  }

  .hp-cases {
    display: flex;
    flex-direction: column;
    gap: 70px;
    justify-content: space-between;
    margin-bottom: 180px;
    &__header {
      font-weight: 400;
      font-family: SFPro, serif;
      font-size: 212px;
      line-height: 252px;
      word-wrap: break-word;
      text-align: left;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 45px;
    }
    &__cases {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 33px 0;
      margin: 0 auto;

    }
    &__title {
      height: 620px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #131F31;
    }
    &__name {
      font-size: 28px;
      font-family: Manrope, serif;
      font-weight: 400;
      line-height: 38px;
    }
    &__case-pic {
      height: 620px;
    }
    &__view {
      font-size: 30px;
      line-height: 50px;
      cursor: pointer;
      border-bottom: 1px solid #131315;
      flex-shrink: 0;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .home-page {
    padding: 0 9px;
    &__header {
      margin-bottom: 34px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &__title {
      font-size: 57px;
      line-height: 67px;
      font-weight: 400;
      text-align: start;
      display: inline-block;
      margin-bottom: 50px;
      font-family: Manrope;
      word-spacing: 1rem;
    }
    &__subtitle {
      display: inline-block;
      font-size: 8px;
      line-height: 10px;
      width: 100px;
      padding-left: 10px;
      font-family: Manrope;
      text-align: left;
      word-spacing: 2px;
    }
    &__follow-me {
      width: calc(100% - 18px);
      //height: ;
      //padding: 0 25px;
    }
    &__about-us {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 50px;
    }
    &__reviews {
      display: flex;
      flex-direction: row;
      gap: 130px;
      &-img {
        width: 695px;
        height: 800px;
      }
    }
  }

  .hp-about-us {
    &__title {
      font-size: 57px;
      line-height: 68px;
      //text-align: left;
    }
    &__subheader {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: Manrope, serif;
      max-width: fit-content;

      &_text {
        font-size: 10px;
        line-height: 14px;
        text-align: left;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #FFF9F9;
        display: inline-block;
        width: auto;
      }
    }
    &__subtitle {
      font-size: 10px;
      font-family: Manrope;
      line-height: 14px;
      text-align: left;
      //width: inherit;
      width: 300px;
    }
  }

  .hp-reviews {
    //display: flex;
    //flex-direction: row;
    //gap: 70px;
    position: relative;
    justify-content: space-between;
    margin-bottom: 180px;
    &-img {
      width: 161px;
      height: 180px;
      position: absolute;
      bottom: -100px;
      right: 0;
    }
    font-family: Manrope, serif;
    &__title {
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      word-wrap: break-word;
      text-align: left;
      //max-width: 730px;
      margin-bottom: 30px;
    }
    &__subtitle {
      font-size: 10px;
      //min-width: 520px;
      width: 280px;
      font-weight: 400;
      line-height: 15px;
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 30px;
      & span + span {
        margin-bottom: 20px;
      }
      span:last-child {
        width: 70%;
      }
    }
    &__review {
      position: absolute;
      right: 100px;
      //top: 500px;
      //left: 600px;
      max-width: 210px;
      //height: 280px;
      background-color: white;
      box-shadow: 53.9735107421875px 53.9735107421875px 107.947021484375px rgba(0, 0, 0, 0.15);
      border-radius: 8.64px;
      padding: 8px 12px 8px;
    }
    &__review-text {
      color: #131315;
      font-size: 7px;
      font-family: Manrope, serif;
      font-weight: 400;
      line-height: 12px;
      word-wrap: break-word;
      text-align: left;
      margin-bottom: 10px;
    }
    &__person {
      display: flex;
      flex-direction: row;
      gap: 10px
    }
    &__person-photo {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }
    &__person-fullname {
      //display: flex;
      flex-direction: column;
      //gap: 8px;
      justify-content: flex-start;
      align-items: flex-start;
      display: inline-flex;
    }
    &__person-name {
      color: #131315;
      font-size: 10px;
      line-height: 13px;
      font-weight: 600;
    }
    &__person-job {
      color: #131315;
      font-size: 6px;
      font-weight: 400;
    }
    &__all-reviews {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;
      flex-grow: 0.5;
    }
  }

  .hp-our-services {
    font-family: 'SFPro', serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding-bottom: 20px;
    margin-bottom: 50px;
    &__header {
      font-size: 50px;
      font-weight: 400;
      width: 100%;
      word-wrap: break-word;
      text-align: left;
      word-spacing: 4rem;
    }
    &__content {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-between;
    }
    &__item {
      display: flex;
      width: 200px;
      flex-direction: column;
      border-left: 1px solid #D9D9D9;
      padding-left: 10px;
      gap: 15px;
      &-title {
        display: flex;
        flex-direction: column;
        //gap: 25px;
        flex-grow: 1;
        flex-shrink: 1;
      }
      &-header {
        font-size: 53px;
        line-height: 63px;
        font-weight: 600;
        font-family: SFProSemiBold, serif;
        align-self: flex-start;
      }
      &-label {
        font-size: 10px;
        font-family: Manrope, serif;
        font-weight: 500;
        text-align: left;
        word-wrap: break-word;
        //padding-right: 60px;
        height: 60px;
      }
      &-footer {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
      &-text {
        display: inline-block;
        text-align: left;
        word-wrap: break-word;
        padding-right: 20px;
        font-size: 17px;
        font-family: Manrope, serif;
        font-weight: 400;
        width: 130px;
      }
    }
  }

  .hp-cases {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    &__header {
      font-weight: 400;
      font-family: SFPro, serif;
      font-size: 53px;
      line-height: 63px;
      word-wrap: break-word;
      text-align: left;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    &__cases {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 147px);
      gap: 10px 0;
      //margin: 0 auto;

    }
    &__title {
      height: 147px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #131F31;
    }
    &__name {
      font-size: 10px;
      font-family: Manrope, serif;
      font-weight: 400;
      line-height: 38px;
    }
    &__case-pic {
      height: 147px!important;
      width: 180px;
    }
    &__view {
      font-size: 10px;
      line-height: 15px;
      cursor: pointer;
      border-bottom: 1px solid #131315;
      flex-shrink: 0;
      &:hover {
        border-bottom: 1px solid #FFF9F9;
      }
    }
  }
}
</style>