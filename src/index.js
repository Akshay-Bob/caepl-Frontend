import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Responsive.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import HttpsRedirect from "react-https-redirect";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Category from "./Components/Category/Category";
import AddProducts from "./admin/Products/AddProducts";
import EditProducts from "./admin/Products/EditProducts";
import EditBannerImg from "./admin/BannerImage/EditBannerImg";
import AdminApp from "./admin/AdminApp";
import AllProducts from "./admin/Products/AllProducts";
import AllBannerImg from "./admin/BannerImage/AllBannerImg";
import AddBannerImg from "./admin/BannerImage/AddBannerImg";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/admin",
        element: <AdminApp />,
        children: [
          {
            path: "/admin/product",
            element: <AllProducts />,
          },
          {
            path: "/admin/add-product",
            element: <AddProducts/>,
          },
          {
            path: "/admin/edit-product/:id",
            element: <EditProducts/>,
          },
          {
            path: "/admin/banner-images",
            element: <AllBannerImg/>,
          },
          {
            path: "/admin/add-banner-image",
            element: <AddBannerImg/>,
          },
          {
            path: "/admin/edit-banner-image/:id",
            element: <EditBannerImg/>,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HttpsRedirect>
      <RouterProvider router={router} />
    </HttpsRedirect>
  </React.StrictMode>
);
