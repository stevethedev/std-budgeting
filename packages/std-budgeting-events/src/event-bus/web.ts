import { EventBus as IEventBus, EventHandle } from "./type";

export class EventBus implements IEventBus {
  private eventEmitter: EventTarget;

  constructor(eventEmitter = new EventTarget()) {
    this.eventEmitter = eventEmitter;
  }

  public on<T>(event: string, callback: (payload: T) => void): EventHandle<T> {
    const myCallback = (event: CustomEvent<T>) => callback(event.detail);

    const on = () => {
      this.eventEmitter.addEventListener(event, myCallback);
    };
    const off = () => this.eventEmitter.removeEventListener(event, myCallback);
    const emit = (payload: T) => {
      this.emit(event, payload);
    };

    on();

    return { on, off, emit };
  }

  public emit<T>(event: string, payload: T): void {
    const evt = new CustomEvent(event, { detail: payload });
    this.eventEmitter.dispatchEvent(evt);
  }
}
