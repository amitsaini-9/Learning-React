import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchingStatusSlice from "./fetchStatusSlice";

const myStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchingStatus: fetchingStatusSlice.reducer,
  },
});

export default myStore;
