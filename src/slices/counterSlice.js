import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1;
      console.log(action);
    },
    decrease: (state, action) => {
      state.count -= 1;
      console.log(action);
    },
    reset: (state, action) => {
      state.count = 0;
      console.log(action);
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;
