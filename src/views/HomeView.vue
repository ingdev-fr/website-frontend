<template>
  <main>
    <HeroSection/>
    <AddedValues/>
  </main>
</template>

<script>
// @ is an alias to /src
import HeroSection from '@/components/HeroSection.vue'
import AddedValues from '@/components/AddedValues.vue'

export default {
  name: 'HomeView',

  components: {
    HeroSection,
    AddedValues,
  },

  created: function() {
    this.$store.dispatch('getHomepageHero');
    }, // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 

}
</script>

<style lang="scss" scoped>
.separator {
  height: 10px;

}


</style>