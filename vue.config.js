module.exports = {
  // pluginOptions: {
  //   i18n: {
  //     locale: "en",
  //     fallbackLocale: "en",
  //     localeDir: "locales",
  //     enableInSFC: false,
  //     enableBridge: false,
  //   },
  // },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/main.scss";
        `,
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
