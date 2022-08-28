// @mui
import { Grid, Card, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function TimeLineComponent(props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Card
      component="span"
      sx={{
        display: "flex",
        height: "100px",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} mx={0.25}>
        <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
          <Typography variant="body1" color="initial">
            {props.line.createDate}
          </Typography>
          <Typography variant="body1" color="initial">
            {props.line.time}
          </Typography>
        </Grid>
        <Grid item xs={8} sm={10} md={10} lg={10} xl={10}>
          <Typography variant="h5" color="initial">
            {props.line.status}
          </Typography>
          <Typography variant="body1" color="initial">
            {props.line.info}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  </Grid>
  );
}
