import { FC } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IConversion } from '../../store/slices/types';
import { Row } from './TableRow';

type CollapsibleTableProps = {
  rows: Array<IConversion>;
};

export const CollapsibleTable: FC<CollapsibleTableProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell width={'50'} />
            <TableCell>Дата</TableCell>
            <TableCell>Название валюты</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.baseCurrency} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
