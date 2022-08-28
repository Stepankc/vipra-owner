// @mui
import { Typography, Card } from "@mui/material";

// ----------------------------------------------------------------------

export default function PageTwo(props) {
  return (
    <Card
      component="span"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100px",
        justifyContent: "space-evenly",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" color="initial">
        Потребление энергии за день
      </Typography>
      <Typography variant="h5" color="initial">
        {props.energy} кВт
      </Typography>
    </Card>
  );
}
