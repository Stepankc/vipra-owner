import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container, Typography, Divider } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// _mock_
import { _userList } from '../_mock';
// components
import Page from '../components/Page';
// sections
import CreateUser from '../sections/user/createUser';

// ----------------------------------------------------------------------

export default function AddNewStantion() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="Новый пользователь">
      <Container maxWidth={themeStretch ? false : 'xl'}>
      <Typography variant="h3" component="h1" paragraph>
      Добавить нового пользователя
        </Typography>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />

        <CreateUser isEdit={isEdit} currentUser={currentUser} />
      </Container>
    </Page>
  );
}
