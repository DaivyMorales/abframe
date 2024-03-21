import { create } from "zustand";

export interface ImageStore {
  aColumnImages: string[];
  setAColumnImages: (img: string[]) => void;
  bColumnImages: string[];
  setBColumnImages: (img: string[]) => void;
  cColumnImages: string[];
  setCColumnImages: (img: string[]) => void;
  dColumnImages: string[];
  setDColumnImages: (img: string[]) => void;
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
  cColumnImages: [],
  setCColumnImages: (imgs: string[]) => {
    set(() => ({ cColumnImages: imgs }));
  },
  dColumnImages: [],
  setDColumnImages: (imgs: string[]) => {
    set(() => ({ dColumnImages: imgs }));
  },
}));
