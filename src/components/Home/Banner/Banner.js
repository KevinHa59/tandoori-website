import React, { useEffect, useState } from "react";
import "./Banner.css";
import formbg from "../../../images/formbg.jpg";

export default function Banner() {
  let text = ["QUALITY", "TASTY", "DELICIOUS", "HEALTHY"];
  let textId = 0;
  const [showText, setShowText] = useState(text[textId]);

  useEffect(() => {
    const SloganUpdateText = document.querySelector(".SloganUpdateText");
    setInterval(() => {
      SloganUpdateText.classList.add("active");

      textId++;
      if (textId > 3) {
        textId = 0;
      }
      setShowText(text[textId]);
      setTimeout(() => {
        SloganUpdateText.classList.remove("active");
      }, 1700);
    }, 2000);
  }, [textId]);

  return (
    <div className="BannerContainer">
      <img src={formbg} alt="" className="BannerImage" />
      <div className="BannerMain">
        <div className="Welcome">Welcome Tandoori Fusion</div>
        <div className="Slogan">
          LOVES <div className="SloganUpdateText">{showText}</div> FOOD
        </div>
        <div className="Description">
          <p>Tandoori Fusion is an Authentic Indian restaurant specializing in Southern and Northern Indian Cuisine.</p>
          <p>Come join us at our Louisville, Kentucky location for a meal you'll never forget.</p>
        </div>
        <button className="BannerButton">ORDER NOW</button>
      </div>
    </div>
  );
}
