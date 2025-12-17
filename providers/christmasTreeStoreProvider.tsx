"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useStore } from "zustand";

import {
  createChristmasTreeStore,
  type ChristmasTreeStore,
} from "@/stores/christmasTreeStore";

type ChristmasTreeStoreApi = ReturnType<typeof createChristmasTreeStore>;

const ChristmasTreeStoreContext = createContext<
  ChristmasTreeStoreApi | undefined
>(undefined);

interface ChristmasTreeStoreProviderProps {
  children: ReactNode;
}

export function ChristmasTreeStoreProvider({
  children,
}: ChristmasTreeStoreProviderProps) {
  const [store] = useState(() => createChristmasTreeStore());

  return (
    <ChristmasTreeStoreContext.Provider value={store}>
      {children}
    </ChristmasTreeStoreContext.Provider>
  );
}

export function useChristmasTreeStore<T>(
  selector: (store: ChristmasTreeStore) => T,
): T {
  const store = useContext(ChristmasTreeStoreContext);
  if (!store) {
    throw new Error(
      "useChristmasTreeStore must be used within ChristmasTreeStoreProvider",
    );
  }

  return useStore(store, selector);
}
