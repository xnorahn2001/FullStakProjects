import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminDashboard from "../components/dashboard/AdminDashboard";
import UserDashboard from "../components/dashboard/UserDashboard";
import ErrorPage from "../Pages/ErrorPage";
import UnauthorizedPage from "../Pages/UnauthorizedPage";
import Layout from "../Layout/Layout";

const ProtectedRoutes = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userRole = userInfo ? userInfo.role : "Unauthorized";

  const routes = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
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
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default ProtectedRoutes;
