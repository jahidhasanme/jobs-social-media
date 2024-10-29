import { configureStore } from "@reduxjs/toolkit";
import joinNowReducer from "@/app/store/slices/joinNowSlice";

export const store = configureStore({
  reducer: {
    joinNow: joinNowReducer,
  },
});
