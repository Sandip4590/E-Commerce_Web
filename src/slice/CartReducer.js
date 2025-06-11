import { createSlice } from "@reduxjs/toolkit";

export const CartReducer = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    Add: (state, action) => {
      state.push(action.payload);
    },
    Remove: (state , action) => {
      return state.filter((p) => p.id !== action.payload.id)
    },
    InitCart: () => {
      return  []; 
    },
  },
});

export const { Add, Remove , InitCart } = CartReducer.actions;

export default CartReducer.reducer;
