import { FC } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { ICurrency } from '../../store/slices/types';
import { useAppDispatch } from '../../hooks';
import { toggleFavoriteCurrency } from '../../store/slices/currencySlice';

type TableProps = {
  rows: Array<ICurrency>;
  favorite: Array<string>;
};

export const TableComponent: FC<TableProps> = ({ rows, favorite }) => {
  const dispatch = useAppDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {!!favorite.length && <TableCell>Избранное</TableCell>}
            <TableCell>Валюта</TableCell>
            <TableCell align="right">Единиц</TableCell>
            <TableCell align="right">Буквенный код</TableCell>
            <TableCell align="right">Курс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {!!favorite.length && (
                <TableCell style={{ color: '#999' }}>
                  {
                    <Stack
                      maxWidth={'content'}
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(toggleFavoriteCurrency(row.ID))}>
                      {favorite.includes(row.ID) ? (
                        <StarIcon />
                      ) : (
                        <StarBorderIcon />
                      )}
                    </Stack>
                  }
                </TableCell>
              )}
              <TableCell>{row.Name}</TableCell>
              <TableCell align="right">{row.Nominal}</TableCell>
              <TableCell align="right">{row.CharCode}</TableCell>
              <TableCell align="right">{row.Value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
