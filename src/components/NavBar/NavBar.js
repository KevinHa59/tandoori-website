import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBarContainer">
      <div className="NavBarMain">
        <div className="Logo">
          <img src={logo} alt="logo" className="logoImage" />
        </div>
        <div className="Menu">
          <button className="NavOnlineOrderButton">ORDER ONLINE</button>
          <Link to={"/"} className="NavButton">
            HOME
          </Link>
          <Link to={"/about"} className="NavButton">
            ABOUT
          </Link>
          <Link to={"/ourmeats"} className="NavButton">
            OUR MEATS
          </Link>
          <a
            href="https://www.ezcater.com/catering/tandoori-fusion-3?filter%5Bfood_type%5D=9&filter%5Bpackaging%5D=1"
            className="NavButton"
            target={`_blank`}
          >
            CATERING
          </a>
          <Link to={"/gallery"} className="NavButton">
            GALLERY
          </Link>
          <Link to={"/contactus"} className="NavButton">
            CONTACT US
          </Link>
          <Link to={"/getfranchise"} className="NavButton">
            GET FRANCHISE
          </Link>
        </div>
      </div>
    </div>
  );
}
