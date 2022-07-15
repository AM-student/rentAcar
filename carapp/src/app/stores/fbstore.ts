import { useContext } from "react";
import { createContext } from "react";
import FeedbackStore from "./feedbackStore";

interface FBstore{
    feedbackStore: FeedbackStore
}

export const fbstore: FBstore = {
    feedbackStore: new FeedbackStore()
}

export const FBStoreContext = createContext(fbstore);

export function useFBStore() {
    return useContext(FBStoreContext);
}