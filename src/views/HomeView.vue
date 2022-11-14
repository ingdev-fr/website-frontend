<template>
  <main class="mainSection">
    <HeaderSection/>
    <ProcessDetails/>
    <AddedValues/>
  </main>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/homepage/HeaderSection.vue'
import ProcessDetails from '@/components/homepage/ProcessDetails.vue'
import AddedValues from '@/components/homepage/AddedValues.vue'

export default {
  name: 'HomeView',

  data() {
    return {

    }
  },

  components: {
    HeaderSection,
    ProcessDetails,
    AddedValues,
  },

  methods : {
    // Je créé la méthode qui permet de réécrire la valeur de la donnée "activeClass" du store pour afficher dynamiquement la classe "active" dans la navigation de cette page. 
    changeActiveClass : function () {
      this.$store.commit('CHANGE_ACTIVECLASS');
      this.$store.state.activeClass = "accueil";
      console.log(this.$store.state.activeClass);
    }

  },

  created: function() {
    this.$store.dispatch('getHeader');
    this.$store.dispatch('getHomepageHero');
    this.$store.dispatch('getHomepageAbout');
    }, // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 

  mounted: function () {
    this.changeActiveClass(); //j'appelle la méthode qui me permet d'attribuer la classe "active" à la page
  }
}
</script>

<style lang="scss" scoped>
.mainSection {
  background: $secondary-color;
}

</style>