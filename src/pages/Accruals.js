// @mui
import { Container, Typography, Divider, Grid } from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import ExpenseTable from "../sections/accruals/AccrualTable"

// ----------------------------------------------------------------------

export default function PageTwo() {
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
        <ExpenseTable />
        </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
