<template>
  <div class="cases">
    <div class="cases__header">
      <div class="cases__title_first">WHAT</div>
      <div class="cases__title">
        <div class="cases__title_second">DO WE DO</div>
        <div class="cases__subtitle">
          <div class="cases__subheader">watch our works</div>
          <div class="cases__arrow">
            <app-sprite-icon :icon-link="$options.icons.RightBottomArrow"/>
          </div>
        </div>
      </div>
    </div>
    <div class="cases__content">
      <div class="cases__row">
        <div
            class="cases__elem-wrapper"
            :style="{ width: '30%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/bruxx.png"
              @click="showName('bruxx')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'bruxx'"
          >
            <div class="cases__title">
              Bruxx
            </div>
            <div class="cases__description">
              Social media package, production, pr
            </div>
          </div>
        </div>
        <div
            class="cases__elem-wrapper ceretto"
            :style="{ width: '36%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/cerreto.png"
              @click="showName('ceretto')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'ceretto'"
          >
            <div class="cases__title">
              Ceretto. meat
            </div>
            <div class="cases__description">
              Social media package, production, pr
            </div>
          </div>
        </div>
        <div
            class="cases__elem-wrapper alexandrov"
            :style="{ width: '34%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/alexandrov.png"
              @click="showName('alexandrov')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'alexandrov'"
          >
            <div class="cases__title">
              B. Y. Alexandrov
            </div>
            <div class="cases__description">
              Social media package, production
            </div>
          </div>
        </div>
      </div>
      <div class="cases__row">
        <div
            class="cases__elem-wrapper organic"
            :style="{ width: '48%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/organic.png"
              @click="showName('organic')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'organic'"
          >
            <div class="cases__title">
              epic organic Usa
            </div>
            <div class="cases__description">
              Social media package
            </div>
          </div>
        </div>
        <div
            class="cases__elem-wrapper bakinsky"
            :style="{ width: '29%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/bakinsky.png"
              @click="showName('bakinsky')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'bakinsky'"
          >
            <div class="cases__title">
              Bakinsky.domik
            </div>
            <div class="cases__description">
              Social media package, production, shooting reels
            </div>
          </div>
        </div>
        <div
            class="cases__elem-wrapper zieda-lounge"
            :style="{ width: '23%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/zieda-lounge.png"
              @click="showName('zieda-lounge')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'zieda-lounge'"
          >
            <div class="cases__title">
              Zieda Beauty Lounge
            </div>
            <div class="cases__description">
              Social media package, production, visual concept
            </div>
          </div>
        </div>
      </div>
      <div class="cases__row">
        <div
            class="cases__elem-wrapper"
            :style="{ width: '27%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/bfls.png"
              @click="showName('bfls')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'bfls'"
          >
            <div class="cases__title">
              BFL’S
            </div>
            <div class="cases__description">
              Social media package, menu production, shooting reels
            </div>
          </div>
        </div>
        <div
            class="cases__elem-wrapper tacodor"
            :style="{ width: '46%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/tacodor.png"
              @click="showName('tacodor')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'tacodor'"
          >
            <div class="cases__title">
              Tacodor
            </div>
            <div class="cases__description">
              Social media package, production, shooting reels
            </div>
          </div>
        </div>
        <div
            class="cases__elem-wrapper cffera"
            :style="{ width: '27%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/cffera-short.png"
              @click="showName('cffera')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'cffera'"
          >
            <div class="cases__title">
              cffera
            </div>
            <div class="cases__description">
              Social media package, production, maintaining the corporate platform
            </div>
          </div>
        </div>
      </div>
      <div class="cases__row">
        <div
            class="cases__elem-wrapper mc"
            :style="{ width: '46%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/mcdonalds.png"
              @click="showName('mc')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'mc'"
          >
            <div class="cases__title">
              McDonald's
            </div>
            <div class="cases__description">
              Formation of a strong HR brand, production of commercials, conducting and organizing webinars,
              social networking package
            </div>
          </div>
        </div>
        <div
            class="cases__elem-wrapper zieda-clinic"
            :style="{ width: '54%', height: picHeight }"
        >
          <img
              src="@/assets/images/cases/zieda-clinic.png"
              @click="showName('zieda-clinic')"
          />
          <div
              class="cases__name"
              v-if="currentShownName === 'zieda-clinic'"
          >
            <div class="cases__title">
              Zieda’s clinic
            </div>
            <div class="cases__description">
              Social media package, production,visual concept
            </div>
          </div>
        </div>
      </div>
    </div>
    <results/>
    <work-with-us/>
  </div>
</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'
import RightBottomArrow from '@/assets/svg/right-bottom-arrow.svg'

import Results from '@/components/project/results'
import WorkWithUs from '@/components/project/work-with-us'
export default {
  name: "cases",
  icons: {
    RightBottomArrow
  },
  components: {
    AppSpriteIcon,
    Results,
    WorkWithUs
  },
  props: {
    currentItem: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentShownName: this.currentItem
    }
  },
  computed: {
    picHeight () {
      return window.screen.width > 600 ? '60vh' : '16vh'
    }
  },
  methods: {
    showName (name) {
      this.currentShownName = name
    }
  },
  mounted() {
    if (this.currentItem) {
      const topPosition = document.querySelector(`.${this.currentItem}`).offsetTop
      document.querySelector('.ps').scrollTo(0, topPosition)
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .cases {
    padding: 0 29px;
    &__header {
      display: flex;
      flex-direction: column;
      margin-bottom: 250px;
    }
    &__title_first {
      font-family: SFPro;
      font-size: 230px;
      font-weight: 400;
      line-height: 274px;
      letter-spacing: 0;
      text-align: left;
    }
    &__title {
      display: flex;
      flex-direction: row;
    }
    &__title_second {
      font-family: SFPro;
      font-size: 230px;
      font-weight: 400;
      line-height: 274px;
      letter-spacing: 0;
      text-align: left;
      margin-right: 80px;
      //width: max-content;
    }
    &__subtitle {
      display: inline-block;
      width: 210px;
      align-self: center;
    }
    &__subheader {
      font-family: Manrope;
      font-size: 28px;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0;
      text-align: left;
    }

    &__content {
      display: flex;
      gap: 26px;
      flex-direction: column;
      margin-bottom: 170px;
    }
    &__row {
      display: flex;
      gap: 26px;
      flex-direction: row;
      //height: 470px;
      & img {
        height: 100%;
        width: 100%;
      }
      width: 100%;
    }
    &__elem-wrapper {
      position: relative;
    }
    &__name {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 16px;
      background-color: rgba(0, 0, 0, 0.65);
      padding: 7px;
    }
    &__title {
      font-family: Manrope;
      font-size: 26px;
      font-weight: 400;
      line-height: 36px;
      letter-spacing: 0;
      text-align: center;
      text-transform: uppercase;
    }
    &__description {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0;
      text-align: center;
    }
  }
}

@media screen and (max-width: 600px) {
  .cases {
    padding: 0 8px;
    &__header {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
    &__title_first {
      font-family: SFPro;
      font-size: 60px;
      font-weight: 400;
      line-height: 71px;
      letter-spacing: 0;
      text-align: left;
    }
    &__title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &__title_second {
      font-family: SFPro;
      font-size: 60px;
      font-weight: 400;
      line-height: 71px;
      letter-spacing: 0;
      text-align: left;
      //margin-right: 80px;
      //width: max-content;
    }
    &__subtitle {
      display: inline-block;
      width: 60px;
      align-self: center;
    }
    &__subheader {
      font-family: Manrope;
      font-size: 8px;
      font-weight: 400;
      line-height: 11px;
      letter-spacing: 0;
      text-align: left;
      text-transform: lowercase;
    }

    &__arrow {
      height: 35px;
    }
    &__content {
      display: flex;
      gap: 6px;
      flex-direction: column;
      margin-bottom: 60px;
    }
    &__row {
      display: flex;
      gap: 6px;
      flex-direction: row;
      //height: 470px;
      & img {
        height: 100%;
        width: 100%;
      }
      width: 100%;
    }
    &__elem-wrapper {
      position: relative;
    }
    &__name {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 16px;
      background-color: rgba(0, 0, 0, 0.65);
      padding: 7px;
    }
    &__title {
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0;
      text-align: center;
      text-transform: uppercase;
    }
    &__description {
      font-family: Manrope;
      font-size: 8px;
      font-weight: 400;
      line-height: 11px;
      letter-spacing: 0;
      text-align: center;
    }
  }
}
</style>