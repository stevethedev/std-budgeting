import { EventEmitter } from "events";

import { EventBus as IEventBus, EventHandle } from "./type";

export class EventBus implements IEventBus {
  private eventEmitter: EventEmitter;

  constructor(eventEmitter = new EventEmitter()) {
    this.eventEmitter = eventEmitter;
  }

  public on<T>(event: string, callback: (payload: T) => void): EventHandle<T> {
    this.eventEmitter.on(event, callback);

    const on = () => void this.eventEmitter.on(event, callback);
    const off = () => this.eventEmitter.off(event, callback);
    const emit = (payload: T) => this.eventEmitter.emit(event, payload);

    return { on, off, emit };
  }

  public emit<T>(event: string, payload: T): void {
    this.eventEmitter.emit(event, payload);
  }
}
