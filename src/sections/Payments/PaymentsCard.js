// @mui
import { Card, Grid, Typography } from '@mui/material';
// ----------------------------------------------------------------------

export default function BalanceCard(props) {
  return (
    <Card sx={{py:5}}>
      <Grid container>
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} xs={12} md={12} lg={12}>
        <Typography variant='h6' component='h1'>Итого выплат:</Typography>
        <Typography variant='h6' component='h1'>{props.payment} руб.</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
