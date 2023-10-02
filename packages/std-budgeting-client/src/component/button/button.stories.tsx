import type { Meta, StoryObj } from "@storybook/react";
import { Button, Variant } from ".";

export default {
  title: "Component/Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    label: {
      control: "text",
      description:
        "Sets the button's default text, if the default slot is not filled in.",
    },
    variant: {
      control: { type: "select" },
      options: Variant,
    },
  },
} satisfies Meta<typeof Button>;

export const Default: StoryObj = {
  name: "Button",
};
