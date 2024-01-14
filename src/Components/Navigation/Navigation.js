import React, { useState } from "react";
import "../Navigation/Navigation-style.css";
import menuBar from "../../Images/menuBar.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ProductsOptListData, serviceOptListData } from "../../Data/proData";
import logo from '../../Images/logo.png';
import home from '../../Images/icons/home.png';
import home_hover from '../../Images/icons/home-hover.png';
import phone from '../../Images/icons/phone.png';
import phone_hover from '../../Images/icons/phone-hover.png'

export default function Navigation() {
  const [servicesClicked, setServicesClicked] = useState(false);
  const [productsClicked, setProductsClicked] = useState(false);
  const [isProClicked, setIsProClicked] = useState(false);
  const [isSerClicked, setIsSerClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    if (isSerClicked) {
      closeNav();
      setServicesClicked(false);
      setIsSerClicked(false);
    } else {
      setServicesClicked(true);
      setProductsClicked(false);
      openNav();
      setIsSerClicked(true);
      setIsProClicked(false);
    }
  };

  const handleProductClick = () => {
    if (isProClicked) {
      closeNav();
      setProductsClicked(false);
      setIsProClicked(false);
    } else {
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
            <a
              href={`/category?product=${subhead.uri}`}
              className={subhead.uri === type ? "activeW" : "text-grey"}
              onClick={handleServiceClick}
            >
              {subhead.title}
            </a>
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
            <a
              href={`/category?product=${product.uri}`}
              className={product.uri === type ? "activeW" : "text-grey"}
              onClick={handleProductClick}
            >
              {product.title}
            </a>
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
        className="navbar navbar-expand-lg py-2"
        style={{ backgroundColor: "#42413f", paddingTop: '10px', paddingBottom: '10px' }}
        id="navbar"
      >
        <div className="container-fluid px-xl-5 px-lg-3 px-md-3 px-2">
          <Link className="navbar-brand me-md-0" to="/">
            <img src={logo} className="img-fluid" alt="logo"/>
          </Link>

          <button
            className="navbar-toggler1 ps-md-0 ps-0 pe-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={menuBar} className="img-fluid menuBar" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "text-white" : "text-grey"}`} to="/about"> About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <div
                  className={linkClassName}
                  onClick={handleProductClick}
                >
                  Products
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={linkSerClassName}
                  onClick={handleServiceClick}
                >
                  Services
                </div>
              </li>
              <li className="nav-item">
                <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}  href="/">
                  {location.pathname === '/' ? (
                    <img src={isHovered ? home_hover : home} style={{width:'20px', marginBottom:'5px'}}/>
                  ):(
                    <img src={home_hover} style={{width:'20px', marginBottom:'5px'}}/>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href="#footer">
                    <img src={isHovered ? phone_hover : phone} style={{width:'20px', marginBottom:'5px'}} alt="footerlogo"/>
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
