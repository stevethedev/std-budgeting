import { Navigation } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Container/Navigation",
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export const Default: StoryObj<typeof Navigation> = {
  name: "Navigation",
  args: {
    children: [
      <a key="foo" href="#">
        Foo
      </a>,
      <a key="bar" href="#">
        Bar
      </a>,
    ],
  },
};
