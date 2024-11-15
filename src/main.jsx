import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { theme } from "./config/mui-config.js";
import {client} from "./config/query-client.js"
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <CssBaseline />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
