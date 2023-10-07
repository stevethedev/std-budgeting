import type { Meta, StoryObj } from "@storybook/react";
import { Currency } from "./currency";

export default {
  title: "Component/Currency",
  component: Currency,
} as Meta<typeof Currency>;

export const Default: StoryObj<typeof Currency> = {
  name: "Currency",
  args: {
    children: 12345.678,
  },
};
