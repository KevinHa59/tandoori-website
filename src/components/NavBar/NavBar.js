import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  function hamburgerButton() {
    const Menu = document.querySelector(".Menu");
    Menu.classList.toggle("active");
  }

  useEffect(() => {
    const NavButton = document.querySelectorAll(".NavButton");
    NavButton.forEach((item) => {
      item.addEventListener("click", hamburgerButton);
    });
  }, []);

  return (
    <div className="NavBarContainer">
      <div className="NavBarMain ">
        <div className="Logo">
          <img src={logo} alt="logo" className="logoImage" />
        </div>
        <div className="HamButton" onClick={() => hamburgerButton()}>
          <GiHamburgerMenu />
        </div>
        <div className="Menu ">
          <a target={"_blank"} href="https://www.clover.com/online-ordering/tandoori-fusion-louisville" className="NavOnlineOrderButton">
            ORDER ONLINE
          </a>
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
