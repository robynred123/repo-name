import { create } from "zustand";

export type ZustandState = {
  colourOneZustand: string;
  colourTwoZustand: string;
  colourThreeZustand: string;
  setColourOneZustand: (colour: string) => void;
  setColourTwoZustand: (colour: string) => void;
  setColourThreeZustand: (colour: string) => void;
};

export const useZustandStore = create<ZustandState>()((set) => ({
  colourOneZustand: "#11ff00",
  colourTwoZustand: "#ff00ee",
  colourThreeZustand: "#0015ff",
  setColourOneZustand: (colour: string) =>
    set(() => ({ colourOneZustand: colour })),
  setColourTwoZustand: (colour: string) =>
    set(() => ({ colourTwoZustand: colour })),
  setColourThreeZustand: (colour: string) =>
    set(() => ({ colourThreeZustand: colour })),
}));
