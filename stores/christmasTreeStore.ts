import { createStore } from "zustand/vanilla";

import {
  generateTreeOrnaments,
  type TreeOrnament,
} from "@/utils/treeOrnaments";

export type ChristmasTreeState = {
  ornaments: TreeOrnament[];
  photoName: string | null;
  photoUrl: string | null;
};

export type ChristmasTreeActions = {
  clearPhoto: () => void;
  randomizeOrnaments: () => void;
  setPhotoFromFile: (file: File) => void;
};

export type ChristmasTreeStore = ChristmasTreeState & ChristmasTreeActions;

export const defaultInitState: ChristmasTreeState = {
  ornaments: [],
  photoName: null,
  photoUrl: null,
};

export const createChristmasTreeStore = (
  initState: ChristmasTreeState = defaultInitState,
) => {
  return createStore<ChristmasTreeStore>()((set, get) => ({
    ...initState,
    clearPhoto: () => {
      const { photoUrl } = get();
      if (photoUrl) URL.revokeObjectURL(photoUrl);

      set({ photoName: null, photoUrl: null, ornaments: [] });
    },
    randomizeOrnaments: () => {
      const { photoUrl } = get();
      if (!photoUrl) return;

      set({ ornaments: generateTreeOrnaments() });
    },
    setPhotoFromFile: (file) => {
      const { photoUrl } = get();
      if (photoUrl) URL.revokeObjectURL(photoUrl);

      set({
        photoName: file.name,
        photoUrl: URL.createObjectURL(file),
        ornaments: generateTreeOrnaments(),
      });
    },
  }));
};
