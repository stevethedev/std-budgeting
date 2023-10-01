import type { Meta, StoryFn } from "@storybook/svelte";
import { action } from "@storybook/addon-actions";
import { Button } from ".";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    label: {
      control: "text",
      description:
        "Sets the button's default text, if the default slot is not filled in.",
    },
  },
} satisfies Meta<Button>;

const Template: StoryFn<Button> = (args) => ({
  Component: Button,
  props: args,
  on: {
    press: action("press"),
  },
});

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
