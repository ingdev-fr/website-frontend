<template>
  <section class="section">
    <!-- NAVBAR TABS -->
    <ul class="nav nav-tabs pt-3">
      <!-- navlink-1 -->
      <li class="nav-item me-1">
        <a class="nav-link active" href="#">Mission</a>
      </li>
      <!-- navlink-2 -->
      <li class="nav-item me-1">
        <a class="nav-link" href="#">Sites web</a>
      </li>
      <!-- navlink-3 -->
      <li class="nav-item">
        <a class="nav-link" href="#">Applications web</a>
      </li>
    </ul>
    <!-- HERO 1 -->
    <div class="hero">
        <div class="hero__action d-flex flex-column justify-content-center align-items-center">
            <div class="hero__action__text">
            <h1 class="hero__action__text__title mb-5">Le <span class="yellow">d</span>éveloppement <span class="pink">w</span>eb au <span class="blue">s</span>ervice des <span class="pink">f</span>ormations !</h1>
            <p class="hero__action__text__content">Au croisement de l'ingénierie de formation et du développement web, nous accompagnons les entreprises et les organismes de formation dans la digitalisation de leurs services.</p>
            </div>
        </div>
        <div class="hero__picture">
            <img class= "hero__picture__img" src="@/assets/increase-pink.png" alt="">
        </div>
      </div>
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

ul.nav-tabs{
  background: $third-color;
}
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 40px 20px;
      background: rgb(226, 247, 253);
      &__action{
        &__text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $primary-color;
        &__title {
          margin: 7px;
          font-size: 2.6rem;
          font-weight: bold;
          font-family: 'Poppins', Helvetica, Arial, sans-serif;
          }
        &__content {
          font-weight: 400;
          font-size: 1.2rem;
          font-family: 'Poppins', Helvetica, Arial, sans-serif;
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
          height: 250px;
        }
      }
    }
    .nav-link{
      color: $yellow-color;
      background-color: $secondary-color;
      border: 1px solid $yellow-color;
      &.active {
      color: $secondary-color;
      }
    }


    .yellow {
      color: $yellow-color;
    }
    .pink {
      color: $pink-color;
    }
    .blue {
      color: $secondary-color;
    }
    
    // MEDIA QUERIES
        // ----- 769px ------
    @media(min-width: 769px) {
      .hero {
      }
    }
    
      // ----- 899px -----
    @media(max-width: 899px) {
      .hero {
        grid-template-columns: 1fr;
      }
    }
      // ----- 1599px -----
    @media(min-width: 1599px) {
      .hero__action{
        &__text {
          &__title {
            font-size: 2rem;
            width: 90%;
          }
          &__content {
            width: 80%;
            font-size: 25px;
          }
        }
    
      }
    }
      // ----- 1999px -----
    @media(min-width: 1999px) {
      .hero__action{
        &__text {
          &__title {
            font-size: 5rem;
          }
          &__content {
            font-size: 35px;
          }
        }
    
      }
    }

</style>
