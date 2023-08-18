import { configureStore } from '@reduxjs/toolkit';
import { AppApi } from './apis/AppApi';

export const store = configureStore({
  reducer: {
    [AppApi.reducerPath]: AppApi.reducer
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(AppApi.middleware)
  }
})

