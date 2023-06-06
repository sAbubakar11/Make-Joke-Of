import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducer/product-slice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default store;
