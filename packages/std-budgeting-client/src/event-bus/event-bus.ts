export interface HandleFns<T> {
  on: () => void;
  off: () => void;
  emit: (event: T) => void;
}

export interface EventBus {
  on: <T>(
    eventName: string | symbol,
    callback: (event: Readonly<T>) => void,
  ) => HandleFns<T>;
  emit: <T>(eventName: string | symbol, event: T) => void;
}

export function createEventBus(): EventBus {
  const listeners: Record<
    string | symbol,
    Array<(event: unknown) => void>
  > = {};

  const on = <T>(
    eventName: string | symbol,
    callback: (event: T) => void,
  ): HandleFns<T> => {
    if (!listeners[eventName]) {
      listeners[eventName] = [];
    }

    if (!listeners[eventName].includes(callback)) {
      listeners[eventName].push(callback);
    }

    return {
      on: () => on(eventName, callback),
      off: () => off(eventName, callback),
      emit: (event) => emit(eventName, event),
    };
  };

  const off = <T>(
    eventName: string | symbol,
    callback: (event: T) => void,
  ): void => {
    if (!listeners[eventName]) {
      return;
    }

    const index = listeners[eventName].indexOf(callback);
    if (index !== -1) {
      listeners[eventName].splice(index, 1);
    }
  };

  const emit = <T>(eventName: string | symbol, event: T): void => {
    if (!listeners[eventName]) {
      return;
    }

    listeners[eventName].forEach((callback) => callback(event));
  };

  return {
    on,
    emit,
  };
}
