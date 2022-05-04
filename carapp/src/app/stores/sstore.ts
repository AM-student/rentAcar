import { useContext } from "react";
import { createContext } from "react";
import SecurityStore from "./securityStore";

interface Mstore{
    SecurityStore: SecurityStore
}

export const sstore: Mstore = {
    SecurityStore: new SecurityStore()
}

export const MStoreContext = createContext(sstore);

export function useSStore() {
    return useContext(MStoreContext);
}