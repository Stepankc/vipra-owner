// @mui
import { Container, Divider, Typography, Stack, Button, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
// sections
import { 
  AnalyticsWidgetSummary,
  TotalOfCharges,
  InfoSession,
  BankingBalanceStatistics,
  AppNewInvoice,
} from '../sections/monitoring';

// ----------------------------------------------------------------------

export default function Monitoring() {
  const { themeStretch } = useSettings();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <Page title="Мониторинг">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="baseline" spacing={2}>
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
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />

        <Grid container spacing={3}>
          
          <Grid item xs={12} md={6} lg={8}>
            <TotalOfCharges/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InfoSession/>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <BankingBalanceStatistics/>
          </Grid>
          <Grid item xs={12} lg={7}>
            <AppNewInvoice />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
