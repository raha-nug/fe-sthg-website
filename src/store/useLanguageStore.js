import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "id",
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
