import type { Meta, StoryObj } from "@storybook/react";
import { BudgetOverview } from ".";

export default {
  title: "Container/Budget Overview",
  component: BudgetOverview,
} satisfies Meta<typeof BudgetOverview>;

export const Default: StoryObj<typeof BudgetOverview> = {
  name: "Budget Overview",
  args: {
    data: {
      values: [
        {
          name: "Income",
          budgeted: 1000,
          actual: 1000,
        },
        {
          name: "Expenses",
          budgeted: 1000,
          actual: 1000,
        },
      ],
    },
  },
};
