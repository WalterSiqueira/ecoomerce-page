import { configureStore } from "@reduxjs/toolkit";
import { quantityReducer } from "./products-quantity/cartSlice";
export const store = configureStore({
    reducer: {
        quantity: quantityReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;