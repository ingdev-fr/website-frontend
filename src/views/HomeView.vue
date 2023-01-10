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
    }

  },

  created: function() {
    this.$store.dispatch('getHeader');
    this.$store.dispatch('getHomepageHero');
    this.$store.dispatch('getHomepageAbout');
    // SEO 
    document.title = "Accueil du site web Ingdev";
    document.querySelector('meta[name="description"]').setAttribute('content', "Le site web de la société Ingdev, spécialiste du développment web, de l'ingénierie de formation et du e-learning. Nous accompagnons les organismes de formation dans la mise en place de leur processus de gestion des formations.");
    document.querySelector('meta[name="robots"]').setAttribute('content', 'index');
    }, 

  mounted: function () {
    this.changeActiveClass(); //j'appelle la méthode qui me permet d'attribuer la classe "active" à la page
    localStorage.removeItem('Recherche'); //Je supprime les résultats de la recherche du catalogue car le user a quitté la recherche.
  }
}
</script>

<style lang="scss" scoped>
.mainSection {
  background: $secondary-color;
}

</style>