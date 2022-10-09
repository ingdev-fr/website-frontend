<template>
  <section>
    <div class="hero">
      <div class="hero__action d-flex flex-column justify-content-center align-items-center">
        <div class="hero__action__text">
          <h1 class="hero__action__text__title mb-5">Le développement web au service de l'ingénierie de formation</h1>
          <p class="hero__action__text__content fs-5">Au croisement de l'ingénierie de formation et du développement web, nous accompagnons les entreprises et les centres de formation dans la digitalisation de leurs services et de leurs formations.</p>
        </div>
        <div class="hero__action__features row g-4 py-5">
          <div class="feature col">
            <img class="hero__action__features__img mb-3" src="../assets/web-icon-transp-5.png" alt="">
            <h2 class="hero__action__features__title mb-5">Sites web<br>optimisés</h2>
            <button class="btn hero__action__button hero__action__button--1">Sites web</button>
          </div>
          <div class="feature col">
            <img class="hero__action__features__img mb-3" src="../assets/web-icon-transp-6.png" alt="">
            <h2 class="hero__action__features__title mb-5">Applications<br>web</h2>
            <button class="btn hero__action__button hero__action__button--2">Applications</button>
          </div>
          <div class="feature col">
            <img class="hero__action__features__img mb-3" src="../assets/web-icon-transp-7.png" alt="">
            <h2 class="hero__action__features__title mb-5">LMS &<br>contenus</h2>
            <button class="btn hero__action__button hero__action__button--3">LMS</button>
          </div>
        </div>
      </div>
      <div class="hero__picture">
        <img class= "hero__picture__img" src="../assets/moodle-ingdev-transp.png" alt="">
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroSection',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// variables
@import "../scss/utils/variables";

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 20px;
  background-color: $third-color;
  &__action{
    &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title {
      margin: 7px;
      font-size: 2.5rem;
      font-weight: bold;
      color: $clear-color;
      }
    &__content {
      color: $clear-color;
    }
    }
    &__features {
      width: 100%;
      &__title {
        font-size: 25px;
        color: $clear-color;
      }
      &__img {
        width: 100px;
        height: auto;
      }
    }
    &__button {
      color: $clear-color;
      font-weight: bold;
      min-width: 100px;
      &--1 {
        background-color: $secondary-color;
      }
      &--2 {
        background-color: $pink-color;
      }
      &--3 {
        background-color: $yellow-color;
      }
    }
  }
  &__picture{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__img {
      width: 90%;
    }
  }
}

// MEDIA QUERIES
    // ----- 769px ------
@media(min-width: 769px) {
  .hero {
    height: 88vh;
  }
}

  // ----- 899px -----
@media(max-width: 899px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media(min-width: 1599px) {
  .hero__action{
    &__text {
      &__title {
        font-size: 3rem;
        width: 90%;
      }
      &__content {
        width: 80%;
      }
    }

  }
}



</style>
