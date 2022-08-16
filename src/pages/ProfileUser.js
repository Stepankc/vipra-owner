import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container, Divider, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// _mock_
import { _userList } from '../_mock';
// components
import Page from '../components/Page';
// sections
import UserNewEditForm from '../sections/user/UserNewEditForm';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="Профиль пользователя">
      <Container maxWidth={themeStretch ? false : 'xl'}>
      <Typography variant="h4" component="h1" paragraph>
        Имя пользователя
      </Typography>
      <Divider sx={{ bgcolor: 'black', mb: 2 }} />
        <UserNewEditForm isEdit={isEdit} currentUser={currentUser} />
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />
        <Typography variant="h4" component="h1" paragraph>
        История действий
      </Typography>
      </Container>
    </Page>
  );
}
