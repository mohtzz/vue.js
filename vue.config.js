const { defineConfig } = require('@vue/cli-service')

/*module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    proxy: {
      '^/api/': {
        target: 'http://localhost:8083'
      }
    }
  }
})*/
module.exports = {
  devServer: {
    port: 8080,
    /*proxy: {
      '/api': {
        target: 'http://localhost:8084', // URL вашего бэкенда
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Удалить префикс /api, если нужно
      },
    },*/
  },
};