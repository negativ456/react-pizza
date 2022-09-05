import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceState, ICartItem } from "./types";

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const find = state.items.find((obj) => obj._id === action.payload._id);
      if (find) {
        find.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.quantity + sum;
      }, 0);
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj._id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.quantity + sum;
      }, 0);
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});
export const { addToCart, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
