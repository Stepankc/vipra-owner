// @mui
import { Container, Typography, Divider, Grid, Card, CardHeader, CardContent, CardActions, Button, Box, Modal } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import React from 'react';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const serviceCard = (
    <React.Fragment>
      <CardHeader title="Название материала" />
      <CardContent>
        <Typography variant="body1" color="initial">Lorem...</Typography>
      </CardContent>
      <Box textAlign={'center'} display={'flex'} justifyContent={'center'}>
        <CardActions>
          <Button onClick={handleOpen} size="small">Читать далее</Button>
        </CardActions>
      </Box>
    </React.Fragment>
  )

  const serviceModal = (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Название материала
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  )

  return (
    <Page title="Сервис">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Сервис
        </Typography>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card>
              {serviceCard}
            </Card>
          </Grid>
        </Grid>
      </Container>
      {serviceModal}
    </Page>
  );
}
