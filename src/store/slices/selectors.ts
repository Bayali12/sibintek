import { RootState } from '..';

export const selectAllCurrencies = (state: RootState) => state.currencies.data;

export const selectCurrentCurrency = (state: RootState) =>
  state.currencies.currentCurrency;

export const selectFavoriteCurrencies = (state: RootState) =>
  state.currencies.favoriteCurrencies;

export const selectCurrentCurrencyName = (state: RootState) =>
  state.currencies.data.find(
    (currency) => currency.ID === state.currencies.currentCurrency,
  )?.Name;

export const selectConversionHistory = (state: RootState) =>
  state.currencies.conversionHistory;

export const selectLoading = (state: RootState) => state.currencies.loading;
