import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabControl } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "Container/Tab Control",
  component: TabControl,
} satisfies Meta<typeof TabControl>;

export const Default: StoryObj<typeof TabControl> = {
  name: "Tab Control",
  args: {
    selectedId: "tab-1",
    onSelectId: action("onSelectId"),
    children: [
      <Tab key="1" id="tab-1" label="Tab 1">
        Tab 1
      </Tab>,
      <Tab key="2" id="tab-2" label="Tab 2">
        Tab 2
      </Tab>,
      <Tab key="3" id="tab-3" label="Tab 3">
        Tab 3
      </Tab>,
    ],
  },
};
