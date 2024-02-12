<template>
  <div class="about-us">
    <div class="about-us__header">
      <div class="about-us__header-wrapper">
        <div class="about-us__title">
          ABOUT &nbsp;US
        </div>
        <div class="about-us__subheader">
          <span>A team of specialists who knows no limits to creativity</span>
        </div>
      </div>
      <div class="about-us__subtitle">
        <span>
          Lack of boundaries in the mindset of our employees allows us to find the best solutions for business.
          We believe that great creativity requires freedom, so we give that freedom to the team. Regular discoveries,
          new experiences, and learning about the cultures of different countries allows our employees to make
          memorable projects around the world.
        </span>
      </div>
    </div>
    <div class="about-us__team-wrapper">
      <div class="about-us__team-header">
        <div class="about-us__team-title">TEAM</div>
        <div class="about-us__team-subtitle">
          In the agency, we have assembled a team
          of professionals who work effectively together, keeping the result in focus. People who have gone through 1000 projects and know everything about social networks.
        </div>
      </div>
    </div>
    <div class="person">
      <div class="person__description">
        <div class="person__title">
          <div class="person__name">An Korsh</div>
          <div class="person__job">Co-founder of Anelis Agency</div>
        </div>
        <div class="person__text">
          “Marketing is what moves things forward:
          the world, businesses, and sales. I like to work
          in a field where development is an integral part
          of your work process. The synergy of creativity
          and marketing, a professional team, and a focus
          on results are the foundation of Anelis Agency's
          work and help our clients reach new heights.”
        </div>
      </div>
      <img src="@/assets/images/about-us/an.png" class="person__photo"/>
    </div>
    <div class="person">
      <img src="@/assets/images/about-us/alena.png" class="person__photo"/>
      <div class="person__description">
        <div class="person__title">
          <div class="person__name">Alena Samsonova</div>
          <div class="person__job">Co-founder of Anelis Agency</div>
        </div>
        <div class="person__text">
          “Marketing is not a one-time pill forall diseases. Many people think that once you design a cool page, the business will immediately soar
          up and the issue of marketing will close forever. But the world develops every second, which means a second and you are not the first in your field.”
        </div>
      </div>
    </div>
    <specialists/>
    <results/>
    <work-with-us/>
  </div>
</template>

<script>
import WorkWithUs from "components/project/work-with-us";
import Specialists from "components/project/specialists";
import Results from '@/components/project/results'
export default {
  name: 'about-us',
  components: {
    Specialists,
    WorkWithUs,
    Results
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .about-us {
    padding: 0 29px;
    &__header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 150px;
    }
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

    &__team {
      &-wrapper {
        background-image: url("../../assets/images/about-us/friends.png");
        height: calc(0.57 * 100vw);
        width: calc(100vw - 60px);
        background-size: cover;
        margin-bottom: 200px;
      }
      &-header {
        height: calc(100% - 100px);
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        padding-left: 26px;
        gap: 75px;
      }
      &-title {
        font-size: 230px;
        font-weight: 400;
        line-height: 274px;
        letter-spacing: 0;
        text-align: left;
      }
      &-subtitle {
        font-family: Manrope;
        font-size: 24px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0;
        text-align: left;
        word-wrap: break-word;
        max-width: 40%;

      }
    }
  }
  .person {
    display: flex;
    padding-left: 60px;
    padding-right: 20px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 200px;

    &__description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 50%;
    }

    &__title {
      gap: 20px
    }

    &__name {
      font-family: Manrope;
      font-size: 50px;
      font-weight: 400;
      line-height: 68px;
      letter-spacing: 0;
      text-align: left;
    }

    &__job {
      font-family: Manrope;
      font-size: 38px;
      font-weight: 400;
      line-height: 52px;
      letter-spacing: 0em;
      text-align: left;
    }

    &__text {
      font-family: Manrope;
      font-size: 30px;
      font-weight: 400;
      line-height: 41px;
      letter-spacing: 0em;
      text-align: left;
    }

    &__photo {
      width: 567px;
    }
  }
}
@media screen and (max-width: 600px) {
  .about-us {
    padding: 0 10px;
    &__header {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: 280px;
      width: fit-content;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 50px;
      &-wrapper {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 16px;
        margin-bottom: 15px;
        border-bottom: 1px solid #FFF9F9;
      }
    }
    &__title {
      font-size: 57px;
      line-height: 68px;
      //text-align: left;
    }
    &__subheader {
      font-size: 10px;
      line-height: 14px;
      text-align: left;
      display: inline-block;
      width: auto;

    }
    &__subtitle {
      flex-grow: 0;
      font-size: 10px;
      line-height: 14px;
      text-align: left;
      //width: inherit;
      //width: 1010px;
    }

    &__team {
      &-wrapper {
        background-image: url("../../assets/images/about-us/friends.png");
        height: calc(0.57 * 100vw);
        width: calc(100vw - 20px);
        background-size: cover;
        margin-bottom: 60px;
        display: flex;
        align-items: flex-end;
      }
      &-header {
        //height: calc(100% - 100px);
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        padding: 0 9px 9px;
        gap: 15px;
      }
      &-title {
        font-family: SFPro;
        font-size: 15vw;
        line-height: 15vw;
        font-weight: 400;
        //line-height: 72px;
        letter-spacing: 2px;
        text-align: left;


      }
      &-subtitle {
        font-family: Manrope;
        font-size: 9px;
        font-weight: 400;
        line-height: 9px;
        letter-spacing: 0;
        text-align: left;
        word-wrap: break-word;
        max-width: 60%;
        align-self: center;

      }
    }
  }
  .person {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
    &__description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 50%;
    }
    &__title {
      gap: 5px
    }
    &__name {
      font-family: Manrope;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0;
      text-align: left;
    }
    &__job {
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
    }
    &__text {
      font-family: Manrope;
      font-size: 8px;
      font-weight: 400;
      line-height: 11px;
      letter-spacing: 0em;
      text-align: left;
    }
    &__photo {
      width: 40%;
    }
  }
}
</style>