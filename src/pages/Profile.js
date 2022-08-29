// @mui
import { Container, Typography, Divider, Grid, Card, Box, Button, TextField, InputAdornment } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import React from 'react';
import { Icon } from "@iconify/react";
// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  const [namevalue, setNamevalue] = React.useState('Иванов Иван Иванович');

  const nameChange = (event) => {
    setNamevalue(event.target.namevalue);
  };


  const personalCard = (
    <React.Fragment>
      <Card sx={{ p: 2 }}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant="h5" color="initial">Личные данные</Typography>
          <Icon
            icon="fa6-regular:pen-to-square"
            width="24"
            height="24"
            cursor="pointer"
          />
        </Box>

        <TextField id="outlined-basic" fullWidth InputProps={{startAdornment: <InputAdornment position="start">ФИО</InputAdornment>}} value={namevalue} onChange={nameChange}/>

      </Card>
    </React.Fragment>
  )

  const paymentCard = (
    <React.Fragment>
      <Card sx={{ p: 2 }}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant="h5" color="initial">Платежные данные</Typography>
          <Icon
            icon="fa6-regular:pen-to-square"
            width="24"
            height="24"
            cursor="pointer"
          />
        </Box>


      </Card>
    </React.Fragment>
  )

  const passwordCard = (
    <React.Fragment>
      <Card sx={{ p: 2 }}>
        <Typography variant="h5" color="initial">Пароль</Typography>


      </Card>
    </React.Fragment>
  )

  return (
    <Page title="Профиль">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Настройки профиля
        </Typography>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            {personalCard}
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            {paymentCard}
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            {passwordCard}
          </Grid>
        </Grid>

      </Container>
    </Page>
  );
}
