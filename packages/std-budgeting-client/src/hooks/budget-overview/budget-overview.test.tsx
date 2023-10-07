import { renderHook } from "@testing-library/react";
import { useBudgetOverview } from ".";
import { Provider as EventProvider } from "../../provider/events";
import {
  BudgetOverviewRequestPayload,
  EventBus,
} from "@stevethedev/std-budgeting-events";

describe("useBudgetOverview", () => {
  it("dispatches the correct actions", () => {
    const eventBus = new EventBus();
    const onBudgetOverviewRequest = jest.fn();
    eventBus.on("budget-overview:request", onBudgetOverviewRequest);
    const query: BudgetOverviewRequestPayload = {
      foo: {
        field: "foo",
        operator: "eq",
        value: "bar",
      },
    };

    const { result } = renderHook(() => useBudgetOverview(query), {
      wrapper: ({ children }) => (
        <EventProvider eventBus={eventBus}>{children}</EventProvider>
      ),
    });

    expect(result.current.value).toEqual(null);

    expect(onBudgetOverviewRequest).toHaveBeenCalledWith(query);
  });

  it("returns the correct state", () => {
    const eventBus = new EventBus();
    const response = Symbol();
    const onBudgetOverviewRequest = jest.fn(() => {
      eventBus.emit("budget-overview:response", response);
    });
    const onBudgetOverviewResponse = jest.fn();

    eventBus.on("budget-overview:response", onBudgetOverviewResponse);
    eventBus.on("budget-overview:request", onBudgetOverviewRequest);

    const { result } = renderHook(
      () => {
        const { value } = useBudgetOverview({});
        return value;
      },
      {
        wrapper: ({ children }) => (
          <EventProvider eventBus={eventBus}>{children}</EventProvider>
        ),
      },
    );

    expect(result.current).toEqual(response);
  });
});
