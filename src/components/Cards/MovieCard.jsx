import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardContainer: {
    margin: "24px",
  },
  cardContent: {
    height: "150px",
  },
  titleYear: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const MovieCard = ({
  imagePath,
  title,
  description,
  baseUrl = "https://image.tmdb.org/t/p/original",
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer} sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={`${baseUrl}${imagePath}`}
          alt={imagePath}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.titleYear}>
            <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5">
    2019
          </Typography>
          </div>          
          <Typography variant="body2" color="text.secondary">
            {description.split(" ").slice(0, 25).join(" ")}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
