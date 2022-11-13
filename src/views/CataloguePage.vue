<template>
    <main class="catalog">
        <div class="template">
            <!-- SECTION HEADER -->
            <NavBar/>
            <HeaderCatalog/>
            <ContentCatalog/>
            <!-- CATALOGUE -->
            <section class="catalog_stuff">


            </section>
        </div>
        
    </main>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HeaderCatalog from '@/components/catalog/HeaderCatalog.vue'
import ContentCatalog from '@/components/catalog/ContentCatalog.vue'

export default {
    name: 'CataloguePage',

    components: {
        NavBar,
        HeaderCatalog,
        ContentCatalog
  },

  methods : {
    // Je créé la méthode qui permet de réécrire la valeur de la donnée "activeClass" du store pour afficher dynamiquement la classe "active" dans la navigation de cette page. 
    changeActiveClass : function () {
      this.$store.commit('CHANGE_ACTIVECLASS');
      this.$store.state.activeClass = "showroom";
      console.log(this.$store.state.activeClass);
    }
  },

  mounted: function () {
    this.changeActiveClass(); //j'appelle la méthode qui me permet d'attribuer la classe "active" à la page
  }
    

}
</script>

<style scoped lang="scss">

.catalog {

}


</style>