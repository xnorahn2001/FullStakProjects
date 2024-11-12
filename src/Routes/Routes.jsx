import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Products from "../components/products/Products";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import Layout from "../Layout/Layout";
import ProductDetails from "../Pages/ProductDetailsPage";
import SignupForm from "../components/form/SignupForm";
import SigninForm from "../components/form/SigninForm";
import ProfilePage from "../Pages/ProfilePage";
import AdminDashboard from "../components/dashboard/Admin/AdminDashboard";
import UserDashboard from "../components/dashboard/User/UserDashboard";
import UnauthorizedPage from "../Pages/UnauthorizedPage";

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
        { path: "signup", element: <SignupForm /> },
        { path: "signin", element: <SigninForm /> },
        { path: "profile/:id", element: <ProfilePage /> },
        {
          path: "adminDashboard",
          element:
            userRole === "Admin" ? <AdminDashboard /> : <UnauthorizedPage />,
        },
        {
          path: "userDashboard",
          element:
            userRole === "Customer" ? <UserDashboard /> : <UnauthorizedPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;