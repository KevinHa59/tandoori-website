import React, { useEffect } from "react";
import { BiDish } from "react-icons/bi";
import "./BookCatering.css";
import g9 from "../../../images/g-9.jpg";
export default function BookCatering() {
  useEffect(() => {
    const container = document.querySelector(".BookCateContainer");
    setTimeout(() => {
      container.classList.add("active");
    }, 500);
  }, []);
  return (
    <div className="BookCateContainer">
      <div className="BookCateMain">
        <div className="Title">Book Your Catering Now</div>
        <div className="IconDesign">
          <div className="Line" />
          <BiDish className="Icon" />
          <div className="Line" />
        </div>
      </div>
      <div className="PopForm">
        <form action="" className="BookCateForm">
          <div className="BookCateInput">
            <div className="Title">Catering Form</div>
            <div className="InputField">
              <input type="text" className="Text" placeholder="Full Name" />
              <input type="text" className="Text" placeholder="Email Address" />
              <input type="text" className="Text" placeholder="Mobile Number" />
              <input
                type="date"
                value={new Date().toLocaleDateString("en-ca")}
                className="Text"
                min={new Date().toLocaleDateString("en-ca")}
              />
              <button className="BookCateButton">READ MORE</button>
            </div>
          </div>

          <img src={g9} alt="" className="BookCateImage" />
        </form>
      </div>
    </div>
  );
}
