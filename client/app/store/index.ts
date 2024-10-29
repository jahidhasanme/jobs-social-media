import { configureStore } from "@reduxjs/toolkit";
import joinNowReducer from "@/app/store/slices/joinNowSlice";

export const store = configureStore({
  reducer: {
    joinNow: joinNowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
