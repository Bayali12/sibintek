import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IConversion, ICurrenciesState, ICurrency } from './types';
import { BASE_URL } from '../../shared/constants';

export const fetchCurrencies = createAsyncThunk<Array<ICurrency>>(
  'currency/fetchCurrencies',
  async () => {
    const response = await axios.get(BASE_URL);
    return Object.values(response.data.Valute);
  },
);

const favoriteCurrencies =
  JSON.parse(localStorage.getItem('favoriteCurrencies')!) || [];

const conversionHistory =
  JSON.parse(localStorage.getItem('conversionHistory')!) || [];

const initialState: ICurrenciesState = {
  data: [],
  currentCurrency: '',
  favoriteCurrencies: favoriteCurrencies,
  conversionHistory: conversionHistory,
  loading: 'idle',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrentCurrency: (state, action: PayloadAction<string>) => {
      state.currentCurrency = action.payload;
    },

    toggleFavoriteCurrency: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.favoriteCurrencies.indexOf(id);
      if (index !== -1) {
        state.favoriteCurrencies.splice(index, 1);
      } else {
        state.favoriteCurrencies.push(id);
      }
      localStorage.setItem(
        'favoriteCurrencies',
        JSON.stringify(state.favoriteCurrencies),
      );
    },

    saveСonversion: (state, action: PayloadAction<IConversion>) => {
      state.conversionHistory.push(action.payload);
      localStorage.setItem(
        'conversionHistory',
        JSON.stringify(state.conversionHistory),
      );
    },

    clearConversionHistory: (state) => {
      state.conversionHistory = [];
      localStorage.removeItem('conversionHistory');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.loading = 'pending';
      })

      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.loading = 'successed';
        state.data = action.payload;
      })

      .addCase(fetchCurrencies.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export default currencySlice.reducer;
export const {
  setCurrentCurrency,
  toggleFavoriteCurrency,
  saveСonversion,
  clearConversionHistory,
} = currencySlice.actions;
