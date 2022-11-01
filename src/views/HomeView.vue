<template>
  <main class="mainSection">
    <HeaderSection/>
    <AddedValues/>
  </main>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'
import AddedValues from '@/components/AddedValues.vue'

export default {
  name: 'HomeView',

  components: {
    HeaderSection,
    AddedValues,
  },

  created: function() {
    this.$store.dispatch('getHeader');
    this.$store.dispatch('getHomepageHero');
    this.$store.dispatch('getHomepageAbout');
    }, // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 

}
</script>

<style lang="scss" scoped>


</style>