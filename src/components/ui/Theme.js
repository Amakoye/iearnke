import { createTheme } from "@material-ui/core/styles";

//#0B72B9-arcBlue

const iearnBlue = "#153281";
const iearnOrange = "#FFBA60";
export default createTheme({
  palette: {
    common: {
      blue: iearnBlue,
      orange: iearnOrange,
    },
    primary: {
      main: iearnBlue,
    },
    secondary: {
      main: iearnOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
