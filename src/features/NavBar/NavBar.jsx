import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { filterFavouriteMovies, sortMovies } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { navItems } from "../../constants/NavigationItems";
import { SortDimensions } from "../../constants/SortDimensions";

const useStyles = makeStyles({
  navItemContainer: {
    backgroundColor: "darkgrey",
    height: "60px",
    padding: "12px 24px",
  },
  navItem: {
    width: "160px",
  },
});

const NavBar = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.home);
  const classes = useStyles();
  const favouritesNavItem = navItems.find(
    (item) => item.sortCode === SortDimensions.FAVOURITES
  );

  return (
    <Stack
      justifyContent={"space-evenly"}
      direction={"row"}
      className={classes.navItemContainer}
    >
      {navItems
        .filter((navItems) => navItems.sortCode !== SortDimensions.FAVOURITES)
        .map((navItem) => {
          return (
            <Button
              key={navItem.id}
              className={classes.navItem}
              variant="text"
              onClick={() => dispatch(sortMovies(movies, navItem.sortCode))}
            >
              {navItem.description}
            </Button>
          );
        })}
      <Button
        key={favouritesNavItem.id}
        className={classes.navItem}
        variant="text"
        onClick={() =>
          dispatch(filterFavouriteMovies(favouritesNavItem.sortCode))
        }
      >
        {favouritesNavItem.description}
      </Button>
    </Stack>
  );
};

export default NavBar;
