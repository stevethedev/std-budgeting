import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "./input";

export default {
  component: Input,
  title: "Component/Input",
} satisfies Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  name: "Input",
  args: {
    value: "Hello",
    onInput: action("onInput"),
    title: "Test title",
  },
};
