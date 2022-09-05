import React from 'react';
// @mui
import { Card, Typography, Box, Modal } from '@mui/material';


// ----------------------------------------------------------------------


export default function AddValue() {


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

  return (
    <>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem
          </Typography>
        </Box>
      </Modal>
      <Card onClick={handleOpen} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', py: 8, height: '200px', justifyContent: 'space-evenly', cursor: 'pointer' }}>
        <Box>
          <Typography variant="h6" textAlign={'center'}>
            Добавить показатель
          </Typography>
        </Box>
      </Card>
    </>
  );
}
