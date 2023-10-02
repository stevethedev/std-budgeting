import path from "path";
import WorkboxWebpackPlugin from "workbox-webpack-plugin";
import type {
  Configuration,
  RuleSetUseItem,
  WebpackOptionsNormalized,
} from "webpack";
import { merge } from "webpack-merge";
import fs from "fs";

interface WebpackConfig extends Configuration {
  devServer?: WebpackOptionsNormalized["devServer"];
}

interface ReferenceDict {
  styleLoader: RuleSetUseItem;
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

const getConfig = (
  overrides: Partial<WebpackConfig>,
  ref: ReferenceDict,
): WebpackConfig =>
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
            test: /\.module\.scss$/,
            use: [
              ref.styleLoader,
              {
                loader: "css-loader",
                options: {
                  modules: true,
                },
              },
              "sass-loader",
            ],
          },
          {
            test: /\.scss$/,
            exclude: /\.module\.scss$/,
            use: [ref.styleLoader, "css-loader", "sass-loader"],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: "asset",
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".scss"],
      },
    },
    overrides,
  );

export default () => {
  const isProduction = process.env.NODE_ENV == "production";

  const overrides: Partial<WebpackConfig> = {
    mode: isProduction ? "production" : "development",
    plugins: isProduction ? [new WorkboxWebpackPlugin.GenerateSW()] : [],
  };

  const dict: ReferenceDict = {
    styleLoader: "style-loader",
  };

  return getConfig(overrides, dict);
};
