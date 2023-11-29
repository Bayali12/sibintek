import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import { CollapsibleTable } from '../../components/CollapseTable';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectConversionHistory } from '../../store/slices/selectors';
import { clearConversionHistory } from '../../store/slices/currencySlice';

export const History = () => {
  const dispatch = useAppDispatch();
  const conversionHistory = useAppSelector(selectConversionHistory);

  return (
    <>
      <Stack spacing={2} direction="row" alignItems={'center'} marginBottom={2}>
        <Link to="/">На главную</Link>
        <Button
          size="small"
          variant="outlined"
          onClick={() => dispatch(clearConversionHistory())}>
          Очистить историю
        </Button>
      </Stack>

      {conversionHistory.length ? (
        <CollapsibleTable rows={conversionHistory} />
      ) : (
        <Typography typography="h6" align="center">
          Похоже у вас нет сохраненных конвертаций валют...
        </Typography>
      )}
    </>
  );
};
