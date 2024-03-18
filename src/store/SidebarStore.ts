import { create } from "zustand";

export interface AlignmentStore {
  alignment: string;
  setAlignment: (values: string) => void;

  letters: boolean;
  setLetters: (value: boolean) => void;

  separation: string;
  setSeparation: (value: string) => void;

  title: string;
  setTitle: (value: string) => void;
}

export const useSidebar = create<AlignmentStore>((set) => ({
  alignment: "flex",
  setAlignment: (values: string) => {
    set(() => ({ alignment: values }));
  },
  letters: false,
  setLetters: (value: boolean) => {
    set(() => ({ letters: value }));
  },
  separation: "not",
  setSeparation: (value: string) => {
    set(() => ({ separation: value }));
  },
  title: "",
  setTitle: (value: string) => {
    set(() => ({ title: value }));
  },
}));
