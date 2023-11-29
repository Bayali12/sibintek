import { useState } from 'react';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { IConversion } from '../../store/slices/types';
import { TableComponent } from '../Table';

type RowProps = {
  row: IConversion;
};

export const Row: React.FC<RowProps> = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        sx={{ '& > *': { borderBottom: '0' } }}
        style={{ backgroundColor: '#fafafa' }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.date.toString()}</TableCell>
        <TableCell>{row.baseCurrency}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableComponent rows={row.currencies} favorite={[]} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
