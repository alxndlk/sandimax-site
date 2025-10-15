// store/WallperStatsStore.ts
import { create } from "zustand";

type WallperStatsStoreProps = {
  users: number;
  totalObjects: number;
  networkOut: number;
  fetched: boolean;
  loading: boolean;
  fetchUserStats: () => Promise<void>;
};

export const WallperStatsStore = create<WallperStatsStoreProps>((set, get) => ({
  users: 0,
  totalObjects: 0,
  networkOut: 0,
  fetched: false,
  loading: false,

  fetchUserStats: async () => {
    const { loading } = get();
    if (loading) return;

    set({ loading: true });

    try {
      const res = await fetch(
        "https://arghqft7xo4rbyd6hgpsoztc6i0pabcd.lambda-url.eu-north-1.on.aws/"
      );
      const data = await res.json();

      set({
        users: Number(data.users ?? 0),
        totalObjects: Number(data.totalObjects ?? 0),
        networkOut: Number(data.networkOut ?? 0),
        fetched: true,
      });
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      set({ loading: false });
    }
  },
}));
