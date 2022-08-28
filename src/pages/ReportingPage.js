import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// @mui
import {
  Container,
  Typography,
  Divider,
  Box,
  Card,
  Table,
  Tooltip,
  TableBody,
  IconButton,
  TableContainer,
  TablePagination,
  Grid,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../routes/paths';

// hooks
import useSettings from '../hooks/useSettings';
import useTabs from '../hooks/useTabs';
import useTable, { getComparator, emptyRows } from '../hooks/useTable';
// _mock_
import { _invoices } from '../_mock';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import Scrollbar from '../components/Scrollbar';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../components/table';
// sections
import CheckStats from '../sections/statistics/CheckStats';
import { InvoiceTableRow } from '../sections/charging/list';
import { CountEnergy, CountMoney, InfoConnect, CountSession } from '../sections/reportingPage';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'invoiceNumber', label: 'Client', align: 'left' },
  { id: 'createDate', label: 'Create', align: 'left' },
  { id: 'dueDate', label: 'Due', align: 'left' },
  { id: 'price', label: 'Amount', align: 'center', width: 140 },
  { id: 'sent', label: 'Sent', align: 'center', width: 140 },
  { id: 'status', label: 'Status', align: 'left' },
  { id: '' },
];

export default function UserCreate() {
  const { themeStretch } = useSettings();

  const navigate = useNavigate();

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState(_invoices);

  const [filterName] = useState('');

  const [filterService] = useState('all');

  const { currentTab: filterStatus } = useTabs('all');

  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = tableData.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const handleEditRow = (id) => {
    navigate(PATH_DASHBOARD.invoice.edit(id));
  };

  const handleViewRow = (id) => {
    navigate(PATH_DASHBOARD.invoice.view(id));
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterService,
    filterStatus,
  });

  const denseHeight = dense ? 56 : 76;

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterStatus) ||
    (!dataFiltered.length && !!filterService);

  const { pathname } = useLocation();

  return (
    <Page title="Отчётность">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Отчётность
        </Typography>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />
        <Typography variant="h6" component="h3" paragraph>
          Для просмотра статистики, выберите нужные фильтры
        </Typography>
        <CheckStats/>
        <Divider sx={{ bgcolor: 'black', mb: 2, mt: 2 }} />
        <Typography variant="h6" component="h3" paragraph>
          Аналитика
        </Typography>
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={tableData.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                  actions={
                    <Tooltip title="Delete">
                      <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                        <Iconify icon={'eva:trash-2-outline'} />
                      </IconButton>
                    </Tooltip>
                  }
                />
              )}

              <Table size={'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <InvoiceTableRow
                      key={row.id}
                      row={row}
                      selected={selected.includes(row.id)}
                      onSelectRow={() => onSelectRow(row.id)}
                      onViewRow={() => handleViewRow(row.id)}
                      onEditRow={() => handleEditRow(row.id)}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                    />
                  ))}

                  <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              labelRowsPerPage={'показывать'}
              component="div"
              count={dataFiltered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />
          </Box>
        </Card>
        <Grid container spacing={1} mt={2}>
        <Grid item xs={12} sm={4} md={4}>
          <CountEnergy />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CountMoney />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CountSession />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <InfoConnect />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CountEnergy />
        </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

function applySortFilter({
  tableData,
  comparator,
  filterName,
  filterStatus,
  filterService,
  filterStartDate,
  filterEndDate,
}) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter(
      (item) =>
        item.invoiceNumber.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.invoiceTo.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    tableData = tableData.filter((item) => item.status === filterStatus);
  }

  if (filterService !== 'all') {
    tableData = tableData.filter((item) => item.items.some((c) => c.service === filterService));
  }

  if (filterStartDate && filterEndDate) {
    tableData = tableData.filter(
      (item) =>
        item.createDate.getTime() >= filterStartDate.getTime() && item.createDate.getTime() <= filterEndDate.getTime()
    );
  }

  return tableData;
}
