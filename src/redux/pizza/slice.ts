import { createSlice } from "@reduxjs/toolkit";
import { PizzaSliceState, Status } from "./types";
import { fetchPizza } from "./asyncActions";

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});
export default pizzaSlice.reducer;
