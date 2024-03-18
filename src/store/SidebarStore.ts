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

  font: string;
  setFont: (value: string) => void;

  credit: boolean;
  setCredit: (value: boolean) => void;

  creditAlignment: string;
  setCreditAlignment: (value: string) => void;
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
  font: "gabarito",
  setFont: (value: string) => {
    set(() => ({ font: value }));
  },
  credit: false,
  setCredit: (value: boolean) => {
    set(() => ({ credit: value }));
  },
  creditAlignment: "center",
  setCreditAlignment: (value: string) => {
    set(() => ({ creditAlignment: value }));
  },
}));
