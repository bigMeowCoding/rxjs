var path = require("path");
var webpack = require("webpack");
var version = require("./package.json").version;
const ESLintPlugin = require("eslint-webpack-plugin");

export default {
  // output: {
  //   path: path.resolve(__dirname, "build"),
  //   filename: "bscroll.js",
  //   library: "BScroll",
  //   libraryTarget: "umd",
  //   publicPath: "/assets/",
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",

      },
    ],
  },
  target: ['web', 'es5'],

  plugins: [new ESLintPlugin()],
};
