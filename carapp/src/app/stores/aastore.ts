import { useContext } from "react";
import { createContext } from "react";
import AudiAStore from "./audiAStore";

interface AAstore{
    AudiAStore: AudiAStore
}

export const aastore: AAstore = {
    AudiAStore: new AudiAStore()
}

export const AAStoreContext = createContext(aastore);

export function useAAStore() {
    return useContext(AAStoreContext);
}