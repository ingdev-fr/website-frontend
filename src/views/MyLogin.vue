<template>
    <section class="background">
        <NavBar/>
        <div class="template text-center">
            <div class="login__box d-flex align-items-center justify-content-center">
                <div class="login__back row justify-content-center align-items-center col-md-7 mx-auto">
                    <h1 class= "login__title text-center fs-2">Se connecter</h1>
                    <form class="form col-10 col-md-8 col-lg-6 text-center" id="form" action="">
                            <!-------- INPUTS LOGIN ----------->
                            <div class="form-group">
                                <!-- EMAIL -->
                                <div class="col required d-flex">
                                    <input 
                                    type="email" 
                                    class="form-control" 
                                    id="email" 
                                    name="email"
                                    aria-label="email"
                                    aria-describedby="helpEmail" 
                                    placeholder="Email"
                                    v-model="email"
                                    required>
                                </div>
                                <!-- PASSWORD -->
                                <div class="col required d-flex">
                                    <input 
                                    type="password" 
                                    class="form-control" 
                                    id="password"
                                    name="password" 
                                    aria-label="password"
                                    placeholder="Mot de passe" 
                                    v-model="password" 
                                    required  
                                    />
                                </div>
                            </div>
                            <p class="login__error text-danger popover text-center mx-auto" v-if="loginError == true" >{{ this.loginErrorMessage }} </p>

                            <!----------- INPUTS CREATE -------------->

                            <!------------ INPUT CHECKBOX ------------>

                            <!-- BUTTON LOGIN -->
                            <button 
                                type="button" 
                                class="btn login__button"
                                :class="{'disabled' : !validatedFields}"
                                @click="loginUser()">
                                Connexion</button>
                            <!-- BUTTON CREATE ACCOUNT-->

                    </form>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  
  <script>
  import NavBar from '../components/NavBar.vue'
  
  export default {
    name: 'MyLogin',

    components: {
        NavBar,
    },
  
    data() {
      return {
          password: "",
          email: "",
          loginError: false,
          loginErrorMessage: "L'identifiant n'est pas valide",
      }
    },

    methods : {
    // Je cr???? la m??thode qui permet de r????crire la valeur de la donn??e "activeClass" du store pour afficher dynamiquement la classe "active" dans la navigation de cette page. 
    changeActiveClass : function () {
      this.$store.commit('CHANGE_ACTIVECLASS');
      this.$store.state.activeClass = "connexion";
    },
    // fonction pour se logger
    loginUser: function () {
        this.loginError = true;
      }
  },
  
    computed: {
      // Validation des champs du formulaire
      validatedFields: function () {
          if(this.mode == 'create') {
              if(this.password != "" && this.surname != "" && this.name != "" && this.email != "" && this.checkConditions != false) {
                  return true;
              }
              else {
                  return false;
              }
          }
          else {
              if(this.email != "" && this.password != "")
                  return true;
              else{
                  return false;
              }
          }
      }
    },

    created: function() {
    // SEO
    document.title = "La page de login site web Ingdev";
    document.querySelector('meta[name="description"]').setAttribute('content', '');
    document.querySelector('meta[name="robots"]').setAttribute('content', 'noindex');
    },

    mounted: function () {
    this.changeActiveClass(); //j'appelle la m??thode qui me permet d'attribuer la classe "active" ?? la page
  }

  }
  
  </script>
  
  <style scoped lang="scss">

.background {
    height: 100vh;
    background-image: linear-gradient( $third-color-clear, $third-color);
}

.navbar {
    height: 10vh;
}

.login{
    &__box {
    position: relative;
    height: 90vh;
      & input {
          margin-bottom: 30px; 
      }
      & #logoAccueil {
      margin-bottom: 40px;
      max-width: 25%;
      }
      & span {
          color: $text-color;
          cursor: pointer;
      }
      & .disabled{
          background-color: rgb(170, 170, 170);
      }
    }
    &__back{
    position: absolute;
    margin-top: -150px;
    }
    &__title{
        font-size: 38px;
        margin-bottom: 30px;
        color: $text-color;
        }
    &__button {
    background: $secondary-color;
    color: $clear-color;
        &:hover {
            background: $third-color;
        }
    }
}
  
  .required::after {
      content: "*";
      color: red;
      margin-left: 2px;
      margin-right: 2px;
  }

// ------------  MEDIA QUERIES -----------

      // ----  0 => 992px = Tablettes larges
@media(max-width: 991px) {
  .navbar {
    height: initial;
  }
}
  </style>
  