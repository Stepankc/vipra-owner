// @mui
import {
  Container,
  Divider,
  Typography,
  Stack,
  Button,
  Grid,
} from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
// sections
import {
  TotalOfCharges,
  MonitoringStantionsComponent1,
  MonitoringStantionsComponent2,
  MonitoringStateComponent,
  NetworkStatus,
  Booked,
  Broken,
  Offline,
  Online,
  OnlineWaiting
} from "../sections/monitoring";

// ----------------------------------------------------------------------

export default function Monitoring() {
  const { themeStretch } = useSettings();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  return (
    <Page title="Мониторинг">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
        >
          <Typography variant="h3" component="h1" paragraph>
            Мониторинг
          </Typography>
          <Typography variant="body1" paragraph>
            сегодня: {date}
            <Button sx={{ ml: 1 }} variant="contained">
              Обновить данные
            </Button>
          </Typography>
        </Stack>
        <Divider sx={{ bgcolor: "black", mb: 2 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <TotalOfCharges />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={2}>
              <MonitoringStantionsComponent1 />
              <MonitoringStantionsComponent2 />
            </Stack>
          </Grid>
          <Grid item container spacing={1} lg={8}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <NetworkStatus />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Booked />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Broken />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Offline />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Online />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <OnlineWaiting />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <NetworkStatus />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <NetworkStatus />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <NetworkStatus />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <MonitoringStateComponent />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
