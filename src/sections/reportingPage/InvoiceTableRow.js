import PropTypes from "prop-types";
// @mui
import { TableRow, TableCell } from "@mui/material";

// ----------------------------------------------------------------------

InvoiceTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function InvoiceTableRow({ row, selected }) {
  const { nameStation, name, status, sumCharge, earnMoney } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell align="left" sx={{ textTransform: "capitalize" }}>
        {nameStation}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: "capitalize" }}>
        {name}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: "capitalize" }}>
        {status}
      </TableCell>

      <TableCell align="center" sx={{ textTransform: "capitalize" }}>
        {sumCharge}
      </TableCell>

      <TableCell align="center" sx={{ textTransform: "capitalize" }}>
        {earnMoney}
      </TableCell>
    </TableRow>
  );
}
