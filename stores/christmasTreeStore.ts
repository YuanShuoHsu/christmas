import { create } from "zustand";

import {
  generateTreeOrnaments,
  type TreeOrnament,
} from "@/utils/treeOrnaments";

type ChristmasTreeState = {
  ornaments: TreeOrnament[];
  photoName: string | null;
  photoUrl: string | null;
  clearPhoto: () => void;
  randomizeOrnaments: () => void;
  setPhotoFromFile: (file: File) => void;
};

export const useChristmasTreeStore = create<ChristmasTreeState>((set, get) => ({
  ornaments: [],
  photoName: null,
  photoUrl: null,
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
