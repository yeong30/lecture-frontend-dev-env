const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000, // 10Kb
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "11",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: (bundlers) => {
        const date = new Date().toLocaleString();
        console.log(process.env);
        return `Build Time : ${date}`;
      },
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   templateParameters: {
    //     env: process.env.NODE_ENV === "development" ? "(개발용)" : "프로덕션",
    //   },
    //   minify: {
    //     removeComments: true, // 주석 제거
    //   },
    // }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: `[name].css` }),
    new webpack.DefinePlugin({
      NODE_ENV: "development",
    }),
  ],
};
