import { FC } from 'react';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

import { ICurrency } from '../../store/slices/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCurrentCurrency } from '../../store/slices/selectors';
import { setCurrentCurrency } from '../../store/slices/currencySlice';

type SelectProps = {
  options: Array<ICurrency>;
};

export const SelectComponent: FC<SelectProps> = ({ options }) => {
  const dispatch = useAppDispatch();
  const currentCurrency = useAppSelector(selectCurrentCurrency);

  return (
    <FormControl variant="standard" sx={{ m: 1, width: 200 }}>
      <InputLabel id="select-currancy-label">Базовая валюта</InputLabel>
      <Select
        labelId="select-currancy-label"
        id="select-currancy"
        value={currentCurrency}
        onChange={(e: SelectChangeEvent) =>
          dispatch(setCurrentCurrency(e.target.value))
        }>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.ID} value={option.ID}>
            {option.Name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Выберите базовую валюту</FormHelperText>
    </FormControl>
  );
};
