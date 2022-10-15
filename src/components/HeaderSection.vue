<template>
  <header class="header">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg my-0 py-0">
          <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="#"><img class="logo-img" src="../assets/Ingdev-logo-final.png"/></a>
            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Menu de navigation -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item mx-2">
                  <a class="nav-link active" href="#"><font-awesome-icon icon="fa-solid fa-house-user" class="nav-link__icon d-block mx-auto mb-1"/>Accueil</a> 
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-store" class="nav-link__icon d-block mx-auto mb-1"/>Produits</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-lightbulb" class="nav-link__icon d-block mx-auto mb-1"/>Avantages</a>
                </li>
                <li class="nav-item mx-5">
                  <a class="nav-link connexion-link" href="#"><font-awesome-icon icon="fa-solid fa-right-to-bracket" class="nav-link__icon d-block mx-auto mb-1"/>Connexion</a>
                </li>
                <li class="nav-item mx-5 d-flex align-items-center justify-content-center">
                  <button class="nav-link btn nav-link__contactButton px-2" href="#">Contactez-nous</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  </header>
</template>

<script>

export default {
    name: 'HeaderSection',
}
</script>

<style scoped lang="scss">
// Variables
@import "../scss/utils/variables";

.header{
  background-color: $primary-color;
}

.logo-img {
  height: 8vh;
  &:hover {
    transform: scale(1.3);
  }
}

.navbar {
  &-toggler {
    background-color: $yellow-color;
  }
  & .nav-item {
    display: block;
  }
  & .nav-link {
    color: $yellow-color;

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

.active {
  color: $pink-color;
}

// MEDIA QUERIES
    // ----- 769px ------
@media(min-width: 769px) {
  .navbar {
  }
  .logo-img {
  }
}
    // ----- 1200px ------
@media(min-width: 1200px) {
  .header {
    height: 10vh;
  }
}
</style>