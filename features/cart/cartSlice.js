import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
     name: "cart",
     initialState: {
          items: [],
          restaurantName: ""
     },
     reducers: {
          addToCart: (state, action) => {
               state.items = [...state.items, action.payload];
               state.restaurantName = action.payload;
          }
     }
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state) => state.user.items;
export const selectRestaurantName = (state) => state.user.restaurantName;

export default cartSlice.reducer;