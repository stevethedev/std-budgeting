import {
  createContext,
  type FC,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import {
  Callback,
  Dispatch,
  EventBus,
  EventHandle,
  EventRegistry,
} from "@stevethedev/std-budgeting-events";

const Context = createContext<EventBus | null>(null);

export interface Props {
  eventBus?: EventBus;
  children: ReactNode;
}

export const useEventBus = (): EventBus => {
  const eventBus = useContext<EventBus | null>(Context);
  if (eventBus === null) {
    throw new Error("EventBus not found");
  }
  return eventBus;
};

export interface EventFns<T> {
  listen: (callback: Callback<T>) => void;
  dispatch: (payload: T) => void;
}

export const useEventDispatch = <T extends keyof EventRegistry>(
  event: T,
): Dispatch<EventRegistry[T]> => {
  const eventBus = useEventBus();
  return useCallback(
    (payload: EventRegistry[T]) => {
      eventBus.emit(event, payload);
    },
    [eventBus, event],
  );
};

export const useEventListener = <T extends keyof EventRegistry>(
  event: T,
  callback: Callback<EventRegistry[T]>,
): EventHandle<EventRegistry[T]> => {
  const eventBus = useEventBus();

  return useMemo(
    () => eventBus.on(event, callback),
    [eventBus, event, callback],
  );
};

export const Provider: FC<Props> = ({ children, eventBus }) => {
  console.log("Event bus provider", eventBus);
  const context: EventBus = useMemo(
    () => eventBus ?? new EventBus(),
    [eventBus],
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
