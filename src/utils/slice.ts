import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "mySlice",
  initialState: {
    spokenText: "",
  },
  reducers: {
    setSpokenText2: (state, action) => {
      state.spokenText = action.payload;
    },
  },
});

export const { setSpokenText2 } = mySlice.actions;
