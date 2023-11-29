import { ICurrency } from '../store/slices/types';

export const convertCurrencies = (
  currencies: Array<ICurrency>,
  currentCurrency: string,
) => {
  if (!!currentCurrency) {
    const current = currencies.find(
      (currency) => currency.ID === currentCurrency,
    );

    return currencies.map((currency) => {
      return {
        ...currency,
        Value: Number(
          ((currency.Value / current!.Value) * current!.Nominal).toFixed(4),
        ),
      };
    });
  }

  return currencies;
};

export const getFormattedDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
