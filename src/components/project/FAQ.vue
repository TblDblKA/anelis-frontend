<template>
  <div class="hp-FAQ">
    <div class="hp-FAQ__header">
      FAQ
    </div>
    <div class="hp-FAQ__content">
      <div
          class="hp-FAQ__text"
          v-for="question in FAQ"
          :key="question.id"
      >
        <div class="hp-FAQ__question">
          <div
              class="hp-FAQ__q"
              @click="onChangeCurrentFAQ(question.id)"
          >
            {{ question.question }}
          </div>
          <div
              class="hp-FAQ__icon"
              @click="onChangeCurrentFAQ(question.id)"
          >
            <app-sprite-icon
                v-if="currentFAQClickedId === question.id"
                :icon-link="$options.icons.Minus"
            />
            <app-sprite-icon
                v-else
                :icon-link="$options.icons.Plus"
            />
          </div>
        </div>
        <div
            class="hp-FAQ__answer"
            v-show="currentFAQClickedId === question.id"
        >
          <!--            TODO: добавить анимации сворачивания и разворачивания -->
          {{ question.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'
import Minus from '@/assets/svg/minus.svg'
import Plus from '@/assets/svg/plus.svg'
export default {
  name: "FAQ",
  icons: {
    Minus,
    Plus
  },
  components: {
    AppSpriteIcon
  },
  data () {
    return {
      FAQ: [
        {
          id: 1,
          question: 'How will social media packaging work?',
          answer: 'Everything starts with analytics, then we propose our version of a profile cap,\n' +
              'development strategy and packaging. We present it to you and make adjustments.\n' +
              'And then we implement the outlined strategy.\n'
        },
        {
          id: 2,
          question: 'How we are signing a contract with you?',
          answer: 'Yes, of course. You are fully protected. We sign a contract with all the important \n' +
              'clauses: confidentiality of information, scope of work, and termination procedures.\n'
        },
        {
          id: 3,
          question: 'How can I pay for the service?',
          answer: 'Payment for services is made on a partial prepayment trailer. \n' +
              'You pay 50 percent of the price at the beginning of the collaboration and 50 percent \n' +
              'of the cost at the end. You can pay in three ways: by credit card, \n' +
              'PayPal or crypto wallet'
        }
      ],
      currentFAQClickedId: 0
    }
  },
  methods: {
    onChangeCurrentFAQ (id) {
      if (this.currentFAQClickedId === id) {
        this.currentFAQClickedId = 0
      } else {
        this.currentFAQClickedId = id
      }
    }
  }
}
</script>

<style lang="scss">
.hp-FAQ {
  margin-bottom: 220px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  &__header {
    font-weight: 400;
    font-family: SFPro, serif;
    font-size: 212px;
    line-height: 252px;
    word-wrap: break-word;
    text-align: center;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__question {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F5F5F5;
    width: 100%;
  }
  &__q {
    font-weight: 400;
    font-family: Manrope, serif;
    font-size: 35px;
    line-height: 90px;
    cursor: pointer;
  }
  &__icon {
    height: 110px;
    width: 50px;
    cursor: pointer;
  }
  &__answer {
    padding-left: 20px;
    font-weight: 400;
    font-family: Manrope, serif;
    font-size: 30px;
    text-align: left;
  }
}
</style>