import path from "path";
import WorkboxWebpackPlugin from "workbox-webpack-plugin";
import type { Configuration, WebpackOptionsNormalized } from "webpack";
import { merge } from "webpack-merge";
import fs from "fs";

const stylesHandler = "style-loader";

interface WebpackConfig extends Configuration {
  devServer?: WebpackOptionsNormalized["devServer"];
}

const getEntries = (): WebpackConfig["entry"] => {
  const packagesDir = path.resolve(".", "packages");
  return fs
    .readdirSync(packagesDir)
    .map((found) => ({ name: found, dir: path.resolve(packagesDir, found) }))
    .filter(({ dir }) => fs.existsSync(dir))
    .filter(({ dir }) => fs.statSync(dir).isDirectory())
    .map(({ name, dir }) => ({
      name,
      dir,
      packageJson: JSON.parse(
        fs.readFileSync(path.resolve(dir, "package.json"), "utf-8"),
      ),
    }))
    .map(({ name, dir, packageJson }) => {
      const main = packageJson.main ?? path.join("src", "index.ts");
      return {
        name: packageJson.name ?? name,
        main: path.resolve(dir, main),
      };
    })
    .reduce(
      (acc, { name, main }) => ({
        ...acc,
        [name]: main,
      }),
      {},
    );
};

const getConfig = (overrides: Partial<WebpackConfig>): WebpackConfig =>
  merge(
    {
      entry: getEntries(),
      output: {
        path: path.resolve(".", "dist"),
      },
      devServer: {
        open: true,
        host: "localhost",
      },
      plugins: [
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
