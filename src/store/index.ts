import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currencySlice';

const store = configureStore({
  reducer: {
    currencies: currencyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
