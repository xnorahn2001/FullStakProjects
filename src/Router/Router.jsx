import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../Layout/Layout';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import ProductDetails from '../Pages/ProductDetails';

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/productdetails",
          element: <ProductDetails />,
        },
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default Router