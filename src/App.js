import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {
  Outlet,
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router";
import AboutUs from "./Components/About";
import Error from "./Components/Error";
import RestaurantInfo from "./RestaurantInfo";
import { CartProvider } from "./context/CartContext";

const Groceries = lazy(() => import("./Components/Groceries"));
const ContactUs = lazy(() => import("./Components/Contact"));

const AppLayout = () => {
  return (
    <CartProvider>
      <div className="app min-h-screen">
        <Header />
        <Outlet />
      </div>
    </CartProvider>
  );
};

const appRouter = Router([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/RestaurantInfo/:resid",
        element: <RestaurantInfo />,
      },
      {
        path: "/Groceries",
        element: (
          <Suspense fallback={<h1 className="text-white text-center py-12">LOADING....</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/About",
        element: <AboutUs />,
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<h1 className="text-white text-center py-12">LOADING......</h1>}>
            <ContactUs />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
