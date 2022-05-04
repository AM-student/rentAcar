import { useContext } from "react";
import { createContext } from "react";
import ManagerStore from "./managerStore";

interface Mstore{
    ManagerStore: ManagerStore
}

export const mstore: Mstore = {
    ManagerStore: new ManagerStore()
}

export const MStoreContext = createContext(mstore);

export function useMStore() {
    return useContext(MStoreContext);
}