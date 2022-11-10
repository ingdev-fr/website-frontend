<template>
    <nav class="navbar navbar-expand-lg">
            <div class="container-fluid p-0 ">
              <!-- Logo -->
              <a class="navbar-brand d-flex align-items-center" href="#"><img class="logo-img" src='../assets/images/logo.svg' alt="ingdev logo"/></a>
              <!-- Toggle button -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- Menu de navigation -->
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <!-- ACCUEIL -->
                  <li class="nav-item mx-2">
                    <router-link class="nav-link" to="/"><font-awesome-icon icon="fa-solid fa-house-user" class="nav-link__icon d-block mx-auto mb-1"/>Accueil</router-link>
                  </li>
                  <!-- SHOWROOM -->
                  <li class="nav-item dropdown mx-2">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><font-awesome-icon icon="fa-solid fa-store" class="nav-link__icon d-block mx-auto mb-1"/>Showroom</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <router-link class="dropdown-item" to="/catalogue">Catalogue formations</router-link>
                      <li><a class="dropdown-item" href="#">Tableau de bord</a></li>
                      <li><a class="dropdown-item" href="https://www.moodle4.ingdev.fr/" target="_blank">LMS Moodle</a></li>
                    </ul>
                  </li>
                  <!-- CONNEXION -->
                  <li class="nav-item mx-5">
                    <router-link class="nav-link connexion-link" to="/login"><font-awesome-icon icon="fa-solid fa-right-to-bracket" class="nav-link__icon d-block mx-auto mb-1"/>Connexion</router-link>
                  </li>
                  <!-- CONTACT -->
                  <li class="nav-item ms-5 d-flex align-items-center justify-content-center">
                      <!-- BUTTON -->
                    <button class="nav-link btn nav-link__contactButton px-2" data-bs-toggle="modal" data-bs-target="#contactModal" data-bs-whatever="@mdo">Contactez-nous</button>
                      <!-- MODAL -->
                    <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true" data-bs-backdrop="static" >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <!-- MODAL HEADER -->
                          <div class="modal-header" id="modal-header">
                            <img class="contact-icon me-2" src="../assets/images/icons8-contact.svg" alt="contact icone">
                            <h5 class="modal-title text-light" id="contactModalLabel">Contactez-nous</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetForm()"></button>
                          </div>
                          <!-- MODAL BODY -->
                          <div class="modal-body">
                            <p>Par téléphone : +33 (0)6-17-25-51-70</p>
                            <p>Par formulaire :</p>
                            <!-- xxxxxx   FORMULAIRE xxxxxxxx  -->
                            <form id="contactForm" @submit.prevent="sendEmail()">
                              <!-- NOM + PRENOM-->
                              <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Prénom" aria-label="prénom" required maxlength="40" name="surname" v-model="surname">
                                  <input type="text" class="form-control" placeholder="Nom" aria-label="nom" required maxlength="40" name="name" v-model="name">
                              </div>
                              <!-- MAIL + TEL -->
                              <div class="mb-3">
                                  <input type="email" class="form-control" placeholder="Votre mail" aria-label="Votre mail" required maxlength="50" name="email" v-model="email">
                              </div>
                              <div class="mb-3">
                                  <input type="tel" class="form-control"  placeholder="Tel pour vous rappeler" aria-label="téléphone" maxlength="20" name="tel" v-model="tel">
                              </div>
                              <!-- MESSAGE -->
                              <div class="mb-3">
                                  <label for="message-text" class="col-form-label">Message:</label>
                                  <textarea class="form-control" id="message" required maxlength="4000" placeholder="Votre message" name="message" v-model="message"></textarea>
                              </div>
                              <button type="submit" class="btn btn-primary" >Envoyer</button>
                          </form>
                          </div>
                          <!-- MODAL FOOTER BUTTONS-->
                          <div class="modal-footer">
                            <div class="spinner-border text-primary" role="status" v-if="spinnerMode == 'on'">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                            <p class="okConfirm">{{okConfirm}}</p>
                            <p class="notConfirm">{{notConfirm}}</p>
                            <button type="button" class="btn btn-secondary" id="send-button" data-bs-dismiss="modal" @click="resetForm()">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      </nav>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'BarNav',

  components: {

  },

  data() {
    return {
      name: '',
      surname: '',
      email: '',
      tel: '',
      message: '',
      okConfirm: '',
      notConfirm: '',
      spinnerMode: 'off',
    }
  },

  methods: {
    resetForm: function() {
    // Reset form field
    this.name = '';
    this.surname = '';
    this.email = '';
    this.tel= '';
    this.message = '';
    this.okConfirm = '';
    this.notConfirm = '';
  },
    sendEmail: function() {
      this.spinnerMode = 'on';
      this.okConfirm = '';
      this.notConfirm = '';
      // emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID','élément HTML','YOUR_PUBLIC_KEY')
      emailjs.sendForm('service_otbd5ld', 'template_kveigk3', document.getElementById('contactForm'),
      'LErD-dEpKHaBcYZ0F')
      .then(
        (result => {
          console.log('SUCCESS!', result.text);
          this.spinnerMode = 'off';
            this.okConfirm = "Message envoyé !";
            
        })
      ).catch(
        (error => {
          console.log('FAILED...', error.text);
          this.notConfirm = "Message non envoyé !";
        })
      )
    }
  }



}
</script>

<style lang="scss" scoped>
.navbar {
  height: 10vh;
  &-toggler {
    background-color: $secondary-color;
  }
  & .nav-item {
    display: block;
  }
  & .nav-link {
    color: $primary-color;
    &:hover {
      transform: scale(1.05);
    }
    &__icon {
      width: 18px;
      height: 18px;
    }
    &__contactButton{
      color: $clear-color;
      background-color: $secondary-color;
      box-shadow: 5px 4px 3px rgba($primary-color, 0.25);
      &:hover {
      background-color:$fourth-color;
      }
    }
  }
}
.logo-img {
  height: 50px;
}

.active {
  color: $secondary-color !important;
}

#modal-header {
  background: $third-color;
}

.contact-icon {
  height: 3rem;
}

.okConfirm {
  color: green;
}

.notConfirm {
  color: red;
}

</style>