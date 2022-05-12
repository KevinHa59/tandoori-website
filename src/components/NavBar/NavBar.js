import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";

export default function NavBar() {
  return (
    <div className="NavBarContainer">
      <div className="NavBarMain">
        <div className="Logo">
          <img src={logo} alt="logo" className="logoImage" />
        </div>
        <div className="Menu">
          <button className="NavOnlineOrderButton">ORDER ONLINE</button>
          <button className="NavButton">HOME</button>
          <button className="NavButton">ABOUT</button>
          <button className="NavButton">OUR MEATS</button>
          <button className="NavButton">CATERING</button>
          <button className="NavButton">GALLERY</button>
          <button className="NavButton">CONTACT US</button>
          <button className="NavButton">GET FRANCHISE</button>
        </div>
      </div>
    </div>
  );
}
