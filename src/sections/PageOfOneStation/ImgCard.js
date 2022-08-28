// @mui
import { Grid } from "@mui/material";

// ----------------------------------------------------------------------

export default function PageTwo(props) {
  return (
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
    <img
      src={props.img.image}
      alt={``}
      loading="lazy"
    />
  </Grid>
  );
}
