<template>
  <section class="section-jumbotron">
    <!-- JUMBOTRON 1 -->
    <div class="container-fluid jumbotron py-2">
      <!-- JUMBOTRON TEXT -->
      <div class="row jumbotron__text rounded-3 p-3 mx-1 mb-3 col-lg-8">
        <div class="ps-2 pt-3  mb-4 d-flex flex-column text-start justify-content-center">
          <h1 class="jumbotron__text--h1 fw-bold">Pilotez vos formations grâce au digital !</h1>
          <p class="jumbotron__text--content fs-5">Au croisement du développement web et de l'ingénierie de formation, nous vous proposons la création d'applications et de sites web optimisés pour la formation, la mise en place de plateformes pédagogiques avec un contenu digital learning adapté. </p>
        </div>
      </div>
      <!-- JUMBOTRON CARDS -->
      <div class="row jumbotron__cards align-items-md-stretch">
        <!-- CARD 1 -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="jumbotron__cards--1 h-100 p-5 text-white rounded-3 d-flex flex-column">
            <h2>Sites web optimisés pour la formation</h2>
            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            <button class="btn btn-warning fw-bold mt-auto w-50 mx-auto" type="button">Example button</button>
          </div>
        </div>
         <!-- CARD 2 -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="jumbotron__cards--2 h-100 p-5  bg-light border rounded-3 d-flex flex-column">
            <h2>Applications web orientées métier</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button class="btn btn-warning fw-bold mt-auto w-50 mx-auto" type="button">Example button</button>
          </div>
        </div>
         <!-- CARD 3 -->
        <div class="col-lg-4 mb-3">
          <div class="jumbotron__cards--3 h-100 p-5 text-white  border rounded-3 d-flex flex-column">
            <h2>Learning Management System</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button class="btn btn-warning fw-bold mt-auto w-50 mx-auto" type="button">Example button</button>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

.section-jumbotron {
  background-image: url('../assets/casque-jaune.jpg');
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
  .section-jumbotron {

  }
}

</style>
