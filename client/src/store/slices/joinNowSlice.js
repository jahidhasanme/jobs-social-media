import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "joinNow",
  initialState: false,
  reducers: {
    isJoinNowOpen(state, action) {
      if (action.payload === "openJoinNow") {
        return true;
      } else if (action.payload === "closeJoinNow") {
        return false;
      }
    },
  },
});

export default slice.reducer;
export const { isJoinNowOpen } = slice.actions;
