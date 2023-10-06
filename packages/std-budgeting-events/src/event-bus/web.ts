import { EventBus as IEventBus, EventHandle } from "./type";

export class EventBus implements IEventBus {
  private eventEmitter: EventTarget;

  constructor(eventEmitter = new EventTarget()) {
    this.eventEmitter = eventEmitter;
  }

  public on<T>(event: string, callback: (payload: T) => void): EventHandle<T> {
    const myCallback = (event: CustomEvent<T>) => callback(event.detail);
    this.eventEmitter.addEventListener(event, myCallback);

    const on = () => void this.on(event, callback);
    const off = () => this.eventEmitter.removeEventListener(event, myCallback);
    const emit = (payload: T) => this.emit(event, payload);

    return { on, off, emit };
  }

  public emit<T>(event: string, payload: T): void {
    this.eventEmitter.dispatchEvent(
      new CustomEvent(event, { detail: payload }),
    );
  }
}
