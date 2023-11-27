<template>
  <div class="results">
    <div class="results__item">
      <div class="results__number">5+</div>
      <div class="results__description">years in marketing</div>
    </div>
    <div class="results__item">
      <div class="results__number">2+</div>
      <div class="results__description">years average duration of work with projects</div>
    </div>
    <div class="results__item">
      <div class="results__number">150+</div>
      <div class="results__description">completed projects</div>
    </div>
    <div class="results__item">
      <div class="results__number">500.000+</div>
      <div class="results__description">dollars in profits we brought to our clients</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "results"
}
</script>

<style lang="scss">
.results {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 150px;
  margin-bottom: 250px;
  &__item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: max-content;
  }
  &__number {
    width: 100%;
    font-family: Manrope;
    font-size: 80px;
    font-weight: 400;
    line-height: 109px;
    color: #FFFFFF;
    border-bottom: 1px solid #727272;
  }
  &__description {
    font-family: Manrope;
    font-size: 30px;
    font-weight: 400;
    line-height: 41px;
    color: #727272;
  }
}
</style>