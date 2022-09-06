import React from "react";
// @mui
import {
  Container,
  Divider,
  Typography,
  Stack,
  Button,
  Grid,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Card,
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
} from "../sections/monitoring";

// ----------------------------------------------------------------------

export default function Monitoring() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { themeStretch } = useSettings();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;


  const [networkstatus, setNetworkstatus] = React.useState(true);
  const handleNetworkstatus = () => setNetworkstatus(!networkstatus);

  const [booked, setBooked] = React.useState(true);
  const handleBooked = () => setBooked(!booked);

  const [broken, setBroken] = React.useState(true);
  const handleBroken = () => setBroken(!broken);

  const [offline, setOffline] = React.useState(false);
  const handleOffline = () => setOffline(!offline);

  const [online, setOnline] = React.useState(false);
  const handleOnline = () => setOnline(!online);



  return (
    <Page title="Мониторинг">

      <Container maxWidth={themeStretch ? false : "xl"}>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Выбрать показатель
            </Typography>
            <Box>
              <FormGroup>
                <FormControlLabel value={'NetworkStatus'} control={<Checkbox />} label="Число занятых станций" checked={networkstatus} onClick={handleNetworkstatus} />
                <FormControlLabel value={'Booked'} control={<Checkbox />} label="Число забронированных станций" checked={booked} onClick={handleBooked} />
                <FormControlLabel value={'Broken'} control={<Checkbox />} label="Число сломанных станций" checked={broken} onClick={handleBroken} />
                <FormControlLabel value={'Offline'} control={<Checkbox />} label="Число выключенных станций" checked={offline} onClick={handleOffline} />
                <FormControlLabel value={'Online'} control={<Checkbox />} label="Число включенных станций в режиме ожидания" checked={online} onClick={handleOnline} />
              </FormGroup>
            </Box>
          </Box>
        </Modal>

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
            <Button sx={{ ml: 5 }} variant="contained">
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
            {networkstatus === true ? <Grid item xs={12} sm={12} md={12} lg={4} xl={4}><NetworkStatus /></Grid> : ''}
            {booked === true ? <Grid item xs={12} sm={12} md={12} lg={4} xl={4}><Booked /></Grid> : ''}
            {broken === true ? <Grid item xs={12} sm={12} md={12} lg={4} xl={4}><Broken /></Grid> : ''}
            {offline === true ? <Grid item xs={12} sm={12} md={12} lg={4} xl={4}><Offline /></Grid> : ''}
            {online === true ? <Grid item xs={12} sm={12} md={12} lg={4} xl={4}><Online /></Grid> : ''}
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', py: 8, height: '200px', justifyContent: 'space-evenly', cursor: 'pointer' }} onClick={handleOpen}>
                <Typography variant="h6" textAlign={'center'}>
                  Добавить показатель
                </Typography>
              </Card>
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
