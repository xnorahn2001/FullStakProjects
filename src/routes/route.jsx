import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layout/layout";
import Contacts from "../pages/contact";
import HomePage from "../pages/home";
import ErrorPage from "../pages/error";
import ProductDetails from "../pages/ProductDetails";
import SignUpPage from "../pages/signup";
import SignInPage from "../pages/signin";
import UserProfile from "../components/users/UserProfile";

const routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/contact",
          element: <Contacts />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetails />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/signin",
          element: <SignInPage />,
        },
        {
          path: "/signout",
          element: <HomePage />,
        },
        {
          path: "/profile",
          element: <UserProfile />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default routes;