<template>
  <section class="catalog__header">
    <!---------- PRESENTATIONS  -->
    <div class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-md-10 mx-auto">
                <h1 class="fw-light">Nos formations</h1>
                <p class="lead text-muted">Retrouvez dans notre exemple de catalogue les informations essentielles permettant à vos clients de sélectionner la formation adaptée à leurs besoins : Recherche par catégorie ou par contenu, modalités de formation, programme de formation avec possibilité de téléchargement, tarifs et disponibilités des places.
                </p>
            </div>
        </div>
    </div>
    <!----------- INFORMATIONS-->
            <!-- CONTENT -->
    <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                    <p class="text-white fs-4">Conditions</p>
                    <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                    <h4 class="text-white">Nos cours en ligne</h4>
                    <a href="#" class="text-white">Ingdev LMS</a>
                </div>
            </div>
        </div>
    </div>
            <!-- TOGGLE BAR-->
    <div class="navbar navbar-dark bg-dark shadow-sm">
         <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <strong>Informations</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>      
  </section>
</template>

<script>
export default {
    name: 'HeaderCatalog', 

}
</script>

<style lang="scss scoped">



</style>