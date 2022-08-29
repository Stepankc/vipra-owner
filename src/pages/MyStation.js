// @mui
import { Container, Typography, Divider, Grid} from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import StationTable from "../sections/MyStation/StationTable"
import TimeLineComponent from "src/sections/timeLine/TimeLineComponent";
//mock
import { _TimeLineMock } from "src/_mock";

// ----------------------------------------------------------------------

export default function MyStation() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Мои станции">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4" component="h1" paragraph>
          Мои станции
        </Typography>
        <Divider sx={{ bgcolor: "black", mb: 2 }} />
        <StationTable />
        <Divider sx={{ bgcolor: "black", my: 4 }} />
        <Grid container spacing={2}>
            {_TimeLineMock.map((line) => (
                <TimeLineComponent key={line.id} line={line} />
              ))}
            </Grid>
      </Container>
    </Page>
  );
}
