import { Budget } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import {
  BudgetOverviewRequestPayload,
  BudgetOverviewResponsePayload,
  EventBus,
} from "@stevethedev/std-budgeting-events";
import { Provider as EventProvider } from "../../provider/events";

export default {
  title: "Page/Budget",
  component: Budget,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const eventBus = new EventBus();
      eventBus.on(
        "budget-overview:request",
        (params: BudgetOverviewRequestPayload) => {
          const response: BudgetOverviewResponsePayload = {
            values: params.select.map((s) => ({
              name: s.name,
              budgeted: ((Math.random() * 100000) | 0) / 100,
              actual: ((Math.random() * 100000) | 0) / 100,
            })),
          };
          eventBus.emit("budget-overview:response", response);
        },
      );

      return (
        <EventProvider eventBus={eventBus}>
          <Story />
        </EventProvider>
      );
    },
  ],
} satisfies Meta<typeof Budget>;

export const Default: StoryObj<typeof Budget> = {
  name: "Budget",
  args: {},
};
