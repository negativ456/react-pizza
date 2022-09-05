import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortItem } from "../../components/HomePage/Sort";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  categoryId: 0,
  page: 1,
  search: "",
  sortOp: {
    name: "популярности",
    value: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSortOp(state, action: PayloadAction<SortItem>) {
      state.sortOp = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.sortOp = action.payload.sortOp;
      state.page = Number(action.payload.page);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const {
  setCategoryId,
  setSortOp,
  setCurrentPage,
  setFilters,
  setSearch,
} = filterSlice.actions;

export default filterSlice.reducer;
