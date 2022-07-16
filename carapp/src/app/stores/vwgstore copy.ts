import { useContext } from "react";
import { createContext } from "react";
import VWGolfStore from "./vwGolfStore";

interface VWGstore{
    VWGolfStore: VWGolfStore
}

export const vwgstore: VWGstore = {
    VWGolfStore: new VWGolfStore()
}

export const VWGStoreContext = createContext(vwgstore);

export function useVWGStore() {
    return useContext(VWGStoreContext);
}