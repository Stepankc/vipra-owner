// @mui
import { Container, Typography, Divider, Grid } from "@mui/material";
// routes

// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import {
  CountEnergy,
  CountMoney,
  InfoConnect,
  CountSession,
  CheckStats,
} from "../sections/reportingPage";

import InvoiceTable from "../sections/reportingPage/InvoiceTable"

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Отчётность">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h3" component="h1" paragraph>
          Отчётность
        </Typography>
        <Divider sx={{ bgcolor: "black", mb: 2 }} />
        <Typography variant="h6" component="h3" paragraph>
          Для просмотра статистики, выберите нужные фильтры
        </Typography>
        <CheckStats />
        <Divider sx={{ bgcolor: "black", mb: 2, mt: 2 }} />
        <Typography variant="h6" component="h3" paragraph>
          Аналитика
        </Typography>
        <InvoiceTable />
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
