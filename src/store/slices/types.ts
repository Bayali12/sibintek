export interface ICurrency {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}

export interface IConversion {
  date: string;
  baseCurrency: string;
  currencies: Array<ICurrency>;
}

export interface ICurrenciesState {
  data: Array<ICurrency>;
  currentCurrency: string;
  favoriteCurrencies: Array<string>;
  loading: 'idle' | 'pending' | 'successed' | 'failed';
  conversionHistory: Array<IConversion>;
}
