<template>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid p-0 ">
              <!-- Logo -->
              <a class="navbar-brand d-flex align-items-center" href="#"><img class="logo-img me-2" src='../assets/svg/logo.svg'/><div class="logo-text">INGDEV</div></a>
              <!-- Toggle button -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- Menu de navigation -->
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item mx-2">
                    <router-link class="nav-link" to="/"><font-awesome-icon icon="fa-solid fa-house-user" class="nav-link__icon d-block mx-auto mb-1"/>Accueil</router-link>
                  </li>
                  <li class="nav-item dropdown mx-2">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><font-awesome-icon icon="fa-solid fa-store" class="nav-link__icon d-block mx-auto mb-1"/>Showroom</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <router-link class="dropdown-item" to="/catalogue">Catalogue formations</router-link>
                      <li><a class="dropdown-item" href="#">Tableau de bord</a></li>
                      <li><a class="dropdown-item" href="https://www.moodle4.ingdev.fr/" target="_blank">LMS Moodle</a></li>
                    </ul>
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
</template>

<script>
export default {
    name: 'BarNav',

}
</script>

<style lang="scss" scoped>
.navbar {
  &-toggler {
    background-color: $secondary-color;
  }
  &-brand {
    height: 40px;
  }
  & .nav-item {
    display: block;
  }
  & .nav-link {
    color: $primary-color;
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
      background-color:$third-color;
      }
    }
  }
}

.logo-img {
  height: 40px;
}

.logo-text {
  font-size: 40px;
}

.active {
  color: $secondary-color !important;
}
</style>