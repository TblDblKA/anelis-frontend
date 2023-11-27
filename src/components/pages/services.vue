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
        <div class="service__header">
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
          <div class="service__button">
            Tarifs
          </div>
        </div>
<!--        TODO: Горизонтальный скролл-->
<!--        TODO: сделать блять красиво-->
        <div class="service__tariffs">
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
              <div
                  v-if="tariff?.footer"
                  class="tariff__footer"
              >
                {{ tariff.footer }}
              </div>
              <div class="tariff__price">
                {{ tariff.price }}
              </div>
            </div>
          </div>
        </div>
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
    WorkWithUs
  },
  icons: {
    RightBottomArrow,
    RightArrow
  },
  data () {
    return {
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
              price: '???'
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
              price: '???'
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
    }
  }
}
</script>

<style lang="scss">
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
    //overflow-x: hidden;
    display: flex;
    flex-direction: row;
    gap: 60px;
    justify-content: space-between;
    //width: max-content;
    overflow: scroll;
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
</style>