// @mui
import { Container, Typography, Divider, Grid } from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import PaymentsTable from "../sections/Payments/PaymentsTable";
import PaymentsChart from "../sections/Payments/PaymentsChart";
import PaymentsCard from "../sections/Payments/PaymentsCard";

//mock
import { _pay } from "src/_mock";

// ----------------------------------------------------------------------

export default function Payments() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Выплаты">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4" component="h1" paragraph>
          Выплаты
        </Typography>
        <Divider sx={{ bgcolor: "black", mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container gap={2}>
              <Grid item xs={12} md={12} lg={12}>
                <PaymentsTable />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <PaymentsChart />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <PaymentsCard payment={_pay.payment}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
