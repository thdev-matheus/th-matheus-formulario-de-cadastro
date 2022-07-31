import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Paths from "./Paths";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Data from "./services/data";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 2s",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#40407a",
      light: "#706fd3",
      dark: "#2c2c54",
    },
    error: {
      main: "#ff793f",
      light: "#ffb142",
      dark: "#cd6133",
    },
    text: {
      primary: "#40407a",
      secondary: "#474787",
      disabled: "#474787",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Paths Data={Data} />
    </BrowserRouter>
  </ThemeProvider>
);
