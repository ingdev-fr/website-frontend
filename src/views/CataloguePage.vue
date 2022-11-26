<template>
    <section class="catalog">
        <NavBar/>
        <div class="template">
            <!-- SECTION HEADER -->
            <PresentationCatalog/>
            <div class="onglets" v-if="this.modeButton == 'true'">
              <button class="ongletPromotion buttonRecherche btn text-light" type="button" @click="modeVisibleRecherche()"><div class="exclu my-2 fs-5">Recherche</div></button>
              <button class="ongletPromotion buttonPromotion btn text-light" type="button" @click="modeVisiblePromotion()"><div class="exclu my-2 fs-5">Top formations</div></button>
            </div>
            <div class="showCatalog d-lg-flex pb-4" id="showCatalog">
              <TrainingsPromotion class="promotion me-2" id="promotion" v-if="modeVisible == 'promotion' || visible == 'on'"/>
              <FindCatalog class="find" v-if="modeVisible == 'recherche' || visible == 'on'"/>
            </div>
        </div>
        
      </section>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import PresentationCatalog from '@/components/catalog/PresentationCatalog.vue'
import TrainingsPromotion from '@/components/catalog/TrainingsPromotion.vue'
import FindCatalog from '@/components/catalog/FindCatalog.vue'

export default {
    name: 'CataloguePage',

    data () {
      return {
        visible: '',
        modeVisible: 'recherche',
        largeur: '',
        modeButton: '',
      }
    },

    components: {
        NavBar,
        PresentationCatalog,
        TrainingsPromotion,
        FindCatalog,
  },

  methods : {
    // Je créé la méthode qui permet de réécrire la valeur de la donnée "activeClass" du store pour afficher dynamiquement la classe "active" dans la navigation de cette page. 
    changeActiveClass : function () {
      this.$store.commit('CHANGE_ACTIVECLASS');
      this.$store.state.activeClass = "showroom";
      console.log(this.$store.state.activeClass);
    },
    modeVisibleRecherche: function() {
      this.modeVisible = 'recherche';
    },
    modeVisiblePromotion: function() {
      this.modeVisible = 'promotion';
    },
    resizeWindow: function () {
      this.largeur = window.innerWidth;
      console.log(this.largeur);
      if(this.largeur < 992) {
        this.modeButton = 'true';
        this.visible = 'off'
      }
      else {
        this.modeButton= 'false';
        this.visible = 'on';
      }
    }

  },

  mounted: function () {
    this.changeActiveClass(); //j'appelle la méthode qui me permet d'attribuer la classe "active" à la page
    window.addEventListener("resize", this.resizeWindow); //jécoute si il y a une resize du window
    this.resizeWindow(); // je charge au démarrage la fonction pour évaluer la largeur de départ de la fenêtre
  },

  unmounted() {
  window.removeEventListener("resize", this.resizeWindow); // je supprime l'écoute de la resize au démontage du composant.
},
  
}
</script>

<style scoped lang="scss">

.catalog {
  background: radial-gradient(circle at top left, $third-color-clear 30%, $third-color);
}

.ongletPromotion {
  border-radius: 10px 10px 0 0;
}

.buttonRecherche {
  background: $secondary-color;
  &:hover {
    background: $fifth-color;
  }
}

.buttonPromotion {
  background: $third-color;
  &:hover {
    background: $fifth-color;
  }
}

@media(min-width: 992px) {
  .promotion {
    width: 30%;
  }

  .find {
    width: 70%;
  }
}



</style>