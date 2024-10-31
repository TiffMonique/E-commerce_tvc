import { ProductProps } from '@/app/interfaces/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProductState {
  products: ProductProps[];
}
const initialState:ProductState = {
  products: [],
  
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action : PayloadAction<ProductProps[]>)  {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<ProductProps>) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
