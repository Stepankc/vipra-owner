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
import CreateOwner from '../sections/owner/CreateOwner';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="Новый владелец">
      <Container maxWidth={themeStretch ? false : 'xl'}>
      <Typography variant="h3" component="h1" paragraph>
      Добавить нового владельца
        </Typography>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />
        <CreateOwner isEdit={isEdit} currentUser={currentUser} />
      </Container>
    </Page>
  );
}
