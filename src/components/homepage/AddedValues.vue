<template>
    <section class="section-values pb-5 px-3 ">
        <div class="template d-lg-flex">
            <!-- IMAGE -->
            <div class="col-lg-4 d-flex d-flex-column d-flex-lg row align-items-center justify-content-center mb-5">
                <img class="values__img" src="../../assets/images/dazzle-line-startup-investment.svg" alt="">
            </div>
            <!-- BLOC DE COMPETENCES-->
            <div class="col-lg-8">
                <div class="ms-lg-5 text-center text-lg-start">
                    <!-- Titre et contenu-->
                    <h2 class="values__list__title mb-3 pb-3 fw-bold">{{ $store.state.homepage.about.title }}</h2>
                    <p class="values__list__content mb-5">{{ $store.state.homepage.about.content }}</p>
                    <!-- Liste des compétences-->
                    <div class="container-grid values d-flex flex-justify-center">
                        <div class="values__list px-2 px-lg-5 py-3">
                            <div class="values__list__features">
                                <!-- COMPETENCIES-->
                                    <!-- Competency-1 -->
                                <div class="feature d-flex flex-column align-items-center align-items-lg-start">
                                    <svg class="ms-5 ms-lg-0" width="140" height="72" viewBox="0 0 350 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="svgCirclesText">
                                            <g id="groupPink">
                                            <circle class="circle-3" cx="167" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/>
                                            <circle class="circle-1" cx="61" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/><text id="letterN" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="46.4473" y="101.091"> E</tspan></text>
                                            <text id="letterG" xml:space="preserve" style="white-space: pre"  font-size="36" letter-spacing="0em"><tspan x="153.623" y="102.091">B</tspan></text>
                                            </g>
                                            <g id="groupLight">
                                            <circle class="circle-light" cx="61" cy="89" r="40" fill="#009CFE" fill-opacity="0.63"/>
                                            <text id="letterI" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="54.2363" y="101.091">W</tspan></text>
                                            </g>
                                        </g>
                                    </svg>
                                    <h3 class="feature__title">{{ $store.state.homepage.about.competency1.title }}</h3>
                                    <p class="feature__content pt-2">{{ $store.state.homepage.about.competency1.content }}</p>
                                </div>
                                <!-- Competency-2 -->
                                <div class="feature text-lg-start">
                                    <svg class="ms-5 ms-lg-0" width="140" height="72" viewBox="0 0 350 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="svgCirclesText">
                                            <g id="groupPink">
                                            <circle class="circle-3" cx="167" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/>
                                            <circle class="circle-1" cx="61" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/><text id="letterN" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="46.4473" y="101.091">N</tspan></text>
                                            <text id="letterG" xml:space="preserve" style="white-space: pre"  font-size="36" letter-spacing="0em"><tspan x="153.623" y="102.091">G</tspan></text>
                                            </g>
                                            <g id="groupLight">
                                            <circle class="circle-light" cx="61" cy="89" r="40" fill="#009CFE" fill-opacity="0.63"/>
                                            <text id="letterI" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="55.2363" y="101.091">I</tspan></text>
                                            </g>
                                        </g>
                                    </svg>
                                    <h3 class="feature__title">{{ $store.state.homepage.about.competency2.title }}</h3>
                                    <p class="feature__content pt-2">{{ $store.state.homepage.about.competency2.content }}</p>
                                </div>
                                <!-- Competency-3 -->
                                <div class="feature text-lg-start">
                                    <svg class="ms-5 ms-lg-0" width="140" height="72" viewBox="0 0 350 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="svgCirclesText">
                                            <g id="groupPink">
                                            <circle class="circle-3" cx="167" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/>
                                            <circle class="circle-1" cx="61" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/><text id="letterN" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="46.4473" y="101.091">M</tspan></text>
                                            <text id="letterG" xml:space="preserve" style="white-space: pre"  font-size="36" letter-spacing="0em"><tspan x="153.623" y="102.091">S</tspan></text>
                                            </g>
                                            <g id="groupLight">
                                            <circle class="circle-light" cx="61" cy="89" r="40" fill="#009CFE" fill-opacity="0.63"/>
                                            <text id="letterI" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="55.2363" y="101.091">L</tspan></text>
                                            </g>
                                        </g>
                                    </svg>
                                    <h3 class="feature__title">{{ $store.state.homepage.about.competency3.title }}</h3>
                                    <p class="feature__content pt-2">{{ $store.state.homepage.about.competency3.content }}</p>
                                </div>
                                <!-- Competency-4 -->
                                <div class="feature text-lg-start">
                                    <svg class="ms-5 ms-lg-0" width="140" height="72" viewBox="0 0 350 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="svgCirclesText">
                                            <g id="groupPink">
                                            <circle class="circle-3" cx="167" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/>
                                            <circle class="circle-1" cx="61" cy="89" r="40" fill="#F62992" fill-opacity="0.74"/><text id="letterN" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="46.4473" y="101.091">R</tspan></text>
                                            <text id="letterG" xml:space="preserve" style="white-space: pre"  font-size="36" letter-spacing="0em"><tspan x="153.623" y="102.091">O</tspan></text>
                                            </g>
                                            <g id="groupLight">
                                            <circle class="circle-light" cx="61" cy="89" r="40" fill="#009CFE" fill-opacity="0.63"/>
                                            <text id="letterI" xml:space="preserve" style="white-space: pre" font-size="36" letter-spacing="0em"><tspan x="55.2363" y="101.091">P</tspan></text>
                                            </g>
                                        </g>
                                    </svg>
                                    <h3 class="feature__title">{{ $store.state.homepage.about.competency4.title }}</h3>
                                    <p class="feature__content pt-2">{{ $store.state.homepage.about.competency4.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AddedValues',

    data () {
        return {
            show: false,
            url: this.$store.state.urlUploads,
        }
    }

}
</script>

<style scoped lang="scss">

.section-values {
    background-image: radial-gradient(150rem 60rem at bottom right, $secondary-color-clear 10%, transparent 90%);
}
.values {
    &__list {
        background: #fff;
        box-shadow: 2px 2px 10px rgba($primary-color, 0.25);
        border-radius: 7px;
        &__features {
            display: grid;
            grid-template-columns: 1fr;
            column-gap: 30px;
        }
    }
    &__img {
            height: 27vh;
        }
}

.feature {
    &__title {
        color: $primary-color;
    }
    &__content {
        color: $primary-color;
    }
}

#letterI, #letterN, #letterG {
    opacity: 0;
    fill: $primary-color;
    font-family: inherit;
    font-weight: bold;
}
.pink-color {
    color: $pink-color;
}

// --- MEDIA QUERIES ----
@media(min-width: 768px) {
    .values {
        &__list {
            &__features {
                grid-template-columns: 1fr 1fr;
                row-gap: 20px;
            }
        }
    }

}

// --- MEDIA QUERIES ----

    // ----- min 992px ------
    @media(min-width: 992px) {
    .values__img {
        height: 45vh;
    }
}

    // ----- 1600px ------
 @media(min-width: 1600px) {
    .values {
        &__img {
            height: 40vh;
        }
    }
}

// ---------- ANIMATIONS --------------

.circle {

    &-light {
        fill: $secondary-color;
        fill-opacity: 0.54;
        transition: all 0.5s ease;
    }
    &-1 {
        fill: $third-color;
        transform: translateX(-100%);
    }
    &-3 {
        fill: $pink-color;
        transition: all 0.5s ease;
    }
}

.feature:hover .circle-light,
.feature:hover #letterN {
    transform: translateX(13%); //quand le svg sera hoover, le cercle bleu se déplacera vers la droite 
}

.feature:hover .circle-1, 
.feature:hover #letterI {
    transform: translateX(0%); //quand le svg sera hoover, le cercle rose 3 se déplacera vers la droite et son opacité passera à 0. 
}

.feature:hover .circle-3,
.feature:hover #letterG {
    animation: rightLeft 1000ms forwards; 
}

.feature:hover #letterI {
    transform: translateX(0%);
    animation: getOpacity 1000ms forwards;
}
.feature:hover #letterN {
    transform: translateX(13%);
    animation: getOpacity 1000ms forwards;
}
.feature:hover #letterG { 
    animation: getOpacityforG 1000ms forwards;
}

@keyframes rightLeft {
    0% {
        transform: translateX(30%);
    }
     100% {
        transform: translateX(-5%);
     }
}

@keyframes getOpacity {
    50% {
        opacity: 0;
    }
     100% {
        opacity: 100%;
     }
}

@keyframes getOpacityforG {
    0% {
        transform: translateX(30%);
    }
    50% {
        opacity: 0;
    }
     100% {
        opacity: 100%;
        transform: translateX(-5%);
     }
}

</style>



