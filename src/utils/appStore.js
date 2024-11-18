import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../compoenents/CartSlice"

const appStore = configureStore({
  
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
