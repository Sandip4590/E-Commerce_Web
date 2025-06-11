import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./slice/CartReducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer.reducer,
  },
});

export default store