import { create } from "zustand";

type VideoStore = {
  totalSize: number;
  totalItems: number;
  fetched: boolean;
  loading: boolean;
  fetchTotalSize: () => Promise<void>;
  fetchTotalItems: () => Promise<void>;
};

export const useVideoStore = create<VideoStore>((set, get) => ({
  totalSize: 0,
  totalItems: 0,
  fetched: false,
  loading: false,
  fetchTotalSize: async () => {
    if (get().fetched || get().loading) return;

    set({ loading: true });

    try {
      const res = await fetch("/api/bucketsStatus");
      const data = await res.json();
      set({
        totalSize: data.totalSizeInGB,
        fetched: true,
      });
    } catch (err) {
      console.error("Failed to fetch total size", err);
    } finally {
      set({ loading: false });
    }
  },
  fetchTotalItems: async () => {
    if (get().fetched || get().loading) return;

    set({ loading: true });

    try {
      const res = await fetch("/api/bucketsStatus");
      const data = await res.json();
      set({
        totalItems: data.totalVideos,
        fetched: true,
      });
    } catch (err) {
      console.error("Failed to fetch total size", err);
    } finally {
      set({ loading: false });
    }
  },
}));
