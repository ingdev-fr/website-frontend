<template>
    <footer class="footer py-5">
      <div class="template">
        <a class="nav-link d-flex align-items-end" data-bs-toggle="collapse" href="#collapseFooter" role="button" aria-expanded="false" aria-controls="collapseFooter">
          <img class="logo-img me-2" src='../assets/svg/logo.svg' alt="ingdev logo"/>
          <h2 id="footer__logo">INGDEV</h2>
          <img src="../assets/svg/arrow-down.svg" alt="arrow down" class="footer__arrow ms-1">
        </a>
        <div class="collapse row" id="collapseFooter">
          <div class="col-md-6">
            <div class="mb-2">Développement web / ingénierie de formation / E-learning</div>
            <div class="mb-2">Code licensed<a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener"> MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</div>
            <div class="mb-2">Currently v5.0.2.</div>
            <div class="mb-2">Analytics by <a href="https://usefathom.com/ref/ADZSBE" target="_blank" rel="noopener">Fathom</a>.</div>
          </div>
          <div class="col-md-6 mb-3">
            <p class="link-title me-3">Links</p>
             <ul class="list-unstyled d-flex">
              <li class="mb-2 me-3"><a href="/">Home</a></li>
              <li class="mb-2 me-3"><a href="/docs/5.0/">Docs</a></li>
              <li class="mb-2 me-3"><a href="/docs/5.0/examples/">Examples</a></li>
              <li class="mb-2 me-3"><a href="https://themes.getbootstrap.com/">Themes</a></li>
              <li class="mb-2 me-3"><a href="https://blog.getbootstrap.com/">Blog</a></li>
              <li class="mb-2 me-3"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
</template>

<script>
export default {
    name: 'FooterSection',

}
</script>

<style lang="scss" scoped>
 .footer {
  background-image: radial-gradient( at top right, $secondary-color-clear, transparent 90%);
  &__arrow {
    height: 10px;
  }
 }

h2#footer__logo {
    font-size: 1.5rem;
    margin-bottom: 0;
    display: block;

  }

 .link-title {
    font-weight: bold;
 }

 .logo-img {
    height: 1.5rem;
 }


</style>