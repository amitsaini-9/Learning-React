import { createSlice } from "@reduxjs/toolkit";

const fetchingStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Directly modify the state
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingDone: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchingStatusSlice.actions;
export default fetchingStatusSlice;
