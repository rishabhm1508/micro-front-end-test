const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "https://angular-micro-front-end-test.herokuapp.com/",
    uniqueName: "mdmfprofile",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile",
      library: { type: "var", name: "profile" },
      filename: "remoteEntry.js",
      exposes: {
        ProfileModule:
        "src/app/app.module.ts",
      },
      shared: {
        "@angular/core": { eager: true, singleton: true },
        "@angular/common": { eager: true, singleton: true },
        "@angular/router": { eager: true, singleton: true },
      },
    }),
  ],
};