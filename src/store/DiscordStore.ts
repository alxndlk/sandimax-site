import { create } from "zustand";
import { socialLinks } from "../lib/nav";
import { config } from "@/config";

type DiscordStore = {
  online_count: number;
  member_count: number;
  fetched: boolean;
  loading: boolean;
  fetchDiscordStatus: () => Promise<void>;
};

export const useDiscordStore = create<DiscordStore>((set, get) => ({
  online_count: 0,
  member_count: 0,
  fetched: false,
  loading: false,

  fetchDiscordStatus: async () => {
    const { fetched, loading } = get();
    if (fetched || loading) return;

    set({ loading: true });

    try {
      const url = `/api/discord-status?invite=${encodeURIComponent(socialLinks.discord.href)}`;
      const res = await fetch(url, { cache: "no-store" });
      const json = await res.json();
      if (config.debug) console.log("Discord status fetched:", json);

      set({
        online_count: json.online_count,
        member_count: json.member_count,
        fetched: true,
        loading: false,
      });
    } catch (err) {
      console.error("Failed to fetch discord status:", err);
    } finally {
      set({ loading: false });
    }
  },
}));
