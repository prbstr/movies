import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import palette from "../../theme/Palette";
import { baseImageUrl } from "../../constants/Api";
import { addToFavourites, removeFromFavourites } from "../../features/Actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  cardContainer: {
    margin: "24px",
  },
  cardContent: {
    height: "120px",
    backgroundColor: palette.secondary,
  },
  actions: {
    backgroundColor: palette.secondary,
    display: "flex",
    flexDirection: "row-reverse",
  },
  titleYear: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MovieCard = (props) => {
  const dispatch = useDispatch();
  const { poster_path, title, overview, release_date, adult } = props.movie;
  const { isFavourite } = props;
  const classes = useStyles();

  return (
    <Card elevation={2} className={classes.cardContainer}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={`${baseImageUrl}${poster_path}`}
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
          <Typography variant="body2">
            {overview?.split(" ").slice(0, 25).join(" ")}...
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
          {isFavourite ? (
            <IconButton
              onClick={() => dispatch(removeFromFavourites(props.movie))}
              aria-label="remove from favorites"
            >
              <StarIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => dispatch(addToFavourites(props.movie))}
              aria-label="add to favorites"
            >
              <StarOutlineIcon />
            </IconButton>
          )}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
