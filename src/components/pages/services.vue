<template>
  <div class="our-services">
    <div class="header__wrapper">
      <div class="header">
        <div class="header__subtitle">
          <div class="header__text">
            The team helps businesses delegate
            the Brand's social media presence while maintaining a high quality, strategic approach and philosophy. Buro has a clear structure, sound methodology and a professional team
            that helps your business reach new heights.
          </div>
          <div class="header__arrow">
            <app-sprite-icon :icon-link="$options.icons.RightBottomArrow"/>
          </div>
        </div>
        <div class="header__title">
          OUR SERVICES
        </div>
      </div>
    </div>
    <div class="our-services__content">
      <div
          class="service__wrapper"
          :id="elemId(service.id)"
          v-for="service in services"
          :key="service.id"
      >
        <div
            class="service__header"
            :class="`service_${service.id}`"
        >
          <div class="service__number">
            {{ service.id }}
          </div>
          <div class="service__title">
            <div class="">
              {{ service.title1 }}
            </div>
            <div class="">
              {{ service.title2 }}
            </div>
          </div>
        </div>
        <div class="service__subheader">
          <div class="service__description">
            {{ service.subtitle }}
          </div>
          <div
              class="service__button"
              @click="onTarifsClick(service.id)"
          >
            Tarifs
          </div>
        </div>
        <vue-custom-scrollbar
            class="scroll-area__services"
            :settings="settings"
            tagname="div"
        >
        <div
            class="service__tariffs"
            :class="`tariffs_${service.id}`"
        >
          <div
              class="tariff__wrapper"
              v-for="tariff in service.tarifs"
              :key="tariff.key"
          >
            <div class="tariff__name">
              {{ tariff.name }}
            </div>
            <div class="tariff__content">
              <ul class="tariff__points">
                <li
                    class="tariff__point"
                    v-for="point in tariff.points"
                    :key="point.id"
                >
                  {{ point.text }}
                </li>
              </ul>
              <div class="tariff__bottom">
                <div
                    v-if="tariff?.footer"
                    class="tariff__footer"
                >
                  {{ tariff.footer }}
                </div>
                <div
                    class="tariff__price"
                    @click="onPriceClick()"
                >
                  {{ tariff.price }}
                </div>
              </div>
            </div>
          </div>
        </div>
        </vue-custom-scrollbar>
      </div>
    </div>
    <div class="our-services__info">
      Submit a form to get more information
    </div>
    <div class="our-services__arrow">
      <app-sprite-icon :icon-link="$options.icons.RightArrow"/>
    </div>
    <specialists/>
    <results/>
    <f-a-q/>
    <work-with-us/>
  </div>
</template>

<script>
import AppSpriteIcon from '@/components/base/app-sprite-icon'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

import Specialists from '@/components/project/specialists'
import Results from '@/components/project/results'
import FAQ from '@/components/project/FAQ'
import WorkWithUs from '@/components/project/work-with-us'

import RightBottomArrow from '@/assets/svg/right-bottom-arrow.svg'
import RightArrow from '@/assets/svg/long-right-arrow.svg'
export default {
  name: 'services',
  components: {
    AppSpriteIcon,
    Specialists,
    Results,
    FAQ,
    WorkWithUs,
    vueCustomScrollbar
  },
  icons: {
    RightBottomArrow,
    RightArrow
  },
  props: {
    currentItem: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      settings: {
        suppressScrollX: false,
        // useBothWheelAxes: true,
        wheelPropagation: true
      },
      services: [
        {
          id: '01',
          title1: 'Packing social',
          title2: 'media accounts',
          subtitle: 'Social networks are the most important tool for brand development. They are integrated into people\'s' +
              ' behavioral habits and allow you to seamlessly remind your audience of your business, increase their loyalty, ' +
              'work to build and strengthen community, and better than other advertising tools, attract new audiences and increase brand awareness.\n',
          tarifs: [
            {
              id: 1,
              name: 'Basic',
              points: [
                {
                  id: 1,
                  text: '9 posts / 50 stories / 5 reels',
                },
                {
                  id: 2,
                  text: '1 tech shoot assignment'
                },
                {
                  id: 3,
                  text: 'Copywriting and design (layouts for the stories)'
                }
              ],
              price: '$ 1139'
            },
            {
              id: 2,
              name: 'Basic+',
              points: [
                {
                  id: 1,
                  text: '21 posts / 100 stories / 8 reels',
                },
                {
                  id: 2,
                  text: '2 tech shoot assignment'
                },
                {
                  id: 3,
                  text: 'Copywriting and design'
                }
              ],
              price: '$ 1429'
            },
            {
              id: 3,
              name: 'Ultimate',
              points: [
                {
                  id: 1,
                  text: '30 posts / 150 stories / 10 reels',
                },
                {
                  id: 2,
                  text: '2 influence companies (mailing to 500 and communication to 50)'
                },
                {
                  id: 3,
                  text: '2 tech shoot assignment'
                },
                {
                  id: 4,
                  text: 'Copywriting and design'
                }
              ],
              price: '$ 2259'
            },
            {
              id: 4,
              name: 'Full',
              points: [
                {
                  id: 1,
                  text: '30 posts / 150 stories / 10 reels / targeting ads',
                },
                {
                  id: 2,
                  text: '2 tech shoot assignment'
                },
                {
                  id: 3,
                  text: 'Copywriting and design'
                }
              ],
              price: '$ 2659'
            },
            {
              id: 5,
              name: 'Premium',
              points: [
                {
                  id: 1,
                  text: '30-50 posts / 200-300 stories / 20 reels',
                },
                {
                  id: 2,
                  text: '3 tech shoot assignment'
                },
                {
                  id: 3,
                  text: '3 influence-activities (mailing to 1.000 thousand accounts, communication with 100 influencers)'
                },
                {
                  id: 4,
                  text: 'Target'
                },
                {
                  id: 5,
                  text: 'Copywriting and design'
                }
              ],
              price: '$ 3759'
            }
          ]
        },
        {
          id: '02',
          title1: 'Organising an',
          title2: 'advertising campaign',
          subtitle: 'The team effectively taps into the work of organizing and running promotional campaigns. We do' +
              ' Influence Collaboration with full management, tracking metrics and selecting opinion leaders with similar' +
              ' values to your brand. We study account metrics in depth, which helps us clearly predict coverage and campaign' +
              ' results during the media planning phase.',
          tarifs: [
            {
              id: 1,
              name: 'Basic target',
              points: [
                {
                  id: 1,
                  text: 'Briefing / creating a plan and calculation of budgets'
                },
                {
                  id: 2,
                  text: 'Creating and selecting advertising layouts'
                },
                {
                  id: 3,
                  text: 'Testing, creating a report on the text and presenting it'
                },
                {
                  id: 4,
                  text: 'Making changes and launching the main volume of the budget'
                },
                {
                  id: 5,
                  text: 'The report at the end of the advertising campaign'
                }
              ],
              price: '$ 1000',
              footer: 'The size of the advertising budget up to $5,000'
            },
            {
              id: 2,
              name: 'Full target',
              points: [
                {
                  id: 1,
                  text: 'Briefing, creating a plan and calculation of budgets'
                },
                {
                  id: 2,
                  text: 'Creating and selecting advertising layouts'
                },
                {
                  id: 3,
                  text: 'Creating a detailed report on the text and presentation of his and suggestions for adjustment'
                },
                {
                  id: 4,
                  text: 'Changes and launching the main volume of the budget'
                },
                {
                  id: 5,
                  text: 'A detailed report at the end of the advertising campaign'
                },
                {
                  id: 6,
                  text: 'Analysis of the results in the recommendations'
                }
              ],
              price: '$ 1500',
              footer: 'The size of the advertising budget up to $10,000'
            },
            {
              id: 3,
              name: 'Basic influence campaign',
              points: [
                {
                  id: 1,
                  text: 'Briefing, creating a media plan'
                },
                {
                  id: 2,
                  text: 'Paying for additional instrument'
                },
                {
                  id: 3,
                  text: 'Analyzing and reporting on efficiency after the test week'
                },
                {
                  id: 4,
                  text: 'Adjusting the plan, implementing the media plan'
                },
                {
                  id: 5,
                  text: 'Reporting on the completion of the companion'
                }
              ],
              price: '$ 1000',
              footer: 'The size of the advertising budget up to $5,000'
            },
            {
              id: 4,
              name: 'Full influence campaign',
              points: [
                {
                  id: 1,
                  text: 'Briefing, creating a media plan'
                },
                {
                  id: 2,
                  text: 'Formation of the target audience and a number of hypotheses'
                },
                {
                  id: 3,
                  text: 'Payment of additional instrument'
                },
                {
                  id: 4,
                  text: 'Analysis and reporting on  efficiency after the test week'
                },
                {
                  id: 5,
                  text: 'Presentation of recommendations for change'
                },
                {
                  id: 6,
                  text: 'Correction of the plan, implementation of the media package'
                },
                {
                  id: 7,
                  text: 'A detailed report on the completion of the package'
                }
              ],
              price: '$ 1500',
              footer: 'The size of the advertising budget up to $10,000'
            },
            {
              id: 5,
              name: 'Advertising campaign on several networking sites',
              points: [
                {
                  id: 1,
                  text: 'Contact us and we will find a customized solution for your task'
                }
              ],
              price: 'from $ 1000',
              footer: 'The size of the advertising budget up to $10,000'
            }
          ]
        },
        {
          id: '03',
          title1: 'creating',
          title2: 'digital tools',
          subtitle: 'Developing a quality design is an important task. Because it can help you to develop \n' +
              'and to be recognized. With the help of corporate identity business shows its uniqueness and forms customers\' ' +
              'perception of the brand. The design should reflect the field \n' +
              'of activity, philosophy, brand strategy and meet the high demands of the market.',
          tarifs: [
            {
              id: 1,
              name: 'Logo design',
              points: [
                {
                  id: 1,
                  text: 'Creating a moodboard'
                },
                {
                  id: 2,
                  text: '3 design options'
                },
                {
                  id: 3,
                  text: '4 edits'
                }
              ],
              price: '$ 200'
            },
            {
              id: 2,
              name: 'Brand identity',
              points: [
                {
                  id: 1,
                  text: 'Creating a moodboard'
                },
                {
                  id: 2,
                  text: '3 logo design and 6 edits'
                },
                {
                  id: 3,
                  text: '3 elements to choose from and 3 edits'
                }
              ],
              price: '$ 600'
            },
            {
              id: 3,
              name: 'Design wrappers: packages, boxes, etc.',
              points: [
                {
                  id: 1,
                  text: 'Creating a moodboard'
                },
                {
                  id: 2,
                  text: '3 design options'
                },
                {
                  id: 3,
                  text: '2 edits'
                }
              ],
              price: '$ 160'
            },
            {
              id: 4,
              name: 'Design Business card',
              points: [
                {
                  id: 1,
                  text: 'Creating a moodboard'
                },
                {
                  id: 2,
                  text: '3 design options'
                },
                {
                  id: 3,
                  text: '4 edits'
                }
              ],
              price: '$ 100'
            },
            {
              id: 5,
              name: 'Design souvenirs: pens, stickers, etc.',
              points: [
                {
                  id: 1,
                  text: 'Creating a moodboard'
                },
                {
                  id: 2,
                  text: '3 design options'
                },
                {
                  id: 3,
                  text: '2 edits'
                }
              ],
              price: '$ 3759'
            }
          ]
        },
        {
          id: '04',
          title1: 'Counselling',
          title2: 'and audit',
          subtitle: 'Having a lot of experience in marketing, strategy and account management, we decided\n' +
              'to expand the pool of standard services and add consulting. During consultations, we help businesses and ' +
              'teams with promotion: we take apart mistakes, conduct analytics, and study metrics. As a result, you will' +
              ' have a clear strategy for solving the problems of promotion, which corresponds to the trends in the field ' +
              'and will help your business to develop more effectively.',
          tarifs: [
            {
              id: 1,
              name: 'Audit of the client\'s paths',
              points: [
                {
                  id: 1,
                  text: 'Analysis of all mep traffic'
                },
                {
                  id: 2,
                  text: 'Search for weaknesses, which is worth finding out, like a recommendation in a file'
                }
              ],
              price: '$ 200'
            },
            {
              id: 2,
              name: 'Basic consultation on social media management',
              points: [
                {
                  id: 1,
                  text: 'We look at the situation from beginning to end, give recommendations, make the call' +
                      ' report and recommendations in google doc'
                }
              ],
              price: '$ 200'
            },
            {
              id: 3,
              name: 'Full Consultation on social media management',
              points: [
                {
                  id: 1,
                  text: 'We look at the situation from beginning to end, make recommendations, make the call report and ' +
                      'recommendations in a presentation with an extended response.'
                }
              ],
              price: '$ 300'
            },
            {
              id: 4,
              name: 'Training in shooting reels',
              points: [
                {
                  id: 1,
                  text: '3 zoom calls on our program'
                },
                {
                  id: 2,
                  text: 'The basis of composition, natural and artificial light'
                },
                {
                  id: 3,
                  text: 'The basis of shooting, trends (where to look for how to feel and adapt)'
                },
                {
                  id: 4,
                  text: 'Editing (application, tips, professional effects)'
                },
                {
                  id: 5,
                  text: 'The reels mechanics (the theory of retention, disclosure of the subject, formats)'
                }
              ],
              price: '$ 800'
            }
          ]
        }
      ]
    }
  },
  methods: {
    elemId (elem) {
      return `service_${elem}`
    },
    onTarifsClick (id) {
      const scrollableElement = document.querySelector(`.tariffs_${id}`)
      const topPosition = scrollableElement.parentNode.offsetTop - 50
      console.log(topPosition, window.pageYOffset)
      console.log(scrollableElement.parentNode)
      document.querySelector('.ps').scrollTo(0, topPosition)
    },
    onPriceClick () {
      const topPosition = document.querySelector('.work').offsetTop
      document.querySelector('.ps').scrollTo(0, topPosition)
    },
  },
  mounted() {
    if (this.currentItem) {
      const topPosition = document.querySelector(`.service_${this.currentItem}`).offsetTop
      document.querySelector('.ps').scrollTo(0, topPosition)
    }

    const scrollableParent = document.querySelector('.our-services')
    scrollableParent.addEventListener('wheel', (e) => {
      const scrollableChildren = document.querySelectorAll('.service__tariffs')
      let visibleChild = null
      scrollableChildren.forEach((elem) => {
        const rect = elem.getBoundingClientRect()
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
        if ((rect.bottom < viewHeight) && (rect.top >= 0)) {
          visibleChild = elem
        }
        if ((rect.height + 50 > viewHeight) && (rect.bottom < viewHeight) &&
            ((e.deltaY > 0) || (rect.bottom - e.deltaY > viewHeight))
        ) {
          visibleChild = elem
        }
      })
      if (visibleChild) {
        const parentElem = visibleChild.parentNode
        if (((e.deltaY > 0) && (parentElem.scrollLeft === parentElem.scrollLeftMax)) ||
            ((e.deltaY < 0) && (parentElem.scrollLeft === 0))) {
          return
        }
        e.preventDefault()
        e.stopPropagation()
        parentElem.scrollTo(parentElem.scrollLeft + e.deltaY / 2, 0)
      }
    }, { passive: false })
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .our-services {
    padding: 0 29px;
    &__content {
      display: flex;
      flex-direction: column;
      gap: 190px;
      margin-bottom: 220px;
    }
    &__info {
      font-family: Manrope;
      font-size: 40px;
      font-weight: 400;
      line-height: 55px;
      letter-spacing: 0em;
      text-align: left;
    }
    &__arrow {
      width: 198px;
      height: 15px;
      margin-bottom: 250px;
    }
  }

  .header {
    height: calc(100% - 30px);
    padding-left: 29px;
    padding-right: 23px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    &__wrapper {
      position: relative;
      top: -30px;
      background-image: url("../../assets/images/services/crowd.png");
      width: calc(100vw - 60px);
      background-size: cover;
      height: calc(0.49 * 100vw);
      margin-bottom: 277px;
    }
    &__subtitle {
      display: flex;
      flex-direction: column;
      gap: 20px
    }
    &__text {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 27px;
      text-align: left;
    }
    &__title {
      font-size: 230px;
      font-weight: 400;
      line-height: 274px;
      word-wrap: break-word;
      text-align: left;
    }
    &__arrow {
      // TODO: стрелка нормальной ширины
      width: 100%;
    }
  }

  .service {
    display: flex;
    flex-direction: column;
    gap: 190px;
    width: 100vw;
    overflow-x: hidden;
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 90px
    }
    &__header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      border-bottom: 1px solid #D9D9D9;
      gap: 15px;
    }
    &__number {
      font-family: SFPro;
      font-size: 150px;
      font-weight: 600;
      line-height: 179px;
      letter-spacing: 0;
      text-align: left;
    }
    &__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: Manrope;
      font-size: 45px;
      font-weight: 400;
      line-height: 61px;
      letter-spacing: 0em;
      text-align: left;
      word-wrap: break-word;
      //max-width: 350px;
      text-transform: uppercase;
    }
    &__subheader {
      width: 75%;
      align-self: center;
      margin-bottom: 80px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &__description {
      font-family: Manrope;
      font-size: 25px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: left;
    }
    &__button {
      width: 250px;
      height: 50px;
      background-color: #FFF9F9;
      margin: 0 auto 0 0;
      color: #131315;
      text-transform: uppercase;
      font-family: Manrope;
      font-size: 25px;
      font-weight: 500;
      line-height: 50px;
      letter-spacing: 0;
      text-align: center;
      cursor: pointer;
    }

    &__tariffs {
      display: flex;
      flex-direction: row;
      gap: 60px;
      justify-content: space-between;
      overflow-x: hidden;
      //width: calc(100vw - 60px);
      width: max-content;
    }
  }

  .tariff {
    &__wrapper {
      border-left: 1px solid #D9D9D9;
      padding-left: 30px;
      width: 340px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &:last-child {
        margin-right: 100px;
      }
    }
    &__name {
      font-family: Manrope;
      font-size: 29px;
      font-weight: 400;
      line-height: 41px;
      letter-spacing: 0;
      text-transform: uppercase;
      text-align: left;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 150px;
    }
    &__points {
      //position: relative;
      //top: 144px;
      display: flex;
      flex-direction: column;
      gap: 20px
    }
    &__point {
      font-family: Manrope;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0;
      text-align: left;
    }
    &__bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-self: flex-end;
      gap: 150px;
    }
    &__footer {
      font-family: Manrope;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
    }
    &__price {
      width: 230px;
      height: 44px;
      font-family: Manrope;
      font-size: 22px;
      font-weight: 400;
      line-height: 44px;
      letter-spacing: 0em;
      text-align: center;
      border: 1px solid #FFF9F9;
      align-self: center;
      cursor: pointer;
    }
  }

  .scroll-area__services {
    width: 100vw;
    margin: auto;
    position: relative;
    height: auto;
  }
}

@media screen and (max-width: 600px) {
  .our-services {
    padding: 0 9px;
    &__content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__info {
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
    }
    &__arrow {
      & .app-sprite-icon {
        width: 198px;
        height: 12px;
      }
      width: 200px;
      margin-bottom: 20px;
    }
  }

  .header {
    height: calc(100% - 10px);
    padding-left: 9px;
    padding-right: 9px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    &__wrapper {
      position: relative;
      top: -30px;
      left: -9px;
      background-image: url("../../assets/images/services/crowd.png");
      width: 100vw;
      background-size: cover;
      height: calc(0.49 * 100vw);
      margin-bottom: 30px;
    }
    &__subtitle {
      display: flex;
      flex-direction: column;
    }
    &__text {
      font-family: Manrope;
      font-size: 7px;
      font-weight: 400;
      line-height: 9px;
      text-align: left;
    }
    &__title {
      font-size: 55px;
      font-weight: 400;
      line-height: 65px;
      word-wrap: break-word;
      text-align: left;
    }
    &__arrow {
      width: 100%;
      height: 35px;
    }
  }

  .service {
    overflow-x: hidden;
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px
    }
    &__header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      border-bottom: 1px solid #D9D9D9;
      gap: 15px;
    }
    &__number {
      font-family: SFPro;
      font-size: 53px;
      font-weight: 600;
      line-height: 63px;
      letter-spacing: 0;
      text-align: left;
    }
    &__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      word-wrap: break-word;
      //max-width: 350px;
      text-transform: uppercase;
    }
    &__subheader {
      width: 75%;
      align-self: center;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    &__description {
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
    }
    &__button {
      width: 120px;
      height: 30px;
      background-color: #FFF9F9;
      margin: 0 auto 0 0;
      color: #131315;
      text-transform: uppercase;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0;
      text-align: center;
      cursor: pointer;
    }

    &__tariffs {
      display: flex;
      flex-direction: row;
      gap: 15px;
      justify-content: space-between;
      overflow-x: hidden;
      width: max-content;
    }
  }

  .tariff {
    &__wrapper {
      border-left: 1px solid #D9D9D9;
      padding-left: 10px;
      width: 150px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      &:last-child {
        margin-right: 40px;
      }
    }
    &__name {
      font-family: Manrope;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0;
      text-transform: uppercase;
      text-align: left;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;
      flex-grow: 1;
    }
    &__points {
      //position: relative;
      //top: 144px;
      padding-left: 20px!important;
      display: flex;
      flex-direction: column;
      gap: 10px
    }
    &__point {
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0;
      text-align: left;
    }
    &__bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-self: flex-end;
      gap: 15px;
    }
    &__footer {
      font-family: Manrope;
      font-size: 8px;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: center;
      align-self: flex-end;
    }
    &__price {
      width: 100px;
      height: 17px;
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: center;
      border: 1px solid #FFF9F9;
      align-self: center;
      cursor: pointer;
    }
  }

  .scroll-area__services {
    width: 100vw;
    margin: auto;
    position: relative;
    height: auto;
  }
}
</style>