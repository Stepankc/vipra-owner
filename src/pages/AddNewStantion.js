import * as React from 'react';
// @mui
import { Container, Typography, Divider, Grid, TextField, Button, Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
// hooks
import useSettings from '../hooks/useSettings';
// _mock_
import { _userList } from '../_mock';
// components
import Page from '../components/Page';
// sections


// ----------------------------------------------------------------------

export default function AddNewStantion() {
  const { themeStretch } = useSettings();

  const [manufacturer, setManufacturer] = React.useState('');
  const handleChange = (event) => {
    setManufacturer(event.target.value);
  };

  const [model, setModel] = React.useState('');
  const handleChangeTwo = (event) => {
    setModel(event.target.value);
  };

  const [location, setLocation] = React.useState('');
  const handleChangeThree = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Page title="Добавить новую страницу">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Добавить новую станцию
        </Typography>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {/* Left Side */}
            <Grid container spacing={1}>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  Название станции
                </Typography>
              </Grid>
              <Grid item mb={2} xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <TextField id="outlined-basic" fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  Производитель станции
                </Typography>
              </Grid>
              <Grid item mb={2} xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={manufacturer} onChange={handleChange}>
                    <MenuItem value={1}>ViPRA Electro</MenuItem>
                    <MenuItem value={2}>Другие производители</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  Модель станции
                </Typography>
              </Grid>
              <Grid item mb={2} xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={model} onChange={handleChangeTwo}>
                    <MenuItem value={1}>Модель 1</MenuItem>
                    <MenuItem value={2}>Модель 2</MenuItem>
                    <MenuItem value={3}>Модель 3</MenuItem>
                    <MenuItem value={4}>Модель 4</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  Расположение станции
                </Typography>
              </Grid>
              <Grid mb={2} item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Button variant="outlined" color="primary" fullWidth>
                  УКАЗАТЬ НА КАРТЕ
                </Button>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  Тип объекта
                </Typography>
              </Grid>
              <Grid mb={2} item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={location} onChange={handleChangeThree}>
                    <MenuItem value={1}>Гостиница</MenuItem>
                    <MenuItem value={2}>АЗС</MenuItem>
                    <MenuItem value={3}>Паркинг</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  MAC-адрес станции
                </Typography>
              </Grid>
              <Grid mb={2} item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <TextField id="outlined-basic" fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  Схема работы
                </Typography>
              </Grid>
              <Grid item mb={2} xs={12} sm={12} md={12} lg={6} xl={6}>
                <Grid>
                  <FormControl>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      <FormControlLabel value="min" control={<Radio />} label="Цена за минуту" />
                      <FormControlLabel value="kvt" control={<Radio />} label="Цена за кВт" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <TextField id="outlined-basic" fullWidth variant="outlined" />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} display={'flex'} alignItems={'center'}>
                    <Typography variant='body1' paragraph>
                      Цена за кВт
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h6" component="h2" paragraph>
                  Ссылка на панель управления станцией
                </Typography>
              </Grid>
              <Grid mb={2} item xs={12} sm={12} md={12} lg={6} xl={6} display={'flex'} alignItems={'center'}>
                  <TextField id="outlined-basic" fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}></Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <Button variant="contained" fullWidth>ДОБАВИТЬ СТАНЦИЮ</Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Typography variant="h6" component="h2" paragraph>
              Изображение станции
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
