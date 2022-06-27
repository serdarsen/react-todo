const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer");

const config = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[fullhash].js",
  },
  devtool: "eval-cheap-source-map",
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
              ["@babel/preset-env", {
                useBuiltIns: "usage",
                corejs: 3,
                targets: "defaults",
              }],
              "@babel/preset-react",
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
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

if (currentTask === "build") {
  config.mode = "production";
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "main.[fullhash].css" }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
  );

  config.performance = {
    hints: false,
  };
}

if (currentTask === "analyze") {
  config.mode = "production";
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "main.[fullhash].css" }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),
  );

  config.performance = {
    hints: "warning",
  };
}

module.exports = config;
