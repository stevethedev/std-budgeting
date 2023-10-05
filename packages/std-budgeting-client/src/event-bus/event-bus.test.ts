import { createEventBus } from "./event-bus";

describe("Event Bus", () => {
  it("should emit events", () => {
    const eventBus = createEventBus();
    const callback = jest.fn();
    const { emit } = eventBus.on("event", callback);
    emit("payload");
    expect(callback).toHaveBeenCalledWith("payload");
  });

  it("should not emit events to unregistered listeners", () => {
    const eventBus = createEventBus();
    const callback = jest.fn();
    const { emit, off } = eventBus.on("event", callback);
    emit("payload");
    off();
    emit("payload");
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
