import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.tsx";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#effee0",
      main: "#D7F75B",
      dark: "#9ac32a",
      // contrastText: "#000000", // or any contrasting color for text
    },
    secondary: {
      light: "#63ff81",
      main: "#00c853",
      dark: "#009624",
      contrastText: "#ffffff", // or any contrasting color for text
    },
    error: {
      light: "#ffbdcb",
      main: "#f44336",
      dark: "#b22a00",
      contrastText: "#ffffff", // or any contrasting color for text
    },
    warning: {
      light: "#ffffc1",
      main: "#ffeb3b",
      dark: "#c8b900",
      contrastText: "#000000", // or any contrasting color for text
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#ffffff", // or any contrasting color for text
    },
    success: {
      light: "#a5d6a7",
      main: "#4caf50",
      dark: "#087f23",
      contrastText: "#ffffff", // or any contrasting color for text
    },
    text: {
      primary: "#000000", // or any color for primary text
      secondary: "#666666", // or any color for secondary text
    },
    background: {
      paper: "#ffffff", // or any color for paper background
      default: "#f5f5f5", // or any color for default background
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
