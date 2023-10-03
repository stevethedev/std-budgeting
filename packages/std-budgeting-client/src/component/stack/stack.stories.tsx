import { Stack } from "./stack";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Component/Stack",
  component: Stack,
  args: {
    children: [
      <div style={{ border: "1px solid" }}>First Box</div>,
      <div style={{ border: "1px solid" }}>Second Box</div>,
    ],
    isVertical: false,
    gap: 2,
  },
} satisfies Meta<typeof Stack>;

export const Default: StoryObj<typeof Stack> = {
  name: "Stack",
};
