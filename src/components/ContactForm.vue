<template>
    <form id="contactForm" @submit.prevent="sendEmail">
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
            <input type="tel" class="form-control" placeholder="Tel pour vous rappeler" aria-label="téléphone" maxlength="15" name="tel" v-model="tel">
        </div>
        <!-- MESSAGE -->
        <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message" required maxlength="400" placeholder="Votre message" name="message" v-model="message"></textarea>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ContactForm',

}
</script>

<style lang="scss" scoped>



</style>