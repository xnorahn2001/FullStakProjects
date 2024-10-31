import { createBrowserRouter,RouterProvider,}
 from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Navbar/Layout";
import Homepage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetails";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/productdetails",
          element: <ProductDetail/>,
        },
      ]
    },
  ]);
  return (

    <>
<RouterProvider router={router} />

    </>
       
  );
}

export default App;