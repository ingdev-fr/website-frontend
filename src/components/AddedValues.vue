<template>
    <section class="section-values p-4">
        <div class="container-grid values">
            <div class="values__img"></div>
            <div class="values__list p-4">
                <h2 class="values__list__title mb-3 border-bottom pink-color">Pour mieux nous connaitre</h2>
                <div class="values__list__features">
                            <!-- FEATURE 1-->
                            <div class="feature text-start pe-3">
                                <div class="feature-icon  feature-icon--1">
                                    <font-awesome-icon icon="fa-solid fa-computer" class="fa-solid"/>
                                </div>
                                <h2 class="fs-3 pt-2">Maitrise du développement web</h2>
                                <p class="pt-2">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            </div>
                            <!-- FEATURE 2-->
                            <div class="feature text-start pe-3">
                                <div class="feature-icon feature-icon--2">
                                    <font-awesome-icon icon="fa-solid fa-book-open" class="fa-solid"/>
                                </div>
                                <h2 class="fs-3 pt-2">Expertise en ingénierie de formation</h2>
                                <p class="pt-2">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            </div>
                            <!-- FEATURE 3-->
                            <div class="feature text-start pe-3">
                                <div class="feature-icon feature-icon--3">
                                    <font-awesome-icon icon="fa-solid fa-certificate" class="fa-solid"/>
                                </div>
                                <h2 class="fs-3 pt-2">Certifications plateforme LMS Moodle</h2>
                                <p class="pt-2">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            </div>
                            <!-- FEATURE 4-->
                            <div class="feature text-start pe-3">
                                <div class="feature-icon feature-icon--4">
                                    <font-awesome-icon icon="fa-solid fa-bars-progress" class="fa-solid"/>
                                </div>
                                <h2 class="fs-3 pt-2">Expérience en gestion de projet</h2>
                                <p class="pt-2">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            </div>
                </div>
                <!-- TECHNOLOGIES -->
                <div class="values__list__technologies">
                    <h2 class="pb-3">Les technologies maitrisées</h2>
                            <div class="technologies">
                                    <div class="me-2"><img src="../assets/logo-nodejs.jpeg" alt="logo nodejs" class="technologies__img rounded-1"></div>
                                    <div class="me-2"><img src="../assets/logo-MySQL.jpeg" alt="logo mysql" class="technologies__img rounded-1"></div>
                                    <div class="me-2"><img src="../assets/logo-express.png" alt="logo express" class="technologies__img rounded-1"></div>
                                    <div class="me-2"><img src="../assets/logo-sequelize.png" alt="logo sequelize" class="technologies__img rounded-1"></div>
                                    <div class="me-2"><img src="../assets/logo-vue3js.webp" alt="logo vue3js" class="technologies__img rounded-1"></div>
                                    <div class="me-2"><img src="../assets/logo-moodle.webp" alt="logo vue3js" class="technologies__img rounded-1"></div>
                                </div>
                </div>
            </div>
        </div>
    </section>



  
</template>

<script>
export default {
    name: 'AddedValues',
}
</script>

<style scoped lang="scss">
@import "../scss/utils/variables";
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

.section-values {
    background: $yellow-color;
}

.values {
    display: grid;
    grid-template: 1fr;
    &__img {
        height: 250px;
        background: url(../assets/computer-pink.png) no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 7px 0 0 7px;
    }
    &__list {
        background: $clear-color;
        border-radius: 0 7px 7px 0;
        &__features {
            display: grid;
            grid-template-columns: 1fr;
        }
        &__technologies{
            padding-top: 20px;
        }
    }

}

.technologies{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &__img {
        height: 55px;
        object-fit: cover;
        padding-bottom: 8px;
    }
}

.feature-icon {
    height: 48px;
    width: 48px;
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 7px;
    &--1 {
        background-color: $pink-color;
    }
    &--2 {
        background-color: $yellow-color;
    }
    &--3 {
        background-color: $secondary-color;
    }
    &--4 {
        background-color: $primary-color;
    }
}

.pink-color {
    color: $pink-color;
}

.fa-solid {
    width: 30px;
    height: 30px;
    color: $clear-color;
}

// --- MEDIA QUERIES ----
@media(max-width: 899px) {
    .values {
        grid-template-columns: 1fr;
    }
}

@media(min-width: 900px) {
    .values {
        margin-top: -10vh;
        grid-template-columns: 1fr 3fr;
        &__img {
            height: auto;
        }
        &__list {
            &__features {
                grid-template-columns: 1fr 1fr;
                row-gap: 20px;
            }
        }
    }
    .technologies {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
}
</style>



