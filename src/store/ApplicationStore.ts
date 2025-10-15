import { create } from "zustand";

type ApplicationStore = {
  version: string;
  url: string;
  size: string | number;
  fetched: boolean;
  loading: boolean;
  fetchApplicationData: () => Promise<void>;
};

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  version: "1.0.0",
  url: "",
  size: 0,
  fetched: false,
  loading: false,

  fetchApplicationData: async () => {
    const { fetched, loading } = get();
    if (fetched || loading) return;

    set({ loading: true });

    try {
      const latestRes = await fetch(
        "https://2j25gvoxefynhlflkrael2ubdm0zqcld.lambda-url.eu-north-1.on.aws/"
      );
      const data = await latestRes.json();

      set({
        version: data.version,
        url: data.url,
        size: (data.size / 1024 / 1024).toFixed(2),
        fetched: true,
      });
    } catch (err) {
      console.error("Failed to fetch update metadata:", err);
    } finally {
      set({ loading: false });
    }
  },
}));
