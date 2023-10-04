import { Meta, StoryObj } from "@storybook/react";
import { List } from "./list";

export default {
  title: "Component/List",
  component: List,
} satisfies Meta<typeof List>;

export const Default: StoryObj<typeof List> = {
  name: "List",
  args: {
    children: ["Item 1", "Item 2", "Item 3"],
  },
};
