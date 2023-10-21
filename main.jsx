import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Box } from "@mui/material";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./Container/Dashboard.jsx";
import { Report } from "./UI/Report/Report.jsx";

import store from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/reportdemo",
    element: (
      <Box className="h-screen w-100 bg-custom-one text-white pt-28  overflow-auto">
        <Report />
      </Box>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
