// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WorkboxWebpackPlugin from "workbox-webpack-plugin";
import { Configuration, WebpackOptionsNormalized } from "webpack";
import { merge } from "webpack-merge";

const stylesHandler = "style-loader";

interface WebpackConfig extends Configuration {
  devServer?: WebpackOptionsNormalized["devServer"];
}

const getConfig = (overrides: Partial<WebpackConfig>): WebpackConfig =>
  merge(
    {
      entry: "./src/index.ts",
      output: {
        path: path.resolve(__dirname, "dist"),
      },
      devServer: {
        open: true,
        host: "localhost",
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "index.html",
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
      ],
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/i,
            loader: "ts-loader",
            exclude: ["/node_modules/"],
          },
          {
            test: /\.css$/i,
            use: [stylesHandler, "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [stylesHandler, "css-loader", "sass-loader"],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: "asset",
          },

          // Add your rules for custom modules here
          // Learn more about loaders from https://webpack.js.org/loaders/
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
      },
    },
    overrides,
  );

export default () => {
  const isProduction = process.env.NODE_ENV == "production";

  const mode = isProduction ? "production" : "development";
  const plugins = isProduction ? [new WorkboxWebpackPlugin.GenerateSW()] : [];

  return getConfig({ mode, plugins });
};
