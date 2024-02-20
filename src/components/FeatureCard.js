import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Config from "../config";
const FeatureCard = ({ imageUrl }) => {
  const title = "Edge Network";
  const subtitle =
    "  In the 19th century, it was debated whether the most fundamenta principle in language was contextuality or compositionality, andcompositionality was usually";
  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: 10,
        backgroundColor: Config.colorConfig.secondryColor,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h6" color="white" component="div">
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="white"
            component="div"
          >
            {subtitle}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: "50%",
          border: "none",
          height: 180,
          position: "static"
        }}
        image={imageUrl}
        alt="Feature image"
      />
    </Card>
  );
};

export default FeatureCard;
