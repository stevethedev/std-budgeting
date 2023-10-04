import { Default } from ".";
import { StoryObj } from "@storybook/react";

export default {
  title: "Layout/Default",
  component: Default,
};

export const DefaultStory: StoryObj<typeof Default> = {
  name: "Default",
  args: {
    children: "Hello World",
  },
};
