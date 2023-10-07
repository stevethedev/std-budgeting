import { render, renderHook, screen } from "@testing-library/react";
import {
  Provider,
  useEventBus,
  useEventDispatch,
  useEventListener,
} from "./events";
import "@testing-library/jest-dom";
import { EventBus } from "@stevethedev/std-budgeting-events";

describe("Event Provider", () => {
  it("renders children", async () => {
    render(
      <Provider>
        <div>Child component</div>
      </Provider>,
    );

    expect(screen.getByText("Child component")).toBeInTheDocument();
  });

  it("provides the event bus", async () => {
    const callback = jest.fn();
    const payload = Symbol();

    renderHook(
      () => {
        const eventBus = useEventBus();
        eventBus.on("test", callback);
        eventBus.emit("test", payload);
      },
      { wrapper: Provider },
    );

    expect(callback).toHaveBeenCalledWith(payload);
  });

  it("provides the event dispatch", async () => {
    const callback = jest.fn();
    const payload = Symbol();

    renderHook(
      () => {
        const dispatch = useEventDispatch("__test");
        const eventBus = useEventBus();
        eventBus.on("__test", callback);
        dispatch(payload);
      },
      { wrapper: Provider },
    );

    expect(callback).toHaveBeenCalledWith(payload);
  });

  it("provides the event listener", async () => {
    const callback = jest.fn();
    const payload = [Symbol("first"), Symbol("second"), Symbol("third")];

    renderHook(
      () => {
        const dispatch = useEventDispatch("__test");
        const { on, off } = useEventListener("__test", callback);
        dispatch(payload[0]);
        off();
        dispatch(payload[1]);
        on();
        dispatch(payload[2]);
      },
      { wrapper: Provider },
    );

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(payload[0]);
    expect(callback).not.toHaveBeenCalledWith(payload[1]);
    expect(callback).toHaveBeenCalledWith(payload[2]);
  });

  it("can use extended payload values", async () => {
    const eventBus = new EventBus();

    const responseCallback = jest.fn();
    const response = {
      foo: {
        budgeted: 0,
        actual: 1,
      },
    };

    const requestCallback = jest.fn(() =>
      eventBus.emit("budget-overview:response", response),
    );

    eventBus.on("budget-overview:request", requestCallback);

    renderHook(
      () => {
        const dispatchRequest = useEventDispatch("budget-overview:request");
        const { off } = useEventListener(
          "budget-overview:response",
          responseCallback,
        );

        dispatchRequest({
          select: [
            {
              name: "foo",
              filter: {
                field: "budgeted",
                operator: "eq",
                value: "0",
              },
            },
          ],
        });

        off();
      },
      {
        wrapper: ({ children }) => (
          <Provider eventBus={eventBus}>{children}</Provider>
        ),
      },
    );

    expect(requestCallback).toHaveBeenCalled();
    expect(responseCallback).toHaveBeenCalledWith(response);
  });
});
