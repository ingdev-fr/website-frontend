const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
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
