import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {},
  reducers: {
    casheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { casheResults } = searchSlice.actions;
export default searchSlice.reducer;
