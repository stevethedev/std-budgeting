import type { StorybookConfig } from "@storybook/react-webpack5";
import { dirname, join } from "path";
import webpackConfig from "../webpack.config";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      strictMode: true,
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    const cfg = webpackConfig();

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push(...cfg.module.rules);

    config.resolve = config.resolve || {};
    config.resolve.extensions = config.resolve.extensions || [];
    config.resolve.extensions.push(...cfg.resolve.extensions);

    return config;
  },
};
export default config;
