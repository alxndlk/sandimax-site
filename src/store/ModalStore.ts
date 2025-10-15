// store/ModalStore.ts
import { create } from "zustand";

type ModalType = "license" | "videos" | "details" | null;

type ModalStore = {
  isOpen: boolean;
  modalType: ModalType;
  open: (type: ModalType) => void;
  close: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalType: null,
  open: (type) => set({ isOpen: true, modalType: type }),
  close: () => set({ isOpen: false, modalType: null }),
}));
