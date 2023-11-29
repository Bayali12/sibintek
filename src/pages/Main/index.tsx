import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import {
  fetchCurrencies,
  saveСonversion,
} from '../../store/slices/currencySlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectComponent } from '../../components/Select';
import { TableComponent } from '../../components/Table';
import * as selectors from '../../store/slices/selectors';
import { convertCurrencies, getFormattedDate } from '../../helpers';

export const Main = () => {
  const dispatch = useAppDispatch();

  const currencies = useAppSelector(selectors.selectAllCurrencies);
  const favoriteCurrencies = useAppSelector(selectors.selectFavoriteCurrencies);
  const currentCurrencyId = useAppSelector(selectors.selectCurrentCurrency);
  const currentCurrencyName = useAppSelector(
    selectors.selectCurrentCurrencyName,
  );
  const loading = useAppSelector(selectors.selectLoading);

  const convertedСurrencies = convertCurrencies(currencies, currentCurrencyId);

  const onSaveСonversion = () => {
    if (!currentCurrencyName) {
      alert('Выберите валюту для конвертации');
      return;
    }

    const date = getFormattedDate(new Date());

    dispatch(
      saveСonversion({
        date,
        baseCurrency: currentCurrencyName,
        currencies: convertedСurrencies,
      }),
    );
  };

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <>
      <Stack spacing={2} direction="row" alignItems={'center'} marginBottom={2}>
        <SelectComponent options={currencies} />
        <Button
          size="small"
          variant="outlined"
          onClick={() => onSaveСonversion()}>
          Сохранить
        </Button>
        <Link to="/history">История конвертаций</Link>
      </Stack>

      <TableComponent
        rows={convertedСurrencies}
        favorite={favoriteCurrencies}
      />

      {loading === 'failed' && (
        <Typography typography="h6" align="center">
          Возникла ошибка при загрузке валют
        </Typography>
      )}
    </>
  );
};
