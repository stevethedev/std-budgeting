import {
  createContext,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from "react";

export interface Store {
  name: string;
  age: number;
}

export interface Context {
  store: Store;
  setStore: Dispatch<SetStateAction<Store>>;
}

const Context = createContext<Context>({
  store: { name: "", age: 0 },
  setStore: (store: Store) => store,
});

export interface Props {
  children: ReactNode;
}

export const useStore = (): [
  Readonly<Store>,
  Dispatch<SetStateAction<Store>>,
] => {
  const { store, setStore } = useContext<Context>(Context);
  return [store, setStore];
};

export const Provider: FC<Props> = ({ children }) => {
  const [store, setStore] = useState<Store>({ name: "", age: 0 });
  const storeContext: Context = {
    store,
    setStore,
  };

  return <Context.Provider value={storeContext}>{children}</Context.Provider>;
};
