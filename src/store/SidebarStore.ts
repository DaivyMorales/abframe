import { create } from "zustand";

export interface AlignmentStore {
  alignment: string;
  setAlignment: (values: string) => void;
}

export const useSidebar = create<AlignmentStore>((set) => ({
  alignment: "",
  setAlignment: (values: string) => {
    set(() => ({ alignment: values }));
  },
}));
