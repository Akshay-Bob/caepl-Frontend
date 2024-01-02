import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Pages/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
