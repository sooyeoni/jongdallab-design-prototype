const webpack = require("webpack");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/Scss/Style.scss";
        `,
      },
    },
    extract:
      process.env.NODE_ENV === "production"
        ? {
            filename: "css/[name].css?hash=[chunkhash:8]",
            chunkFilename: "css/[name].css?hash=[chunkhash:8]",
            ignoreOrder: true,
          }
        : false,
  },
  chainWebpack(config) {
    if (process.env.NODE_ENV === "production") {
      config.output.filename("js/[name].js?hash=[hash:8]");
      config.output.chunkFilename("js/[name].js?hash=[chunkhash:8]");
      config.plugins.delete("prefetch");
    }
    config.plugin("jquery").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jQuery: "jquery",
      },
    ]);
  },
};
