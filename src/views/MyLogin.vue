<template>
    <div class="background">
        <div class="template text-center">
        <NavBar/>
        <div class="loginBox d-flex align-items-center justify-content-center">
            <img class="login__picture col-md-10" src="../assets/images/logo-v-noblack.svg" alt="logo Ingdev">
            <div class="loginBack row justify-content-center align-items-center col-md-7 mx-auto">
                <h1 class= "login_title text-center fs-2" v-if="mode == 'login'">Se connecter</h1>
                <h1 class= "login_title" v-else>Créer son compte</h1>
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
                        <p class="loginError text-danger popover text-center mx-auto" v-if="loginError == true" >{{ this.loginErrorMessage }} </p>
                        <p class="text-success" v-if="mode == 'create'">Le mot de passe doit comprendre au minimum 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial</p>
                        <!----------- INPUTS CREATE -------------->
                        <div class="form-group" v-if="mode == 'create'" >
                            <div class="d-flex justify-content-between" >
                                <!-- SURNAME -->
                                <div class="d-flex required">
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    id="surname"
                                    name="surname" 
                                    aria-label="surname"
                                    aria-describedby="Surname" 
                                    placeholder="Prénom"
                                    v-model="surname" 
                                    required>
                                </div>
                                <!-- NAME -->
                                <div class="d-flex required">
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    id="name" 
                                    aria-label="name"
                                    aria-describedby="Name" 
                                    placeholder="Nom"
                                    v-model="name" 
                                    required>
                                </div>
                            </div>
                            <!-- DEPARTMENT -->
                            <input 
                            type="text" 
                            class="form-control" 
                            id="department" 
                            aria-label="department"
                            aria-describedby="Department" 
                            placeholder="Service"
                            v-model="department">
                            <!-- TEL -->
                            <input 
                            type="tel" 
                            class="form-control" 
                            id="tel"
                            name="tel"
                            aria-label="tel" 
                            aria-describedby="Telephone" 
                            placeholder="Tel du poste"
                            v-model="tel">
                        </div>
                        <!------------ INPUT CHECKBOX ------------>
                        <div class="d-flex required" v-if="mode == 'create'">
                            <!-- Ici on va créer un input checkbox qui devra être coché pour valider le formulaire. On va devoir envoyer la valeur de l'input une fois validé (value="ok") à l'API (propriété "checkConditions" du modèle User)pour que le formulaire ne soit pas envoyé sans que la box soit checkée. -->
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="agrementCheck"
                                    aria-label="agrementCheck"
                                    v-model="checkConditions"
                                    @click="validateConditions()" 
                                    required>
                                    <p class="ps-1">Je suis d'accord avec les <a href="">termes et conditions</a> du réseau social</p>
                        </div>
                        <!-- BUTTON LOGIN -->
                        <button 
                            type="button" 
                            class="btn login__button"
                            :class="{'disabled' : !validatedFields}"
                            v-if="mode == 'login'"
                            @click="loginUser()">
                            Connexion</button>
                        <!-- BUTTON CREATE ACCOUNT-->
                        <button 
                            type="button" 
                            class="btn btn-primary createAccount_button"
                            :class="{'disabled' : !validatedFields}"
                            v-else 
                            @click="createAccount()"
                            >Créer son compte</button>
                </form>
            </div>
        </div>
          <!-- 
          <div class="row creationCompte justify-content-center" >
              <p>Vous n'avez pas encore de compte : <span @click="switchToCreateAccount()">Créez un compte</span></p>
          </div>
          -->
        </div>
    </div>
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
          isLogged: false,
          mode: 'login', 
          password: "",
          surname: "",
          name:"",
          email: "",
          department: "",
          tel: "",
          userPicture: '',
          checkConditions: false,
          loginError: false,
          loginErrorMessage: "L'identifiant n'est pas valide",
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
  
      /*mounted: function() {
          this.redirectionIfIsLogged();
      },*/
  
    methods: {
      /*Vérification de validation des conditions
      validateConditions : function () {
          this.checkConditions = true; 
      },*/
  
      /*Affichage conditionnel des champs du formulaire login/création de compte
      switchToCreateAccount : function () {
          this.mode = 'create'; 
          this.loginError = false; 
      },*/
  
      /* fonction pour renvoyer le user vers la page d'accueil s'il est déjà loggé
      redirectionIfIsLogged : function () {
          let isLogged = JSON.parse(localStorage.getItem("login"));
          if(isLogged == true) {
              this.$router.push('/'); 
          }
          else {
              console.log("l'accès à la page d'accueil n'est pas autorisé, vous devez vous logger !")
          }
      }, */
  
      // fonction pour se logger
      loginUser: function () {
        this.loginError = true;
        /* this.axios
          .post(`${this.store.state.url}/auth/local/`, 
              {
              identifier: this.email,
              password: this.password
              },
              {headers: 
                  { "Content-Type": "application/json"}
              }
          )
          .then(response => {
                console.log(response.data)
                /* 
                this.isLogged = true;
                localStorage.setItem("login", JSON.stringify(this.isLogged));
                console.log(`L'utilisateur ${this.email} s'est bien connecté !`);
                localStorage.setItem("token", JSON.stringify(response.data.token));
                localStorage.setItem("userId", JSON.stringify(response.data.data.id));
                localStorage.setItem("userSurname", JSON.stringify(response.data.data.surname));
                localStorage.setItem("userName", JSON.stringify(response.data.data.name));
                
                this.$router.push('/login');  
              }      
          )
          .catch((error) =>{
            console.log(error);
              this.loginErrorMessage = "Identifiant ou mot de passe invalide";
              this.loginError = true;
          })*/
  
      }
      /*fonction pour créer un compte
      createAccount: function () {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/;
          if(regex.test(this.password)) {
              let formData = new FormData() 
                  formData.append('email', this.email) 
                  formData.append('password', this.password)
                  formData.append('surname', this.surname)
                  formData.append('name', this.name)
                  formData.append('department', this.department)
                  formData.append('tel', this.tel)
              this.axios
                  .post('http://localhost:3000/api/users', formData,
                      {headers: 
                          { 'Content-Type': 'application/json'}
                      }
                  )
                  .then( () => {
                          console.log(`L'utilisateur ${this.email} a bien été créé !`)
                          this.mode = 'login';
                          this.loginError = false;
                          this.$router.push('/login'); 
                      }      
                  )
                  .catch((error) =>{
                      this.loginErrorMessage = error.response.data.message.split(":")[1];
                      this.loginError = true;
                  })
          }
          else {
              this.loginError = true;
              this.loginErrorMessage = "Le mot de passe n'est pas conforme aux exigences !"
          }
          
      }*/
  
    }
  }
  
  </script>
  
  <style scoped lang="scss">

.background {
    height: 100vh;
    background-image: radial-gradient( at center center, $clear-color 10%, $third-color-clear 60%, $third-color);
}

.navbar {
    height: 10vh;
}

.loginBack{
    position: absolute;
    margin-top: -150px;
}

.login__picture {
    height: 60vh;
    position: absolute; 
}

.login__button {
    background: $secondary-color;
    color: $clear-color;
    &:hover {
        background: $third-color;
    }
}
.loginBox {
    position: relative;
    height: 70vh;
      & input {
          margin-bottom: 30px;
          
      }
      & #logoAccueil {
      margin-bottom: 40px;
      max-width: 25%;
      }
      & .login_title{
        font-size: 38px;
        margin-bottom: 30px;
        }
      & span {
          color: #0a58ca;
          cursor: pointer;
      }

      & .disabled{
          background-color: rgb(170, 170, 170);
      }
}
  .creationCompte {
      margin-top: 40px;
  }
  
  .required::after {
      content: "*";
      color: red;
      margin-left: 2px;
      margin-right: 2px;
  }
  
  </style>
  