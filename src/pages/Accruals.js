// @mui
import { Container, Typography, Divider, Grid } from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import ExpenseTable from "../sections/accruals/AccrualTable";
import AccrualChart from "../sections/accruals/AccrualChart";
import BalanceCard from "../sections/accruals/BalanceCard";

//mock
import { _pay } from "src/_mock";

// ----------------------------------------------------------------------

export default function Accrual() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Начисления">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4" component="h1" paragraph>
          Начисления
        </Typography>
        <Divider sx={{ bgcolor: "black", mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container gap={2}>
              <Grid item xs={12} md={12} lg={12}>
                <ExpenseTable />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <AccrualChart />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <BalanceCard balance={_pay.balance}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
