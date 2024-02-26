import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./Responsive.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import HttpsRedirect from "react-https-redirect";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Category from "./Components/Category/Category";
// import Dashbord from "./Admin/Dashbord";
// import AddProductImage from "./Admin/AddProductImage";
// import AddProductDetails from "./Admin/AddProductDetails";
// import EditProductDetails from "./Admin/EditProductDetails";
// import ProductsShows from "./Admin/ProductsShows";
// import Products from "./Admin/Products";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/admin" element={<admin/>} /> */}
        {/* <Route path="/admin" element={<Dashbord/>} />
        <Route path="/admin/add-product-images" element={<AddProductImage/>} />
        <Route path="/admin/add-product-details" element={<AddProductDetails/>} />
        <Route path="/admin/edit-product-details/:id" element={<EditProductDetails/>} />
        <Route path="/admin/products" element={<ProductsShows/>} /> */}
      </Route>
    </Routes>
  </Router>
);

root.render(
  // <React.StrictMode>
    <HttpsRedirect>
      <AppRouter />
    </HttpsRedirect>
  // </React.StrictMode>
);
