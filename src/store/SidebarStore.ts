import { create } from "zustand";

export interface AlignmentStore {
  alignment: string;
  setAlignment: (values: string) => void;

  letters: boolean;
  setLetters: (value: boolean) => void;
}

export const useSidebar = create<AlignmentStore>((set) => ({
  alignment: "",
  setAlignment: (values: string) => {
    set(() => ({ alignment: values }));
  },
  letters: false,
  setLetters: (value: boolean) => {
    set(() => ({ letters: value }));
  },
}));
