<template>
    <div id="homepage-carousel" class="carousel slide" data-bs-ride="carousel">
        <!-- Les petits boutons blancs situés sous le carousel-->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#homepage-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#homepage-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#homepage-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <!-- Les 3 slides du carousel-->
         <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
                <img src="../assets/Home.png" class="d-block w-100" alt="...">
                <!-- Texte de l'item -->
                <div class="carousel-caption d-none d-md-block text-start">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                    <button class="btn btn-primary">En savoir +</button>
                </div>
            </div>
            <!-- Slide 2 -->
            <div class="carousel-item">
                <img src="../assets/fond-brunfonce-tel.png" class="d-block w-100" alt="...">
                <!-- Texte de l'item -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                    <button class="btn btn-primary">En savoir +</button>
                </div>
            </div>
            <!-- Slide 3 -->
            <div class="carousel-item">
                <img src="../assets/fond-brunfonce-tel.png" class="d-block w-100" alt="...">
                <!-- Texte de l'item -->
                <div class="carousel-caption d-none d-md-block text-end">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                    <button class="btn btn-primary">En savoir +</button>
                </div>
            </div>
        </div>
        <!-- Les flèches sur les côtés -->
        <button class="carousel-control-prev" type="button" data-bs-target="#homepage-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#homepage-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
</div>

  
</template>

<script>
export default {
    name: 'CarouselSection'

}
</script >

<style scoped lang="scss">


</style>