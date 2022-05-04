import { useContext } from "react";
import { createContext } from "react";
import ContactStore from "./contactStore";

interface CUstore{
    contactStore: ContactStore
}

export const custore: CUstore = {
    contactStore: new ContactStore()
}

export const CUStoreContext = createContext(custore);

export function useCUStore() {
    return useContext(CUStoreContext);
}