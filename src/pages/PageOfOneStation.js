import * as React from "react";
// @mui
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Fab,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import { Icon } from "@iconify/react";

import EarnedInDayCard from "../sections/PageOfOneStation/EarnedInDayCard";
import EnergyInDayCard from "../sections/PageOfOneStation/EnergyInDayCard";
import ImgCard from "../sections/PageOfOneStation/ImgCard";
import TimeLineComponent from "src/sections/timeLine/TimeLineComponent";
//Mock
import { _EarnedInDay, _ImgForOneStation,_TimeLineMock } from "src/_mock";

// ----------------------------------------------------------------------

export default function PageOfOneStation() {
  const { themeStretch } = useSettings();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title="Станция 1">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container>
          <Grid
            mb={2}
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            item
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h3" color="initial">
              Станция 1
            </Typography>
            <Typography variant="body1" color="initial">
              ViPRA-000001
            </Typography>
            <Chip label="В ожидании" color="warning" variant="outlined" />
          </Grid>

          <Grid xs={12} sm={12} md={12} lg={2} xl={2} item></Grid>

          <Grid
            container
            spacing={2}
            mb={2}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            justifyContent={"space-around"}
            item
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              mb={2}
              display={"flex"}
              alignItems={"center"}
            >
              <Button variant="outlined" color="primary" fullWidth>
                ВОЙТИ В ПАНЕЛЬ УПРАВЛЕНИЯ
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              justifyContent={"space-around"}
              display={"flex"}
            >
              <Fab color="warning" aria-label="reload stats">
                <Icon
                  icon="uiw:reload"
                  width="30"
                  height="30"
                  hFlip={true}
                  vFlip={true}
                />
              </Fab>
              <Fab color="default" aria-label="reload stats">
                <Icon
                  icon="fa:power-off"
                  width="30"
                  height="30"
                  rotate={2}
                  hFlip={true}
                  vFlip={true}
                />
              </Fab>
              <Fab color="secondary" aria-label="reload stats">
                <Icon
                  icon="gridicons:visible"
                  width="30"
                  height="30"
                  rotate={2}
                  hFlip={true}
                  vFlip={true}
                />
              </Fab>
              <Fab color="error" aria-label="reload stats">
                <Icon
                  icon="bi:trash-fill"
                  width="30"
                  height="30"
                  rotate={2}
                  hFlip={true}
                  vFlip={true}
                />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "black", mb: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <EarnedInDayCard earned={_EarnedInDay.income} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <EnergyInDayCard energy={_EarnedInDay.energy} />
              </Grid>
            </Grid>

            <Box my={2}>
              <Typography variant="h4" color="initial">
                Схемы оплаты
              </Typography>
              <Typography variant="body1" color="initial">
                Оплата за минуту 10 руб/мин
              </Typography>
            </Box>

            <Box my={2}>
              <Typography variant="h4" color="initial">
                Фотографии станции
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {_ImgForOneStation.map((img) => (
                <ImgCard key={img.id} img={img} />
              ))}
            </Grid>

            <Box my={2}>
              <Typography variant="h4" color="initial">
                Live-видео
              </Typography>
              <Button variant="outlined" color="primary" fullWidth>
                ОТКРЫТЬ ПОТОКОВОЕ ВИДЕО
              </Button>
            </Box>
          </Grid>
          {/* Left side */}
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={3}
                xl={3}
                mb={2}
                alignItems={"center"}
                display={"flex"}
              >
                <Typography variant="h4" color="initial">
                  Лента событий
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}></Grid>

              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Все события
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    label="Все события"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Событие 1</MenuItem>
                    <MenuItem value={2}>Событие 2</MenuItem>
                    <MenuItem value={3}>Событие 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} mb={2}>
            {_TimeLineMock.map((line) => (
                <TimeLineComponent key={line.id} line={line} />
              ))}
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
