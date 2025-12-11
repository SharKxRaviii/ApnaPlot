import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Listings from "./pages/Listings";
import PlotDetails from "./pages/PlotDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Unauthorized from "./pages/Unauthorized";

// Define the Routing Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Unauthorized/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listings",
        element: <Listings />,
      },
      {
        path: "/listings/:id",
        element: <PlotDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;