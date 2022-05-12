import React, { useEffect } from "react";
import "./About.css";
import formbg from "../../../images/formbg.jpg";

export default function About() {
  useEffect(() => {
    const container = document.querySelector(".HomeAboutContainer");
    setTimeout(() => {
      container.classList.add("active");
    }, 500);
  }, []);
  return (
    <div className="HomeAboutContainer">
      <div className="AboutMain">
        <div className="Left">
          <div className="Title">About Tandoori Fusion</div>
          <div className="Description">
            Tandoori Fusion was born out of a desire by Purna Veer, our founder, to bring the dishes of his home country, India, to his home
            of Louisville, Kentucky. We believe in a farm-to-table philosophy – with some of our fruits and vegetables coming straight from
            Veering Creek located in Louisville, Kentucky. Simply put, we believe people should be able to eat well, eat local, and enjoy
            new flavors as well as familiar ones.
          </div>
          <button className="AboutButton">READ MORE</button>
        </div>
        <div className="Right">
          <img src={formbg} alt="" />
        </div>
      </div>
    </div>
  );
}
