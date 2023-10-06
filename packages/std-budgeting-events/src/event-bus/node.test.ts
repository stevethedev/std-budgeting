/** @jest-environment node */

import { EventBus } from "./node";

describe("Node Event Bus", () => {
  it("should emit events", () => {
    const eventBus = new EventBus();
    const callback = jest.fn();
    const { emit } = eventBus.on("event", callback);
    emit("payload");
    expect(callback).toHaveBeenCalledWith("payload");
  });

  it("should not emit events to unregistered listeners", () => {
    const eventBus = new EventBus();
    const callback = jest.fn();
    const { emit, off } = eventBus.on("event", callback);
    emit("payload");
    off();
    emit("payload");
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
