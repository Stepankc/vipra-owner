import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Stack, Typography, Button } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { FormProvider, RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

UserNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default function UserNewEditForm({ isEdit, currentUser }) {
  const navigate = useNavigate();

  const defaultValues = useMemo(
    () => ({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      phoneNumber: currentUser?.phoneNumber || '',
      address: currentUser?.address || '',
      country: currentUser?.country || '',
      state: currentUser?.state || '',
      city: currentUser?.city || '',
      zipCode: currentUser?.zipCode || '',
      avatarUrl: currentUser?.avatarUrl || '',
      isVerified: currentUser?.isVerified || true,
      status: currentUser?.status,
      company: currentUser?.company || '',
      role: currentUser?.role || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      navigate(PATH_DASHBOARD.user.profile);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: 'grid',
              columnGap: 3,
              rowGap: 3,
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 2fr)' },
              alignItems: 'center'
            }}
          >
            <Typography variant="h6" component="h5" paragraph>
              Личные данные
            </Typography>
            <Typography variant="h6" component="h5" paragraph>
              Платёжные данные
            </Typography>
            <Typography variant="h6" component="h5" paragraph>
              Действие
            </Typography>
            <RHFTextField name="name" label="ФИО" />
            <RHFTextField name="card" label="Карта" />
            <Button style={{ minHeight: "35px", maxWidth: "80%" }}   variant="contained" type="button" size="small">
              Сбросить и выслать пароль на email
            </Button>
            <RHFTextField name="paid" label="Оплачено" />
            <RHFTextField name="bonusRub" label="Бонусные рубли" />
            <Button type="button" style={{ minHeight: "35px", maxWidth: "80%" }}   variant="contained">
            Отправить сообщение
            </Button>
            <RHFTextField name="bonusKvt" label="Бонусные КВТ" />
            <RHFTextField name="email" label="Email" />
            <Button type="button" style={{ minHeight: "35px", maxWidth: "80%" }}  variant="contained">
            Заблокировать аккаунт
            </Button>
            <RHFTextField name="phoneNumber" label="Телефон" />
            <RHFTextField name="city" label="Город" />
            <Button type="button" style={{ minHeight: "35px", maxWidth: "80%" }}  variant="contained">
            Удалить аккаунт
            </Button>
            <RHFTextField name="Car" label="Автомобиль" />
          </Box>

          <Stack alignItems="flex-end" sx={{ mt: 3, mb: 5}}>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Сохранить изменения
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
