import { createTheme } from "@mui/material";
import palette from "./Palette";

const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary
    },
    secondary: {
      main: palette.secondary
    }
  }
});

export default theme;