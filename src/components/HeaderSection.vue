<template>
  <header class="header pt-2 px-4 px-md-5">
    <div class="template ">
      <!-- NAVIGATION -->
      <nav class="navbar navbar-expand-lg">
            <div class="container-fluid p-0 ">
              <!-- Logo -->
              <a class="navbar-brand text-white d-flex align-items-center" href="#"><img class="logo-img me-2" src='../assets/svg/logo.svg'/><div class="logo-text">INGDEV</div></a>
              <!-- Toggle button -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- Menu de navigation -->
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-house-user" class="nav-link__icon d-block mx-auto mb-1 active"/>Accueil</a> 
                  </li>
                  <li class="nav-item dropdown mx-2">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><font-awesome-icon icon="fa-solid fa-store" class="nav-link__icon d-block mx-auto mb-1"/>Produits</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Sites Web</a></li>
                      <li><a class="dropdown-item" href="#">Applications Web</a></li>
                      <li><a class="dropdown-item" href="#">Learning System</a></li>
                    </ul>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-lightbulb" class="nav-link__icon d-block mx-auto mb-1"/>Avantages</a>
                  </li>
                  <li class="nav-item mx-5">
                    <a class="nav-link connexion-link" href="#"><font-awesome-icon icon="fa-solid fa-right-to-bracket" class="nav-link__icon d-block mx-auto mb-1"/>Connexion</a>
                  </li>
                  <li class="nav-item ms-5 d-flex align-items-center justify-content-center">
                    <button class="nav-link btn nav-link__contactButton px-2" href="#">Contactez-nous</button>
                  </li>
                </ul>
              </div>
            </div>
      </nav>
      <!-- HERO SECTION -->
      <section class="jumbotron-container mt-4">
            <!-- JUMBOTRON TEXT -->
            <div id="jumbotron__text" class="row jumbotron__text rounded-3 py-3 col-md-10 col-lg-8">
              <div class="pt-3 d-flex flex-column text-start justify-content-center">
                <div class="d-flex align-items-end">
                  <svg id="chart" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="chart-1">
                      <g id="rect">
                        <rect id="rect-blue" x="230" y="260" width="36" height="152" transform="rotate(-180 230 260)" fill="url(#paint0_linear_38_764)"/>
                        <rect id="rect-purple" x="173" y="260" width="36" height="179" transform="rotate(-180 173 260)" fill="url(#paint1_linear_38_764)"/>
                        <rect id="rect-pink" x="116" y="260" width="36" height="139" transform="rotate(-180 116 260)" fill="url(#paint2_linear_38_764)"/>
                        <rect id="rect-yellow" x="59" y="260" width="36" height="110" transform="rotate(-180 59 260)" fill="url(#paint3_linear_38_764)"/>
                      </g>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_38_764" x1="248" y1="473" x2="248" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#86C7ED"/>
                      <stop offset="1" stop-color="#86C7ED" stop-opacity="0.68"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_38_764" x1="191" y1="476.5" x2="191" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A066CB"/>
                      <stop offset="1" stop-color="#A066CB" stop-opacity="0.76"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_38_764" x1="134" y1="457.5" x2="134" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F62992"/>
                      <stop offset="1" stop-color="#F62992" stop-opacity="0.55"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_38_764" x1="77" y1="451" x2="77" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFCA08"/>
                      <stop offset="1" stop-color="#FFCA08" stop-opacity="0.66"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <h1 class="jumbotron__text--h1 fw-bold fs-1" >{{ $store.state.homepage.hero.title }}</h1>
                </div>
                <p class="jumbotron__text--content fs-5 mt-3"> {{ $store.state.homepage.hero.content }} </p>
              </div>
            </div>
            <!-- TECHNOLOGIES -->
                <div class="jumbotron__technologies mb-3">
                  <div class="technologies__pictures d-flex flex-wrap">
                    <div v-for="(item, id) in $store.state.homepage.about.technologies.logos"  v-bind:key="id"><img :src=url+item.attributes.url :alt=item.attributes.caption class="technologies__img rounded-1 ms-2 mb-2"></div>
                  </div>                   
                </div>
          <!-- JUMBOTRON CARDS -->
          <div class="jumbotron__cards d-flex align-items-center justify-content-between">
            <!-- CARD 1 -->
            <div v-for="(item, id) in $store.state.homepage.hero.cards"  v-bind:key="id"><!--Attention, l'élément que l'on choisit pour la boucle sera celui que l'on va dupliquer pour chaque item-->
              <div class="jumbo__card py-3 px-4 me-3 mb-3text-white rounded-3 d-flex flex-column" :style="{'background-color': item.backgroundColor}">
                <div class="d-flex">
                  <img class="jumbo__icon me-2" src="../assets/images/computer.png" alt="">
                  <p class="jumbo__card-intro fs-5">Performance et fonctionnalités</p>
                </div>
                <h2>{{ item.title }}</h2>
                <p>{{ item.content }}</p>

                <button class="btn jumbotron__button fw-bold mt-auto mx-auto" type="button">{{ item.button }}</button>
              </div>
            </div>
          </div>
      </section>
    </div>
  </header>
</template>

<script>

export default {
    name: 'HeaderSection',

    data () {
        return {
            show: false,
            url: this.$store.state.urlUploads,
        }
    }
}
</script>

<style scoped lang="scss">
// Variables

.header{
  background: url('../assets/images/iphone-header.png');
  background-size: contain;
  background-repeat: no-repeat;

}

.navbar {
  &-toggler {
    background-color: $yellow-color;
  }
  &-brand {
    height: 40px;
  }
  & .nav-item {
    display: block;
  }
  & .nav-link {
    color: $clear-color;
    &:hover {
      transform: scale(1.05);
    }
    &__icon {
      width: 18px;
      height: 18px;
    }
    &__contactButton{
      color: $clear-color;
      background-color: $pink-color;
      &:hover {
      background-color:$secondary-color;
      }
    }
  }
  & .active {
    color: $pink-color !important;
  }
  & .connexion-link {
    color: $secondary-color;
  }
}

.logo-img {
  height: 40px;
}

.logo-text {
  font-size: 40px;
}

.active {
  color: $pink-color;
}

#chart {
  height: 100px;
  width: auto;
}

.technologies {
    &__img {
        height: 5vh;
        box-shadow: 5px 4px 3px rgba($primary-color, 0.25);
    }
}

.feature {
    &__title {
        color: $clear-color;
    }
    &__content {
        color: $clear-color;
    }
}

.jumbotron {
  &__button {
  min-width: 200px;
  background: $pink-color;
  color: $clear-color;
  }
  &__text {
    color: $clear-color;
  }
}

.jumbo__card {
  opacity: 0.95;
  box-shadow: 5px 4px 4px rgba($primary-color, 0.25);
  &-intro {
    color: $secondary-color;
  }
}

.jumbo__icon {
  height: 35px;
  width: auto;
}

.arrows {
  width: 250px;
}

// --------- ANIMATIONS ------------

  //----- CHART -----------
#jumbotron__text:hover #rect-yellow
 {
    animation: moveUpDown1 1000ms forwards ease-out;
    animation-iteration-count: infinite;
  }
#jumbotron__text:hover #rect-pink
 {
    animation: moveUpDown2 1000ms 150ms forwards ease-out;
    animation-iteration-count: infinite;
  }
#jumbotron__text:hover #rect-purple
 {
    animation: moveUpDown3 1000ms 300ms forwards ease-out;
    animation-iteration-count: infinite;
  }
#jumbotron__text:hover #rect-blue
 {
    animation: moveUpDown4 1000ms 500ms forwards ease-out;
    animation-iteration-count: infinite;
  }

@keyframes moveUpDown1 {
    0% {
        height: 110px;
    }
    33% {
        height: 200px;
    }
    0% {
        height: 75px;
    }
     100% {
      height: 110px;
     }
}

@keyframes moveUpDown2 {
    0% {
        height: 139px;
    }
    33% {
        height: 50px;
    }
    0% {
        height: 90px;
    }
     100% {
      height: 139px;
     }
}

@keyframes moveUpDown3 {
    0% {
        height: 179px;
    }
    33% {
        height: 90px;
    }
    0% {
        height: 130px;
    }
     100% {
      height: 179px;
     }
}

@keyframes moveUpDown4 {
    0% {
        height: 152px;
    }
    33% {
        height: 30px;
    }
    0% {
        height: 110px;
    }
     100% {
      height: 152px;
     }
}

  // ------ CIRCLES --------

  .circle {

&-light {
    fill: $secondary-color;
    fill-opacity: 0.54;
    transition: all 0.5s ease;
}
&-1 {
    fill: $pink-color;
    transform: translateX(-100%);
}
&-3 {
    fill: $pink-color;
    transition: all 0.5s ease;
}
}

// --- MEDIA QUERIES ----
    // ----- 700px ------
@media(min-width: 700px) {
  .jumbotron {
    &__cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .jumbo-container {
    display: flex;
  }

.values {
    &__img {
        height: auto;
    }
    &__list {
        &__features {
            grid-template-columns: 1fr 1fr;
            row-gap: 20px;
        }
    }
  }
}

// --- MEDIA QUERIES ----
    // ----- 900px ------
@media(min-width: 900px) {
  .header{
  background: url('../assets/images/header-svg.png');
  background-size: cover;
  }
}
   

  // ----- 1400px ------
@media(min-width: 1400px) {
.header {
  height: 100vh;
}
.navbar{
  height: 10vh;
}

.jumbotron {
  height: 90vh;
  &__text {
    height: 28vh;
  }
  &__technologies {
    height: 10vh;
  }
  &__cards {
    height: 48vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

</style>