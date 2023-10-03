import { Label } from "./label";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Component/Label",
  component: Label,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Label>;

export const Default: StoryObj<typeof Label> = {
  name: "Label",
  args: {
    children: "Hello World",
  },
};
