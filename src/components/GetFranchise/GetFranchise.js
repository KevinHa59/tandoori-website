import React, { useEffect } from "react";
import "./GetFranchise.css";
import Banner from "../Banner/Banner";
import { BiDish } from "react-icons/bi";
import g9 from "../../images/g-9.jpg";

export default function GetFranchise() {
  return (
    <div className="MainContainer">
      <Banner title={"Get Franchise"} />
      <div className="GetFranchise active">
        <div className="BookCateMain">
          <div className="Title">Get Franchise Now!</div>
          <div className="IconDesign">
            <div className="Line" />
            <BiDish className="Icon" />
            <div className="Line" />
          </div>
        </div>
        <div className="PopForm">
          <form action="" className="BookCateForm">
            <div className="BookCateInput">
              <div className="Title">Fill Your Details</div>
              <div className="InputField">
                <input type="text" className="Text" placeholder="Full Name" />
                <input type="text" className="Text" placeholder="Email Address" />
                <input type="text" className="Text" placeholder="Mobile Number" />
                <input type="text" className="Text" placeholder="Message" />
                <button className="BookCateButton">SUBMIT</button>
              </div>
            </div>

            <img src={g9} alt="" className="BookCateImage" />
          </form>
        </div>
      </div>
    </div>
  );
}
