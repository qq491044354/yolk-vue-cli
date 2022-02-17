"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  css: {
    // extract:
    //   process.env.NODE_ENV === 'production'
    //     ? {
    //         ignoreOrder: true
    //       }
    //     : false,
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/styles/mixins.scss";`,
      },
    },
  },
};
