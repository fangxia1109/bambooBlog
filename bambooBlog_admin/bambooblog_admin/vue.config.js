const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 1109,
    open: true, //设置窗口自动打开
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_variable.scss";`,
      },
    },
  },
})
