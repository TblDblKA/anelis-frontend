<template>
  <div class="not-found">
    <div class="not-found__title">
      404
    </div>
    <div class="not-found__subtitle">
      sorry, the page you opened cannot be found
    </div>
  </div>
</template>

<script>
export default {
  name: "page-not-found"
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .not-found {
    padding: 90px 0 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__title {
      font-size: 400px;
      line-height: 480px;
    }
    &__subtitle {
      font-size: 32px;
      line-height: 43px;
      text-transform: uppercase;
    }
  }
}

@media screen and (max-width: 600px) {
  .not-found {
    padding: 30px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__title {
      font-size: 80px;
      line-height: 95px;
    }
    &__subtitle {
      font-size: 10px;
      line-height: 14px;
      text-transform: uppercase;
    }
  }
}
</style>