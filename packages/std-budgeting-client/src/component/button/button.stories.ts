import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";
import { Variant } from "./variants";

export default {
  title: "Component/Button",
  component: Button,
  args: {
    children: "Button",
    onPress: action("onPress"),
  },
  argTypes: {
    title: {
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
