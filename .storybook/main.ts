import type { StorybookConfig } from "@storybook/svelte-webpack5";

import { dirname, join } from "path";
import sveltePreprocess from "svelte-preprocess";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/svelte-webpack5"),
    options: {
      preprocess: sveltePreprocess(),
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
      ],
    });

    config.resolve = config.resolve || {};
    config.resolve.extensions = config.resolve.extensions || [];
    config.resolve.extensions.push(".ts", ".tsx", ".svelte");

    return config;
  },
};
export default config;
