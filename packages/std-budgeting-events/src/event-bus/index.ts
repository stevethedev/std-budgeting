const ConditionalEventBus =
  typeof window === "undefined"
    ? require("./node").EventBus // eslint-disable-line @typescript-eslint/no-var-requires
    : require("./web").EventBus; // eslint-disable-line @typescript-eslint/no-var-requires
import type { EventBus as IEventBus } from "./type";

export const EventBus: new () => IEventBus = ConditionalEventBus;

export type EventBus = IEventBus;

export { Callback, EventHandle, Dispatch } from "./type";
