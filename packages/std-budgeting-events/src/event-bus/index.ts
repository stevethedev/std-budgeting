const { EventBus: ConditionalEventBus } =
  typeof window === "undefined" ? require("./node") : require("./web");
import type { EventBus as IEventBus } from "./type";

export const EventBus: new () => IEventBus = ConditionalEventBus;
