import React from "react";
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
import 'lightbox.js-react/dist/index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
  </Router>
);

root.render(
    <HttpsRedirect>
      <AppRouter />
    </HttpsRedirect>
);
