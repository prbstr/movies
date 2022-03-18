import { SortDimensions } from "./SortDimensions";

export const navItems = [
  {
    id: 1,
    description: "All",
    sortCode: SortDimensions.ALL,
  },
  {
    id: 2,
    description: "My Movies",
    sortCode: SortDimensions.FAVOURITES,
  },
  {
    id: 3,
    description: "Most Popular",
    sortCode: SortDimensions.POPULAR,
  },
  {
    id: 4,
    description: "Latest",
    sortCode: SortDimensions.LATEST,
  },
];
