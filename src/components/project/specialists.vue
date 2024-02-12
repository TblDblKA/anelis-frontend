<template>
  <div class="specialists">
    <img src="@/assets/images/about-us/girls.png" class="specialists__pic"/>
    <div class="specialists__description">A team of specialists  who knows no boundaries</div>
  </div>
</template>

<script>
export default {
  name: "specialists"
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .specialists {
    &__pic {
      width: calc(100% - 60px);
      margin-bottom: 45px;
    }
    &__description {
      font-family: Manrope;
      font-size: 38px;
      font-weight: 400;
      line-height: 52px;
      letter-spacing: 0;
      text-align: center;
      margin-bottom: 270px;
    }
  }
}

@media screen and (max-width: 600px) {
  .specialists {
    &__pic {
      width: calc(100% - 20px);
      margin-bottom: 20px;
    }
    &__description {
      font-family: Manrope;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0;
      text-align: center;
      margin-bottom: 65px;
    }
  }
}
</style>