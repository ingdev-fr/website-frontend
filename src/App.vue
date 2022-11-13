<template>
    <router-view/>
    <FooterSection/>

</template>

<script>
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'App',

  components: {
    FooterSection, 

  }
}

</script>

<style lang="scss">

// -------- DECLARATION DES FONTS 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'); // Via hébergement Google
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600;700;900&display=swap');

#app {
  // -----------  POUR TOUS LES COMPOSANTS
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; // permet de spécifier l'algorithme anti-crénelage (anti-aliasing) du rendu des fonts
  -moz-osx-font-smoothing: grayscale; // permet de spécifier l'algorithme anti-crénelage (anti-aliasing) du rendu des fonts pour OSx
  color: $text-color;

      // Largeur de la page 
      .template {
      max-width: 1400px;
      margin: auto;
      padding: 0 2rem;
    }

      // Taille des polices
      h1 {
        font-size: 3.7rem;
        font-weight: bold;
      }

      h2 {
          font-size: 2.5rem;
          font-weight: bold;
        }
      
      p {
        font-size: 1rem;
      }

}

// ------------  MEDIA QUERIES -----------

    // ----  0 => 992px = Tablettes larges
@media(max-width: 991px) {

  // FONT-SIZE REM 
  :root {
    font-size: 14px;
  }

  .template{
    padding: 1rem 2rem;
  }
} 

</style>


