import { configureStore } from "@reduxjs/toolkit";
import { mySlice } from "./slice";

export const store = configureStore({
  reducer: mySlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
