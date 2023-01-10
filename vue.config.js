const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // Paramétrage du publicPath 
  publicPath: process.env.NODE_ENV === 'production'
    ? '' // je veux enlever la barre pour que les images et assets puissent s'afficher correctement.
    : '/' , // sinon je renvoie vers la racine du projet

  // Paramétrage Sass
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/scss/global.scss";
        `
      }
    }
  }
})
