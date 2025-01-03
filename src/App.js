import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet, createBrowserRouter as Router, RouterProvider } from "react-router";
import AboutUs from "./Components/About";
import ContactUs from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantInfo from "./RestaurantInfo";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = Router([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/RestaurantInfo/:resid",
        element: <RestaurantInfo />
      },
      {
        path: "/About",
        element: <AboutUs />,
      },

      {
        path: "/Contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
