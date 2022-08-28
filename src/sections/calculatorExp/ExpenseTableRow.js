import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Checkbox, TableRow, TableCell, MenuItem } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import { TableMoreMenu } from '../../components/table';

// ----------------------------------------------------------------------

InvoiceTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function InvoiceTableRow({ row, selected, onSelectRow,  onDeleteRow }) {

  const { time, summ, typeExpense, typeIncome } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {time}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {summ} руб
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {typeExpense}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {typeIncome}
      </TableCell>
      
      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Удалить
              </MenuItem>

            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
