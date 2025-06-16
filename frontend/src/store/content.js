import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useContentStore = create(
  persist(
    (set) => ({
      loading: false,
      contentType: "movie",
      setContentType: (type) => {
        set({ contentType: type });
      },
    }),
    {
      name: "content-storage",
      partialize: (state) => ({ contentType: state.contentType }),
    }
  )
);
