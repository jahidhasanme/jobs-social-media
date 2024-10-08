import { configureStore } from "@reduxjs/toolkit";
import joinNowReducer from "./slices/joinNowSlice";

export const store = configureStore({
  reducer: {
    joinNow: joinNowReducer,
  },
});
