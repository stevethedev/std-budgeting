import { Budget } from ".";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Page/Budget",
  component: Budget,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Budget>;

export const Default: StoryObj<typeof Budget> = {
  name: "Budget",
  args: {},
};
