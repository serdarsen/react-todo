const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const config = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.[fullhash].js",
  },
  devServer: {
    port: 8080,
    open: false,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", {
                runtime: "automatic",
              }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};

if (currentTask === "build") {
  config.mode = "production";
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;

  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "main.[fullhash].css" }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
  );
}

module.exports = config;
