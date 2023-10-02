import type { Meta, StoryObj } from "@storybook/react";
import { Button, Variant } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Button",
  component: Button,
  args: {
    children: "Button",
    onPress: action("onPress"),
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
