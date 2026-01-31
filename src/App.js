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
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Profile from "./Components/Profile/Profile";
import Orders from "./Components/Orders/Orders";

const Groceries = lazy(() => import("./Components/Groceries"));
const ContactUs = lazy(() => import("./Components/Contact"));

const AppLayout = () => {
  return (
    <AuthProvider>
      <OrderProvider>
        <CartProvider>
          <div className="app min-h-screen">
            <Header />
            <Outlet />
          </div>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
};

const appRouter = Router([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/profile", element: <Profile /> },
      { path: "/orders", element: <Orders /> },
      { path: "/RestaurantInfo/:resid", element: <RestaurantInfo /> },
      {
        path: "/Groceries",
        element: (
          <Suspense fallback={<div className="text-white text-center py-12">Loading...</div>}>
            <Groceries />
          </Suspense>
        ),
      },
      { path: "/About", element: <AboutUs /> },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<div className="text-white text-center py-12">Loading...</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
      { path: "/favorites", element: <div className="min-h-screen flex items-center justify-center text-white text-xl">❤️ Favorites Coming Soon</div> },
      { path: "/addresses", element: <div className="min-h-screen flex items-center justify-center text-white text-xl">📍 Addresses Coming Soon</div> },
      { path: "/payments", element: <div className="min-h-screen flex items-center justify-center text-white text-xl">💳 Payment Methods Coming Soon</div> },
      { path: "/offers", element: <div className="min-h-screen flex items-center justify-center text-white text-xl">🎁 Offers Coming Soon</div> },
      { path: "/settings", element: <div className="min-h-screen flex items-center justify-center text-white text-xl">⚙️ Settings Coming Soon</div> },
      { path: "/help", element: <div className="min-h-screen flex items-center justify-center text-white text-xl">❓ Help & Support Coming Soon</div> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
