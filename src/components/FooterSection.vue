<template>
    <footer class="footer py-5">
      <div class="template d-lg-flex">
        <!-- INFOS FOOTER -->
        <div class="footer__infos col-md-4 p-2">
          <div class="">
            <!-- LOGO -->
            <div class="d-flex mb-2">
              <img class="logo-img" src='../assets/images/logo.svg' alt="ingdev logo"/>
            </div>
            <!-- INFORMATIONS -->
            <div>
              <p class="mb-2 col-md-10">Développement web / ingénierie de formation / E-learning</p>
              <h3 class="mb-2 fw-bold fs-6">Informations :</h3>
              <ul class="list-unstyled">
                <li>Tel : +33 (0)6-17-25-51-70</li>
                <li>Mail : info@ingdev.fr</li>
                <li>Statut : SASU</li>
                <li>RCS : 919 551 689</li>
                <li>Nom du dirigeant: Damien Will</li>
              </ul>
            </div>
          </div>
        </div>
        <!--  CERTIFCATIONS - PARTENAIRES  -->
        <div class="col-md-4 mb-lg-3 p-2 d-lg-flex flex-lg-column align-items-lg-center">
          <div class="">
            <!-- CERTIFICATIONS -->
            <div class="certif mb-2">
              <h3 class="mb-2 nav-link fw-bold fs-6">Certifications :</h3>
              <div class="mb-2 mt-2 d-flex flex-wrap">
                <img class="certif__img" id="certif__img-1" src="../assets/images/Moodle_Admin_Basics_completer.png" alt="badge Moodle Ingdev"  @mouseover="showDetails1()" @mouseleave="maskDetails1()">
                <img class="certif__img" src="../assets/images/Moodle_4.0_for_Admins.png" alt="badge Moodle 4.0 Ingdev" @mouseover="showDetails2()" @mouseleave="maskDetails2()">
                <img class="certif__img" src="../assets/images/Start_Teaching_with_Moodle.png" alt="badge Moodle enseigner Ingdev" @mouseover="showDetails3()" @mouseleave="maskDetails3()">
                <img class="certif__img" src="../assets/images/Moodle_Course_Activities.png" alt="badge Moodle cours activités Ingdev" @mouseover="showDetails4()" @mouseleave="maskDetails4()">
                <img class="certif__img" src="../assets/images/Moodle_Course_Content.png" alt="badge Moodle cours contenu Ingdev" @mouseover="showDetails5()" @mouseleave="maskDetails5()">
              </div>
              <div id="popover-list" class="mb-2">
                <div class="popover mb-2 p-2" id="popover-1">Les bases de l'administration de Moodle</div>
                <div class="popover mb-2 p-2" id="popover-2">Les bases de l'administration de Moodle 4.0</div>
                <div class="popover mb-2 p-2" id="popover-3">Enseigner avec Moodle</div>
                <div class="popover mb-2 p-2" id="popover-4">Créer des activités avec Moodle</div>
                <div class="popover mb-2 p-2" id="popover-5">Créer des cours avec Moodle</div>
              </div>
            </div>
            <!-- PARTENAIRES -->
            <div class="mt-3">
              <h3 class="link-title fw-bold mb-2 fs-6">Partenaires :</h3>
              <ul class="list-unstyled">
                <li class="me-3">Ingénierie de formation : <a href="https://www.linkedin.com/in/damien-will/" target="blank">Damien Will</a></li>
                <li class="me-3">Technologie PHP : <a href="https://www.scopen.fr/" target="blank">Scopen</a></li>
              </ul>
            </div>
            <!-- RESEAUX SOCIAUX -->
            <div class="d-flex align-items-center">
              <h3 class="link-title fw-bold mb-2 fs-6">Linkedin :</h3>
              <ul class="list-unstyled">
                <li class="pt-1 ms-2"><a href="https://www.linkedin.com/company/ingdev-ingdev/" target="blank"><img src="../assets/images/icons8-linkedin-circled.svg" alt="Linkedin Ingdev" class="certif__img"></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ILLUSTRATION - CONCEPTION -->
        <div class="col-md-4 px-2 d-lg-flex flex-lg-column align-items-lg-end">
          <div class="">
            <!-- ILLUSTRATION-->
            <div class="footer__illustration d-flex justify-content-center">
              <img src="../assets/images/dazzle-web-analytics-and-statistics.svg" alt="chart" class="footer__img">
            </div>
            <!-- CONCEPTION -->
            <h3 class="fw-bold mb-2 fs-6">Conception :</h3>
            <div class="mb-2">Site web conçu "from scratch" par <img class="logo-v" src="../assets/images/logo-v.svg"> Ingdev</div>
            <div class="mb-2">Copyright Ingdev @2022</div>
          </div>
        </div>
      </div>
        
</footer>
</template>

<script>
export default {
    name: 'FooterSection',
    
    methods: {
      showDetails1: function() {
        document.getElementById('popover-1').style.display='block';
      },
      maskDetails1: function() {
        document.getElementById('popover-1').style.display='none';
      },
      showDetails2: function() {
        document.getElementById('popover-2').style.display='block';
      },
      maskDetails2: function() {
        document.getElementById('popover-2').style.display='none';
      },
      showDetails3: function() {
        document.getElementById('popover-3').style.display='block';
      },
      maskDetails3: function() {
        document.getElementById('popover-3').style.display='none';
      },
      showDetails4: function() {
        document.getElementById('popover-4').style.display='block';
      },
      maskDetails4: function() {
        document.getElementById('popover-4').style.display='none';
      },
      showDetails5: function() {
        document.getElementById('popover-5').style.display='block';
      },
      maskDetails5: function() {
        document.getElementById('popover-5').style.display='none';
      },
    }
}
</script>

<style lang="scss" scoped>
 .footer {
  background: radial-gradient( at bottom left, $secondary-color-clear, $third-color);
  &__arrow {
    height: 10px;
  }
  &__img {
    height: 10rem;
  }
 }

h2#footer__logo {
    font-size: 1.5rem;
    margin-bottom: 0;
    display: block;

  }

 .logo-img {
    height: 30px;
 }

 .logo-v {
  height: 1rem;
 }

 .certif {
  position: relative;
  &__img {
    height: 40px;
    margin-right: 7px;
  }
 }

.popover {
  position: absolute;
  top: -30px;
  left: 0;
}

 #popover-1, #popover-2, #popover-3, #popover-4, #popover-5 {
  display: none;
}

a {
  text-decoration: none;
}



</style>