import { useContext } from "react";
import { createContext } from "react";
import VWPassatStore from "./vwPassatStore";

interface VWGstore{
    VWPassatStore: VWPassatStore
}

export const vwpstore: VWGstore = {
    VWPassatStore: new VWPassatStore()
}

export const VWPStoreContext = createContext(vwpstore);

export function useVWPStore() {
    return useContext(VWPStoreContext);
}