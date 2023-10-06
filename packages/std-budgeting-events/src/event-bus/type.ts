export interface EventHandle<TPayload> {
  off: () => void;
  on: () => void;
  emit: (payload: TPayload) => void;
}

export type Callback<TPayload> = (payload: TPayload) => void;
export type Dispatch<TPayload> = (payload: TPayload) => void;

export interface EventBus {
  on<T>(event: string, callback: Callback<T>): EventHandle<T>;

  emit<T>(event: string, payload: T): void;
}
