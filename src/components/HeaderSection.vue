<template>
  <header class="header pt-2 px-4 px-md-5">
    <div class="template ">
      <!-- NAVIGATION -->
      <nav class="navbar navbar-expand-lg">
            <div class="container-fluid p-0 ">
              <!-- Logo -->
              <a class="navbar-brand text-white d-flex align-items-center" href="#"><img class="logo-img" :src=$store.state.header.logo /><div class="logo-text">INGDEV</div></a>
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
      <section class="jumbotron mt-4">
            <!-- JUMBOTRON TEXT -->
            <div class="row jumbotron__text rounded-3 py-3 col-md-10 col-lg-8">
              <div class="pt-3 d-flex flex-column text-start justify-content-center">
                <h1 class="jumbotron__text--h1 fw-bold fs-1">{{ $store.state.homepage.hero.title }}</h1>
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
          <div class="row jumbotron__cards">
            <!-- CARD 1 -->
            <div v-for="(item, id) in $store.state.homepage.hero.cards"  v-bind:key="id"><!--Attention, l'élément que l'on choisit pour la boucle sera celui que l'on va dupliquer pour chaque item-->
              <div class="jumbo__card py-3 px-4 mb-3 text-white rounded-3 d-flex flex-column" :style="{'background-color': item.backgroundColor}">
                <h2>{{ item.title }}</h2>
                <p>{{ item.content }}</p>
                <button class="btn btn-warning jumbotron__button fw-bold mt-auto mx-auto" type="button">{{ item.button }}</button>
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
  background-size: cover;

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
  height: 100%;
}

.logo-text {
  font-size: 40px;
}

.active {
  color: $pink-color;
}

.technologies {
    &__img {
        height: 5vh;
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
  }
  &__text {
    color: $clear-color;
  }
}

.jumbo__card {
  opacity: 0.95;
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
    height: 12vh;
  }
  &__cards {
    height: 40vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    }
  }

.jumbo__card {
  height: 40vh;
  }
}

</style>