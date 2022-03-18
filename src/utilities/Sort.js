export const sortByTitle = (a, b) => {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
  } else {
    return 0;
  }
};

export const sortByPopularity = (a, b) => a.popularity - b.popularity;
export const sortByReleaseDate = (a, b) => {
  if (b.release_date > a.release_date) {
    return 1;
  } else if (b.release_date < a.release_date ) {
    return -1;
  } else {
    return 0;
  }
};
