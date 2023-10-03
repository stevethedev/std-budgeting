import { FormInputText } from "./form-input-text";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Container/FormInputText",
  component: FormInputText,
} satisfies Meta<typeof FormInputText>;

export const Default: StoryObj<typeof FormInputText> = {
  name: "FormInputText",
  args: {
    label: "Hello World",
    name: "hello-world",
    value: "My value",
    onInput: action("onInput"),
  },
};
