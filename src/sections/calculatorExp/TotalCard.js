// @mui
import { Card, Grid, Typography } from '@mui/material';
// ----------------------------------------------------------------------

export default function TotalCard(props) {

  return (
    <Card sx={{p:2}}>
      <Grid container  rowGap={5} spacing={2}>
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} xs={6} md={6} lg={6}>
        <Typography variant='h6' component='h1'>Итого доходов:</Typography>
        <Typography variant='h6' component='h1'>{props.total.income} руб.</Typography>
        </Grid>
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} xs={6} md={6} lg={6}>
        <Typography variant='h6' component='h1'>Итого расходов:</Typography>
        <Typography variant='h6' component='h1'>{props.total.expense} руб.</Typography>
        </Grid>
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} xs={6} md={6} lg={6}>
        <Typography variant='h6' component='h1'>Итого:</Typography>
        <Typography variant='h6' component='h1'>{props.total.income-props.total.expense} руб.</Typography>
        </Grid>
      </Grid>
    </Card>
  );
} 
