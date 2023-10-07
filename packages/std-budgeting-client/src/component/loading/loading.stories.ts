import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";

export default {
  title: "Component/Loading",
  component: Loading,
} satisfies Meta<typeof Loading>;

export const Default: StoryObj = {
  name: "Loading",
};
