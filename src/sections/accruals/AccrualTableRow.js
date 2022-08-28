import PropTypes from 'prop-types';
// @mui
import { TableRow, TableCell } from '@mui/material';

// ----------------------------------------------------------------------

InvoiceTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function InvoiceTableRow({ row, selected, onSelectRow, onViewRow, onDeleteRow }) {

  const { time, summ, typeAccrual } = row;

  return (
    <TableRow hover selected={selected}>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {time}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {summ} руб
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {typeAccrual}
      </TableCell>
      
    </TableRow>
  );
}
