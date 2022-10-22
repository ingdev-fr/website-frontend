<template>
  <section class="section-jumbotron" :style="{'background-image': `url(${this.$store.state.homepage.hero.backgroundImage})`}">
    <!-- JUMBOTRON 1 -->
    <div class="container-fluid jumbotron py-2 ">
      <!-- JUMBOTRON TEXT -->
      <div class="row jumbotron__text rounded-3 p-3 mx-1 mb-3 col-lg-8">
        <div class="ps-2 pt-3  mb-4 d-flex flex-column text-start justify-content-center">
          <h1 class="jumbotron__text--h1 fw-bold">{{ $store.state.homepage.hero.title }}</h1>
          <p class="jumbotron__text--content fs-5"> {{ $store.state.homepage.hero.content }} </p>
        </div>
      </div>
      <!-- JUMBOTRON CARDS -->
      <div class="row jumbotron__cards">
        <!-- CARD 1 -->
        <div class="mb-3" v-for="(item, id) in $store.state.homepage.hero.cards"  v-bind:key="id"><!--Attention, l'élément que l'on choisit pour la boucle sera celui que l'on va dupliquer pour chaque item-->
          <div class="jumbotron__cards h-100 p-5 text-white rounded-3 d-flex flex-column" :style="{'background-color': item.backgroundColor}">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
            <button class="btn btn-warning jumbotron__button fw-bold mt-auto mx-auto" type="button">{{ item.button }}</button>
          </div>
        </div>
      </div>
    </div>
    <img class="jumbotron__wave" src="../assets/yellow-wave-2.svg" alt="">
  </section>
    
</template>

<script>

export default {
  name: 'HeroSection',

}
</script>

<style scoped lang="scss">

// variables

.section-jumbotron {
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.jumbotron {
  &__button {
  min-width: 200px;
  }
}

// --- MEDIA QUERIES ----
    // ----- 900px ------
@media(min-width: 899px) {
  .jumbotron {
    &__cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}

    // ----- 1600px ------
    @media(min-width: 1399px) {
  .jumbotron {
    &__cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

</style>
