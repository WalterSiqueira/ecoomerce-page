import { createSlice } from "@reduxjs/toolkit";

export interface quantity {
  productQuantity: {
    value: number;
  };
}

const initialState = {
  productQuantity: {
    value: 15
  },
};

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    incrementQuantity: (state) => {
      state.productQuantity.value += 1
    },
    decrementQuantity: (state) => {
      state.productQuantity.value -= 1
    },
  }
})

export const {incrementQuantity, decrementQuantity} = quantitySlice.actions;
export const quantityReducer = quantitySlice.reducer;