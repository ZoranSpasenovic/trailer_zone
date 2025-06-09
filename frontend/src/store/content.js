import { create } from "zustand";

export const useContentStore = create((set) => ({
  loading: false,
  contentType: "movie",
  setContentType: (type) => {
    set({ contentType: type });
  },
}));
