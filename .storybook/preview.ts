import type { Preview } from "@storybook/svelte";
import { Theme } from "../packages/std-budgeting-client/src/theme/default";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [() => ({ Component: Theme })],
};

export default preview;
