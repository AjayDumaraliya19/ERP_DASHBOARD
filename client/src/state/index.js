import { createSlice } from "@reduxjs/toolkit";

/** The initial state of the global reducer. */
const initialState = {
 mode: "dark",
 userId: "63701cc1f03239b7f700000e",
};

/** Create the global reducer. */
export const globalSlice = createSlice({
 name: "global", // The name of the reducer in the Redux store.
 initialState, // The initial state of the reducer.
 reducers: {
    setMode: (state) => {
      // Switch the mode between 'light' and 'dark'.
      state.mode = state.mode === "light" ? "dark" : "light";
    },
 },
});

/** Export the actions of the global reducer. */
export const { setMode } = globalSlice.actions;

/** Export the reducer itself. */
export default globalSlice.reducer;