import { create } from "zustand";

export interface ImageStore {
  aColumnImages: string[];
  setAColumnImages: (img: string[]) => void;
  bColumnImages: string[];
  setBColumnImages: (img: string[]) => void;
}

export const useImage = create<ImageStore>((set) => ({
  aColumnImages: [],
  setAColumnImages: (imgs: string[]) => {
    set(() => ({ aColumnImages: imgs }));
  },
  bColumnImages: [],
  setBColumnImages: (imgs: string[]) => {
    set(() => ({ bColumnImages: imgs }));
  },
}));
