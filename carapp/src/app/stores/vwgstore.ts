import { useContext } from "react";
import { createContext } from "react";
import VWGolfStore from "./vwGolfStore";

interface VWGStore{
    VWGolfStore: VWGolfStore
}

export const vwgstore: VWGStore = {
    VWGolfStore: new VWGolfStore()
}

export const VWGStoreContext = createContext(vwgstore);

export function useVWGStore() {
    return useContext(VWGStoreContext);
}