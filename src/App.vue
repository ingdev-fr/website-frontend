<template>
  <HeaderSection/>
  <router-view/>
  <FooterSection/>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'App',

  components: {
    HeaderSection,
    FooterSection
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

#app {
  // Pour tous les composants
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; // permet de spécifier l'algorithme anti-crénelage (anti-aliasing) du rendu des fonts
  -moz-osx-font-smoothing: grayscale; // permet de spécifier l'algorithme anti-crénelage (anti-aliasing) du rendu des fonts pour OSx
  color: $primary-color;
  h2 {
    font-weight: 500;
    font-size: 2rem;
  }

  // Variables Bootstrap
  .btn-success {
    background-color: purple;
}
}

</style>


