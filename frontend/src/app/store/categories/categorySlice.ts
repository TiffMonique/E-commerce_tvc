import { Category } from '@/app/interfaces/categories';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;