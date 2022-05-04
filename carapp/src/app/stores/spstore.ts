import { useContext } from "react";
import { createContext } from "react";
import SalespersonStore from "./salespersonStore";

interface SPstore{
    salespersonStore: SalespersonStore
}

export const spstore: SPstore = {
    salespersonStore: new SalespersonStore()
}

export const SPStoreContext = createContext(spstore);

export function useSPStore() {
    return useContext(SPStoreContext);
}