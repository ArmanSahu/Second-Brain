import { create } from "zustand";

type ShareStoreType = {
    shareLink: string,
    setShareLink: (value:string) => void;
}
export const useShareStore = create<ShareStoreType>((set) => ({
    shareLink: "",
    setShareLink: (value:string) => set({shareLink: value})
}))