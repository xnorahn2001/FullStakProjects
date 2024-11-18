import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../pages/HomePage";
// import Cart from "./components/Cart/CartPage";
// import Cart from "./components/Cart/Cart";

import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import Layout from "../Layout/Layout";
import ProductDetails from "../Pages/ProductDetailsPage";
import UnauthorizedPage from "../Pages/UnauthorizedPage";
import Products from "../Components/Products/Products";

const Routes = () => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const userRole = userInfo ? userInfo.role : "Unauthorized";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductDetails /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "product/:id", element: <ProductDetails /> },
        // { path: "cart /: id ", element: <CartPage/> },


        {
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;