import React, { useState } from "react";
import "../Navigation/Navigation-style.css";
import menuBar from "../../Images/menuBar.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { serviceData } from "../ProductSec/Product";
import { ProductsOptListData, serviceOptListData } from "../../Data/proData";
import useFetchApi from "../../Data/fetchApi";
import logo from '../../Images/logo.png';


export default function Navigation() {
  const [servicesClicked, setServicesClicked] = useState(false);
  const [productsClicked, setProductsClicked] = useState(false);
  const [isProClicked, setIsProClicked] = useState(false);
  const [isSerClicked, setIsSerClicked] = useState(false);
  const [prodList, setprodList] = useState(false);

  var screenWidth = window.innerWidth;

  const openNav = () => {
    if (screenWidth <= 676) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("closebtn").style.display = "block";
    } else if (screenWidth <= 1023) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("closebtn").style.display = "block";
    } else if (screenWidth <= 1365) {
      document.getElementById("mySidenav").style.width = "50%";
      document.getElementById("closebtn").style.display = "block";
    } else {
      document.getElementById("mySidenav").style.width = "39.5%";
      document.getElementById("closebtn").style.display = "block";
    }
  };
  

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closebtn").style.display = "none";
    setServicesClicked(false);
    setProductsClicked(false);
    setIsSerClicked(false);
    setIsProClicked(false);
  };

  const handleServiceClick = () => {
    // If the service menu is open, close it
    if (isSerClicked) {
      closeNav();
      setServicesClicked(false);
      setIsSerClicked(false);
    } else {
      // If the service menu is closed, open it
      setServicesClicked(true);
      setProductsClicked(false);
      openNav();
      setIsSerClicked(true);
      setIsProClicked(false);
    }
  };

  const handleProductClick = () => {
    // If the product menu is open, close it
    if (isProClicked) {
      closeNav();
      setProductsClicked(false);
      setIsProClicked(false);
    } else {
      // If the product menu is closed, open it
      setProductsClicked(true);
      setServicesClicked(false);
      openNav();
      setIsProClicked(true);
      setIsSerClicked(false);
    }
  };

  const linkClassName = isProClicked
    ? "nav-link text-white"
    : "nav-link text-grey";

  const linkSerClassName = isSerClicked
    ? "nav-link text-white"
    : "nav-link text-grey";

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const type = urlParams.get("product");

  const serviceOptList = serviceOptListData.map((service) => (
    <div className="dropDownList" key={service.id}>
      <h3>{service.heading}</h3>
      <ul>
        {service.subHead.map((subhead) => (
          <li key={subhead.id}>
            <Link
              to={`/category?product=${subhead.uri}`}
              className={subhead.uri === type ? "activeW" : "text-grey"}
              onClick={handleServiceClick}
            >
              {subhead.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));

  const productsOptList = ProductsOptListData.map((product) => (
    <div className="dropDownList" key={product.id}>
      <h3>{product.heading}</h3>
      <ul>  
        {product.subHead.map((product) => (
          <li key={product.id}>
            <Link
              to={`/category?product=${product.uri}`}
              className={product.uri === type ? "activeW" : "text-grey"}
              onClick={handleProductClick}
            >
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));

  const [scrolltopdata, setScrolltopdata] = useState("");
  const changeValonScroll = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 100) {
      setScrolltopdata(true);
    } else {
      setScrolltopdata(false);
    }
  };
  window.addEventListener("scroll", changeValonScroll);
  return (
    <div id="header" className={scrolltopdata ? "positionFixed" : ""}>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#42413f" }}
        id="navbar"
      >
        <div className="container-fluid px-xl-5 px-lg-3 px-md-3 px-2">
          <Link className="navbar-brand me-md-0" to="/">
            <img src={logo} className="img-fluid"/> 
          </Link>

          <button
            className="navbar-toggler1 ps-md-0 ps-0 pe-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <img src={BurgerIcon} className='img-fluid'/> */}
            <img src={menuBar} className="img-fluid menuBar" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-white" : "text-grey"}`
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className={linkClassName}
                  href="#"
                  onClick={handleProductClick}
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={linkSerClassName}
                  href="#"
                  onClick={handleServiceClick}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-white" : "text-grey"}`
                  }
                  to="/"
                >
                  <i className="fa-solid fa-house-chimney fs-7"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  <i className="fa-solid fa-phone fs-7"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={closeNav} id="closebtn">
          &times;
        </a>
        <div>
          {servicesClicked ? serviceOptList : null}
          {productsClicked ? productsOptList : null}
        </div>
      </div>
    </div>
  );
}
