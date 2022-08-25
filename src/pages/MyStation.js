// @mui
import { Container, Typography, Box, Chip, Button, Fab, Divider, Card, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Page qwe">
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
                <Card component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height: '100px', justifyContent: 'space-evenly', textAlign: 'center' }}>
                  <Typography variant="body1" color="initial">Потребление энергии за день</Typography>
                  <Typography variant="h5" color="initial">200 кВт</Typography>
                </Card>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            123
          </Grid>
        </Grid>

      </Container>
    </Page>
  );
}
