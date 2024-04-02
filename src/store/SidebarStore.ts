import { create } from "zustand";

export interface IColorPalette {
  backgroundColor: string;
  spacingColor: string;
  titleColor: string;
  textColor: string;
  borderCreditColor: string;
}

export interface IAddColumns {
  addCColumn: boolean;
  addDColumn: boolean;
}


export interface AlignmentStore {
  alignment: string;
  setAlignment: (values: string) => void;

  letters: string;
  setLetters: (value: string) => void;

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

  colorPalette: IColorPalette;
  setColorPalette: (value: IColorPalette) => void;

  AddColumns: IAddColumns;
  setAddColumns: (value: IAddColumns) => void;
}

export const useSidebar = create<AlignmentStore>((set) => ({
  alignment: "flex",
  setAlignment: (values: string) => {
    set(() => ({ alignment: values }));
  },
  letters: "not",
  setLetters: (value: string) => {
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
  colorPalette: {
    backgroundColor: "bg-white",
    spacingColor: "neutral-300",
    titleColor: "text-black",
    textColor: "text-neutral-300",
    borderCreditColor: "border-neutral-300",
  },
  setColorPalette: (value: IColorPalette) => {
    set(() => ({ colorPalette: value }));
  },
  AddColumns: { 
    addCColumn: false,
    addDColumn: false,
  },
  setAddColumns: (value: IAddColumns) => {
    set(() => ({ AddColumns: value }));
  },
}));
