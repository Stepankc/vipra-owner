import * as React from 'react';
// @mui
import { Container, Typography, Box, Chip, Button, Fab, Divider, Card, Grid, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title="Станция 1">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container >
          <Grid mb={2} xs={12} sm={12} md={12} lg={4} xl={4} item display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} >
            <Typography variant="h3" color="initial">
              Станция 1
            </Typography>
            <Typography variant="body1" color="initial">
              ViPRA-000001
            </Typography>
            <Chip label="В ожидании" color="warning" variant="outlined" />
          </Grid>

          <Grid xs={12} sm={12} md={12} lg={2} xl={2} item></Grid>

          <Grid spacing={2} mb={2} xs={12} sm={12} md={12} lg={6} xl={6} justifyContent={'space-around'} item display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} mb={2} display={'flex'} alignItems={'center'}>
              <Button variant="outlined" color="primary" fullWidth>
                ВОЙТИ В ПАНЕЛЬ УПРАВЛЕНИЯ
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} justifyContent={'space-around'} display={'flex'}>
              <Fab color="warning" aria-label="reload stats">
                reload
              </Fab>
              <Fab color="default" aria-label="reload stats">
                On/Off
              </Fab>
              <Fab color="secondary" aria-label="reload stats">
                Visible
              </Fab>
              <Fab color="error" aria-label="reload stats">
                Remove
              </Fab>
            </Grid>
          </Grid>

        </Grid>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100px', justifyContent: 'space-evenly', textAlign: 'center' }}>
                  <Typography variant="body1" color="initial">Заработано за день</Typography>
                  <Typography variant="h5" color="initial">150 руб</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100px', justifyContent: 'space-evenly', textAlign: 'center' }}>
                  <Typography variant="body1" color="initial">Потребление энергии за день</Typography>
                  <Typography variant="h5" color="initial">200 кВт</Typography>
                </Card>
              </Grid>
            </Grid>

            <Box my={2}>
              <Typography variant="h4" color="initial">Схемы оплаты</Typography>
              <Typography variant="body1" color="initial">Оплата за минуту 10 руб/мин</Typography>
            </Box>

            <Box my={2}>
              <Typography variant="h4" color="initial">Фотографии станции</Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={`https://www.fillmurray.com/640/360`}
                  alt={``}
                  loading="lazy"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={`https://www.fillmurray.com/640/360`}
                  alt={``}
                  loading="lazy"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={`https://www.fillmurray.com/640/360`}
                  alt={``}
                  loading="lazy"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={`https://www.fillmurray.com/640/360`}
                  alt={``}
                  loading="lazy"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={`https://www.fillmurray.com/640/360`}
                  alt={``}
                  loading="lazy"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={`https://www.fillmurray.com/640/360`}
                  alt={``}
                  loading="lazy"
                />
              </Grid>
            </Grid>


            <Box my={2}>
              <Typography variant="h4" color="initial">Live-видео</Typography>
              <Button variant="outlined" color="primary" fullWidth>
                ОТКРЫТЬ ПОТОКОВОЕ ВИДЕО
              </Button>
            </Box>

          </Grid>
          {/* Left side */}
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} mb={2} alignItems={'center'} display={'flex'}>
                <Typography variant="h4" color="initial">Лента событий</Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}></Grid>

              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Все события</InputLabel>
                  <Select labelId="demo-simple-select-label" label="Все события" id="demo-simple-select" value={age} onChange={handleChange}>
                    <MenuItem value={1}>Событие 1</MenuItem>
                    <MenuItem value={2}>Событие 2</MenuItem>
                    <MenuItem value={3}>Событие 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>


            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card component="span" sx={{ display: 'flex', height: '200px', justifyContent: 'space-evenly' }}>
                  <Grid container spacing={2} my={0.25} mx={0.25}>
                    <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                      <Typography variant="body1" color="initial">12.07.2021</Typography>
                      <Typography variant="body1" color="initial">12:00</Typography>
                    </Grid>

                    <Grid item xs={8} sm={10} md={10} lg={10} xl={10}>
                      <Typography variant="h5" color="initial">Идёт зарядка</Typography>
                Сюда график заряда
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card component="span" sx={{ display: 'flex', height: '100px', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <Grid container spacing={2} mx={0.25}>
                    <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                      <Typography variant="body1" color="initial">12.07.2021</Typography>
                      <Typography variant="body1" color="initial">11:00</Typography>
                    </Grid>
                    <Grid item xs={8} sm={10} md={10} lg={10} xl={10}>
                      <Typography variant="h5" color="initial">Станция заблокирована</Typography>
                      <Typography variant="body1" color="initial">Время платного ожидания - 10 мин</Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card component="span" sx={{ display: 'flex', height: '100px', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <Grid container spacing={2} mx={0.25}>
                    <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                      <Typography variant="body1" color="initial">12.07.2021</Typography>
                      <Typography variant="body1" color="initial">11:00</Typography>
                    </Grid>
                    <Grid item xs={8} sm={10} md={10} lg={10} xl={10}>
                      <Typography variant="h5" color="initial">Станция включена</Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card component="span" sx={{ display: 'flex', height: '100px', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <Grid container spacing={2} mx={0.25}>
                    <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                      <Typography variant="body1" color="initial">12.07.2021</Typography>
                      <Typography variant="body1" color="initial">11:00</Typography>
                    </Grid>
                    <Grid item xs={8} sm={10} md={10} lg={10} xl={10}>
                      <Typography variant="h5" color="initial">Станция выключена</Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card component="span" sx={{ display: 'flex', height: '100px', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <Grid container spacing={2} mx={0.25}>
                    <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                      <Typography variant="body1" color="initial">12.07.2021</Typography>
                      <Typography variant="body1" color="initial">11:00</Typography>
                    </Grid>
                    <Grid item xs={8} sm={10} md={10} lg={10} xl={10}>
                      <Typography variant="h5" color="initial">Ошибка в работе станции</Typography>
                      <Typography variant="body1" color="initial">Код ошибки - 100</Typography>
                      <Typography variant="body1" color="initial">Сообщить в поддержку</Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            <Button variant="outlined" color="primary" fullWidth>
              СМОТРЕТЬ БОЛЕЕ ПОЗДНИЕ СОБЫТИЯ
            </Button>

          </Grid>
        </Grid>

      </Container>
    </Page>
  );
}
