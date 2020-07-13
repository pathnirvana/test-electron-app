module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "lk.tipitaka.main",
        productName: "Tipitaka.lk",
        directories: {
          buildResources: "dist_electron/buildRes",
        },
        publish: ['github'],
      }
    }
  }
}