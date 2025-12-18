import { createStore } from "zustand/vanilla";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const roundToTwoDecimals = (value: number) => Math.round(value * 100) / 100;

export type SceneState = {
  sceneScale: number;
};

export type SceneActions = {
  decreaseSceneScale: () => void;
  increaseSceneScale: () => void;
  resetSceneScale: () => void;
  setSceneScale: (sceneScale: number) => void;
};

export type SceneStore = SceneState & SceneActions;

export const defaultInitState: SceneState = {
  sceneScale: 1,
};

const MIN_SCALE = 0.7;
const MAX_SCALE = 1.4;
const SCALE_STEP = 0.1;

export const createSceneStore = (initState: SceneState = defaultInitState) => {
  return createStore<SceneStore>()((set, get) => ({
    ...initState,
    decreaseSceneScale: () => {
      const { sceneScale } = get();
      set({
        sceneScale: clamp(
          roundToTwoDecimals(sceneScale - SCALE_STEP),
          MIN_SCALE,
          MAX_SCALE,
        ),
      });
    },
    increaseSceneScale: () => {
      const { sceneScale } = get();
      set({
        sceneScale: clamp(
          roundToTwoDecimals(sceneScale + SCALE_STEP),
          MIN_SCALE,
          MAX_SCALE,
        ),
      });
    },
    resetSceneScale: () => {
      set({ sceneScale: defaultInitState.sceneScale });
    },
    setSceneScale: (sceneScale) => {
      set({
        sceneScale: clamp(roundToTwoDecimals(sceneScale), MIN_SCALE, MAX_SCALE),
      });
    },
  }));
};
