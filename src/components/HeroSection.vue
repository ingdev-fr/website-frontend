<template>
  <section class="section-jumbotron" :style="{'background-image': `url(${this.$store.state.homepage.hero.backgroundImage})`}">
    <!-- JUMBOTRON 1 -->
    <div class="container-fluid jumbotron py-2">
      <!-- JUMBOTRON TEXT -->
      <div class="row jumbotron__text rounded-3 p-3 mx-1 mb-3 col-lg-8">
        <div class="ps-2 pt-3  mb-4 d-flex flex-column text-start justify-content-center">
          <h1 class="jumbotron__text--h1 fw-bold">{{ $store.state.homepage.hero.title }}</h1>
          <p class="jumbotron__text--content fs-5"> {{ $store.state.homepage.hero.content }} </p>
        </div>
      </div>
      <!-- JUMBOTRON CARDS -->
      <div class="row jumbotron__cards align-items-md-stretch">
        <!-- CARD 1 -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="jumbotron__cards--1 h-100 p-5 text-white rounded-3 d-flex flex-column">
            <h2>{{ $store.state.homepage.hero.card1.title }}</h2>
            <p>{{ $store.state.homepage.hero.card1.content }}</p>
            <button class="btn btn-warning fw-bold mt-auto w-50 mx-auto" type="button">{{ $store.state.homepage.hero.card1.textButton }}</button>
          </div>
        </div>
         <!-- CARD 2 -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="jumbotron__cards--2 h-100 p-5  bg-light border rounded-3 d-flex flex-column">
            <h2>{{ $store.state.homepage.hero.card2.title }}</h2>
            <p>{{ $store.state.homepage.hero.card2.content }}</p>
            <button class="btn btn-warning fw-bold mt-auto w-50 mx-auto" type="button">{{ $store.state.homepage.hero.card2.textButton }}</button>
          </div>
        </div>
         <!-- CARD 3 -->
        <div class="col-lg-4 mb-3">
          <div class="jumbotron__cards--3 h-100 p-5 text-white  border rounded-3 d-flex flex-column">
            <h2>{{ $store.state.homepage.hero.card3.title }}</h2>
            <p>{{ $store.state.homepage.hero.card3.content }}</p>
            <button class="btn btn-warning fw-bold mt-auto w-50 mx-auto" type="button">{{ $store.state.homepage.hero.card3.textButton }}</button>
          </div>
        </div>
      </div>
    </div>
    <img class="jumbotron__wave" src="../assets/yellow-wave.svg" alt="">
  </section>
    
</template>

<script>

export default {
  name: 'HeroSection',

}
</script>

<style scoped lang="scss">

// variables
@import "../scss/utils/variables";


.section-jumbotron {
  background-size: cover;
  background-repeat: no-repeat;
}

.jumbotron {
  &__cards {
    &--1 {
      background-color: $pink-color-transp;
    }
    &--2 {
      background-color: $clear-color-transp;
    }
    &--3 {
      background-color: $secondary-color-transp;
    }
  }

}

// --- MEDIA QUERIES ----
    // ----- 1200px ------
@media(min-width: 1200px) {

}

</style>
