import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64ffda",
    },
  },
  typography: {
    fontFamily: '"Ubuntu"',
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary", color: "primary" },
          style: {
            backgroundColor: "transparent",
            color: "#64ffda",
            textTransform: "none",
            fontSize: 14,
            fontWeight: 400,
            borderRadius: 5,
            borderColor: "#64ffda",
            border: "2px solid",
            px: 2,
            py: 1,
            ":hover": {
              backgroundColor: "#1D4ED8",
              opacity: 0.7,
            },
          },
        },
        {
          props: { variant: "secondary", color: "primary" },
          style: {
            backgroundColor: "transparent",
            color: "#64ffda",
            textTransform: "none",
            fontSize: 14,
            fontWeight: 400,
            borderRadius: 0,
            px: 2,
            py: 1,
            ":hover": {
              backgroundColor: "#1D4ED8",
              opacity: 0.7,
            },
          },
        },
        {
          props: { variant: "secondary", color: "secondary" },
          style: {
            backgroundColor: "transparent",
            color: "#c2cceb",
            textTransform: "none",
            fontSize: 14,
            fontWeight: 400,
            borderRadius: 0,
            px: 2,
            py: 1,
            ":hover": {
              backgroundColor: "#1D4ED8",
              opacity: 0.7,
            },
          },
        },
        {
          props: { variant: "tertiary", color: "primary" },
          style: {
            backgroundColor: "transparent",
            color: "#c2cceb",
            textTransform: "none",
            fontSize: 14,
            fontWeight: 400,
            borderRadius: 0,
            px: 2,
            py: 1,
            transition: "transform 0.8s",
            ":hover": {
              color: "#64ffda",
              transform: "scale(1.3)",
            },
          },
        },
      ],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
