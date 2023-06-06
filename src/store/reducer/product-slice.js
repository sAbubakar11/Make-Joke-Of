import { createSlice } from "@reduxjs/toolkit";

const initialState = { product: {}, quotes: [] };

const ProductsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    onAddData(state, action) {
      // console.log(action.payload)
      state.product = action.payload;
    },
  },
  AddQuotes(state, action) {
    state.quotes = action.payload;
  },
});
export default ProductsSlice.reducer;
export const productsAction = ProductsSlice.actions;
