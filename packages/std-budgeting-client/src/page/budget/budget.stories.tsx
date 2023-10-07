import { Budget } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import {
  BudgetOverviewRequestPayload,
  BudgetOverviewResponsePayload,
  EventBus,
} from "@stevethedev/std-budgeting-events";
import { Provider as EventProvider } from "../../provider/events";

const getCryptoNumber = (max: number): number => {
  const u32max = 0xffffffff - (0xffffffff % max);
  const u32 = new Uint32Array(1);
  do {
    window.crypto.getRandomValues(u32);
  } while (u32[0] >= u32max);

  return u32[0] % max;
};

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
              budgeted: getCryptoNumber(100000) / 100,
              actual: getCryptoNumber(100000) / 100,
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
