export interface EventHandle<TPayload> {
  off: () => void;
  on: () => void;
  emit: (payload: TPayload) => void;
}

export interface EventBus {
  on<T>(event: string, callback: (payload: T) => void): EventHandle<T>;

  emit<T>(event: string, payload: T): void;
}
