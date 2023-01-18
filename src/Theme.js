import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: 800,
      fontSize: 36,
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 300,
      fontSize: 27,
    },
    body1: {
      fontFamily: "Lora",
      fontSize: 16,
    },
    button: {
      fontFamily: "Montserrat",
    },
  },
  palette: {
    primary: {
      main: "#CFCFCF",
    },
    secondary: {
      main: "#E44F48",
    },
  },
});

export default theme;
