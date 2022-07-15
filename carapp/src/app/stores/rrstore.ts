import { useContext } from "react";
import { createContext } from "react";
import RollsRoyceStore from "./rollsroyceStore";

interface RRstore{
    RollsRoyceStore: RollsRoyceStore
}

export const rrstore: RRstore = {
    RollsRoyceStore: new RollsRoyceStore()
}

export const RRStoreContext = createContext(rrstore);

export function useRRStore() {
    return useContext(RRStoreContext);
}