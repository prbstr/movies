import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const useStyles = makeStyles(() => ({
  cardContainer: {
    margin: "24px",
  },
  cardContent: {
    height: "150px",
  },
  titleYear: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MovieCard = ({
  poster_path,
  title,
  overview,
  release_date,
  baseUrl = "https://image.tmdb.org/t/p/original",
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={`${baseUrl}${poster_path}`}
          alt={poster_path}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.titleYear}>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5">
              {release_date?.substring(0, 4)}
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            {overview.split(" ").slice(0, 25).join(" ")}...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <StarIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
