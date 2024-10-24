import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './orders/orderSlice';
import productSlice from './products/productSlice';
import { api } from './api/api';

export const store = configureStore({
  reducer: {
   product: productSlice,
    order: orderSlice,
    [api.reducerPath]: api.reducer, 
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
