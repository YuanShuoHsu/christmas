"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useStore } from "zustand";

import { createSceneStore, type SceneStore } from "@/stores/sceneStore";

type SceneStoreApi = ReturnType<typeof createSceneStore>;

const SceneStoreContext = createContext<SceneStoreApi | undefined>(undefined);

interface SceneStoreProviderProps {
  children: ReactNode;
}

export function SceneStoreProvider({ children }: SceneStoreProviderProps) {
  const [store] = useState(() => createSceneStore());

  return (
    <SceneStoreContext.Provider value={store}>
      {children}
    </SceneStoreContext.Provider>
  );
}

export function useSceneStore<T>(selector: (store: SceneStore) => T): T {
  const store = useContext(SceneStoreContext);
  if (!store) {
    throw new Error("useSceneStore must be used within SceneStoreProvider");
  }

  return useStore(store, selector);
}
