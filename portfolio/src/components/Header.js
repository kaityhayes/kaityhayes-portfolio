import { useLocation } from "react-router-dom";
import headerImage from "../assets/HeaderImage.png";
import React, { useState, useEffect } from "react";


function Header() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");


  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("Home Page");
        break;
      case "/about":
        setPageTitle("About Page");
        break;
      case "/contact":
        setPageTitle("Contact Page");
        break;
      case "/projects":
        setPageTitle("Projects Page");
        break;
      default:
        setPageTitle("");
    }
  }, [location]);

  return (
    <div className="relative">
      <img src={headerImage} alt="Header Image" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-3xl font-bold text-black text-center">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
}

export default Header;
