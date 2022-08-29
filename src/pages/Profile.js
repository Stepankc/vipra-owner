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
  const [phonevalue, setPhonevalue] = React.useState('+7 (999) 123-45-67');
  const [emailvalue, setEmailvalue] = React.useState('ivan.ivanov@mail.ru');
  const [tinvalue, setTinvalue] = React.useState('1234567890')

  const nameChange = (event) => {
    setNamevalue(event.target.namevalue);
  };

  const phoneChange = (event) => {
    setPhonevalue(event.target.phonevalue);
  };

  const emailChange = (event) => {
    setEmailvalue(event.target.emailvalue);
  };

  const tinChange = (event) => {
    setTinvalue(event.target.tinvalue);
  };

  const [changePersonalData, setChangePersonalData] = React.useState(true)
  const [changePaymentData, setChangePaymentData] = React.useState(true)

  const personalDataOnChange = (event) => {
    setChangePersonalData(false);
  };

  const paymentDataOnChange = (event) => {
    setChangePaymentData(false);
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
            onClick={personalDataOnChange}
          />
        </Box>

        <TextField disabled={changePersonalData} sx={{ pt: 2 }} id="outlined-basic" fullWidth InputProps={{ startAdornment: <InputAdornment position="start">ФИО</InputAdornment> }} value={namevalue} onChange={nameChange} />
        <TextField disabled={changePersonalData} sx={{ pt: 1 }} id="outlined-basic" fullWidth InputProps={{ startAdornment: <InputAdornment position="start">Телефон</InputAdornment> }} value={phonevalue} onChange={phoneChange} />
        <TextField disabled={changePersonalData} sx={{ py: 1 }} id="outlined-basic" fullWidth InputProps={{ startAdornment: <InputAdornment position="start">Email</InputAdornment> }} value={emailvalue} onChange={emailChange} />
        {!changePersonalData && <Button variant="outlined" onClick={setChangePersonalData} fullWidth>Сохранить</Button>}
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
            onClick={paymentDataOnChange}
          />
        </Box>

        <TextField disabled={changePaymentData} sx={{ py: 1, mt: 1 }} id="outlined-basic" fullWidth InputProps={{ startAdornment: <InputAdornment position="start">ИНН</InputAdornment> }} value={tinvalue} onChange={tinChange} />
        {!changePaymentData && <Button variant="outlined" onClick={setChangePaymentData} fullWidth>Сохранить</Button>}

      </Card>
    </React.Fragment>
  )

  const passwordCard = (
    <React.Fragment>
      <Card sx={{ p: 2 }}>
        <Typography variant="h5" color="initial">Пароль</Typography>
        <TextField sx={{ mt: 2 }} id="outlined-basic" label="Новый пароль" variant="outlined" fullWidth />
        <TextField sx={{ mt: 2, mb: 1}} id="outlined-basic" label="Повторить пароль" variant="outlined" fullWidth />
        <Button variant="outlined" fullWidth>Изменить пароль</Button>
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
