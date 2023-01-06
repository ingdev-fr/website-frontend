<template>
    <!-- xxxxxx   FORMULAIRE xxxxxxxx  -->
    <form id="contactForm" @submit.prevent="sendEmail()">
        <!-- NOM + PRENOM-->
        <div class="row mb-3">
            <div class="input-required col-md-6 mb-3 mb-md-0">
                <input type="text" class="form-control" placeholder="Prénom" aria-label="prénom" required maxlength="40" name="surname" v-model="surname">
                <span class="text-danger asterix">*</span>
            </div>
            <div class="input-required col-md-6">
                <input type="text" class="form-control" placeholder="Nom" aria-label="nom" required maxlength="40" name="name" v-model="name">
                <span class="text-danger asterix">*</span>
            </div>
        </div>
        <!-- MAIL -->
        <div class="mb-3 input-required">
            <input type="email" class="form-control" placeholder="Votre mail" aria-label="Votre mail" required maxlength="50" name="email" v-model="email">
            <span class="text-danger asterix">*</span>
        </div>
        <!-- MAIL + ENTREPRISE-->
        <div class="row mb-3">
            <div class="col-md-6 mb-3 mb-md-0">
                <input type="tel" class="form-control"  placeholder="Tel pour vous rappeler" aria-label="téléphone" maxlength="20" name="tel" v-model="tel">
            </div>
            <div class="mb-3 col-md-6">
                <input type="tel" class="form-control"  placeholder="Entreprise" aria-label="entreprise" maxlength="20" name="entreprise" v-model="entreprise">
            </div>
        </div>
        <!-- MESSAGE -->
        <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <div class="input-required">
                <textarea class="form-control" id="message" required maxlength="4000" placeholder="Votre message" name="message" v-model="message"></textarea>
                <span class="text-danger asterix">*</span>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" >Envoyer</button>
    </form>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name: 'ContactForm',

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
      'LErD-dEpKHaBcYZ0F') // Ici j'envoie les données des inputs du form comprenant un attribut "name" à emailJS. 
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

.input-required {
    position: relative;
}

.asterix {
    position: absolute;
    top: 5px;
    right: 20px;
    &-long {
        right: 10px;
    }
}

</style>