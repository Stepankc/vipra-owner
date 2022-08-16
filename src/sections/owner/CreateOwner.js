import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Grid, Stack, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { FormProvider, RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

CreateOwner.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default function CreateOwner({ isEdit, currentUser }) {
  const navigate = useNavigate();

  // const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    email: Yup.string().required('Пропущено поле').email(),
    phoneNumber: Yup.string().required('Пропущено поле'),
    name: Yup.string().required('Пропущено поле'),
    inn: Yup.string().required('Пропущено поле'),
    rec: Yup.string().required('Пропущено поле'),
  });

  const defaultValues = useMemo(
    () => ({
      email: currentUser?.email || '',
      phoneNumber: currentUser?.phoneNumber || '',
      name: currentUser?.phoneNumber || '',
      inn: currentUser?.phoneNumber || '',
      rec: currentUser?.phoneNumber || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      // enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.owner.list);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack
              direction={{ xs: 'column', sm: 'column' }}
              justifyContent="space-between"
              maxWidth={'50%'}
              alignItems="flex-start"
              spacing={2}
              mb={5}
            >
              <Typography variant="h6" component="h1" paragraph>
                Личные данные
              </Typography>
              <RHFTextField name="name" label="ФИО" />
              <RHFTextField name="email" label="Email" />
              <RHFTextField name="phoneNumber" label="Телефон" />
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'column' }}
              justifyContent="space-between"
              maxWidth={'50%'}
              alignItems="flex-start"
              spacing={2}
            >
              <Typography variant="h6" component="h1" paragraph>
                Платёжные данные
              </Typography>
              <RHFTextField name="inn" label="ИНН" />
              <RHFTextField name="rec" label="Реквизиты" />
            </Stack>
            <Stack alignItems="start" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Создать пользователя
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
