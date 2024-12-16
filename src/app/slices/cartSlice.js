import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart:(state, action) => {
      const isFound = state.cartProducts.findIndex(item => item.id == action.payload.id)
      if(isFound != -1) {
        state.cartProducts[isFound].quantity += 1
      } else {      
        state.cartProducts.push(action.payload)
      }
    },
    removeCart: (state, action) => {
      // Filter out the item with the matching id
      state.cartProducts = state.cartProducts.filter(
        item => item.id !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.cartProducts.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartProducts.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
})

export const { addCart } = cartSlice.actions;
export const { removeCart } = cartSlice.actions;
export const { incrementQuantity } = cartSlice.actions;
export const { decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
