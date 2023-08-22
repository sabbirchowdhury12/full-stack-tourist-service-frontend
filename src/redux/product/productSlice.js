import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const filterCategory = state.products.filter(
        (product) => product.categoryName !== action.payload.categoryName
      );

      if (filterCategory) {
        const products = {
          id: action.payload.id,
          categoryName: action.payload.categoryName,
        };
        state.products = [...filterCategory, products];
      }
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, clearCart } = productSlice.actions;

export default productSlice.reducer;
