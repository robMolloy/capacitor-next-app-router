import { create } from "zustand";

const useInitTestStore = create<{
  data: number;
  setData: (x: number) => void;
  increment: (i?: number) => void;
}>()((set, get) => ({
  data: 1,
  setData: (data) => set(() => ({ data })),
  increment: (i = 1) => set(() => ({ data: get().data + i })),
}));

export const useTestStore = () => {
  const initTestStore = useInitTestStore();

  return initTestStore;
};
