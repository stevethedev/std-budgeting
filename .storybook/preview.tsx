import type { Preview } from "@storybook/react";
import { Theme } from "std-budgeting-client/src/theme/default";

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
  decorators: [(story, context) => <Theme>{story(context)}</Theme>],
};

export default preview;
