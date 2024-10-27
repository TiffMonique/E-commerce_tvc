import { AddProductProps } from '@/app/interfaces/addProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProductState {
  products: AddProductProps[];
}
const initialState:ProductState = {
  products: [],
  
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action : PayloadAction<AddProductProps[]>)  {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<AddProductProps>) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
