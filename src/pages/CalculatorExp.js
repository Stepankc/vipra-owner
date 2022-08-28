import * as React from "react";
// @mui
import {
  Container,
  Typography,
  Divider,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import TotalCard from "../sections/calculatorExp/TotalCard";
import ExpenseTable from "../sections/calculatorExp/ExpenseTable"
import IncomeExpenseChart from "../sections/calculatorExp/IncomeExpenseChart"

//mock
import { _totalSum } from "src/_mock";

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  const [firstDate, setFirstDate] = React.useState(null);

  return (
    <Page title="Калькулятор расходов">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4" component="h1" paragraph>
          Калькулятор расходов
        </Typography>
        <Divider sx={{ bgcolor: "black", mb: 2 }} />
        <Grid container spacing={2} >
          {/* left side */}
          <Grid item xs={12} md={7} lg={7}>
            <Grid container gap={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Button variant="contained">Добавить Расходы</Button>
              </Grid>
              <Grid item xs={12} md={3.5} lg={3.5}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Период"
                    value={firstDate}
                    onChange={(newValue) => {
                      setFirstDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} sx={{width: '100%'}} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={3.5} lg={3.5}>
                <TextField variant="outlined" label="Название" fullWidth />
              </Grid>
              <Grid item xs={12} md={3.5} lg={3.5}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue=""
                  >
                    <MenuItem value={1}>Энергозатраты</MenuItem>
                    <MenuItem value={2}>Аренда</MenuItem>
                    <MenuItem value={3}>Ремон</MenuItem>
                    <MenuItem value={4}>Обслуживание</MenuItem>
                    <MenuItem value={5}>Бесплатные зарядки</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <ExpenseTable />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <IncomeExpenseChart />
              </Grid>
            </Grid>
          </Grid>
          {/* left side end */}
          {/* right side */}
          <Grid item xs={12} md={5} lg={5}>
            <TotalCard total={_totalSum} />
          </Grid>
          {/* right side end */}
        </Grid>
      </Container>
    </Page>
  );
}
