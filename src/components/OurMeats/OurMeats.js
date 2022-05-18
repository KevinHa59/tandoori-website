import React from "react";
import "./OurMeats.css";
import Banner from "../Banner/Banner";
import chickencut from "../../images/chickencut.jpg";
import lamb from "../../images/lamb.jpg";
import halal from "../../images/halal.jpg";

export default function OurMeats() {
  return (
    <div className="MainContainer">
      <Banner title={"Our Meats"} />
      <div className="OurMeatsContainer">
        <div className="Section">
          <div className="SectionMain">
            <div className="Description">
              <p className="Title">Fresh Chicken</p>
              <p className="SubTitle">We Source The Best Quality, Handpicked, Fresh, Halal Meat From The Most Reliable Suppliers</p>
              <p className="Detail">
                Chicken is hand slaughtered every week by Muslim butcher. Each chicken we slaughter we say in the name of Allah ‘Bismillahi
                Allahu Akbar’. The chickens are fed the normal diet and all naturally grown that is Food and Drug Administrations (FDA)
                Approved. Our chickens are fed the normal diet and NO Antibiotic, No Animal fat feed, and No chemical inject are
                administered to the chicken. The chicken is supplied the same day it is slaughtered. Product is also certified in kosher
                variety.
              </p>
            </div>
            <img src={chickencut} alt="" className="OutMeatPic" />
          </div>
        </div>
        <div className="Section">
          <div className="SectionMain">
            <img src={lamb} alt="" className="OutMeatPic" />
            <div className="Description">
              <p className="Title">Goat / Lamb</p>
              <p className="Detail gap">Free range, pasture raised</p>
              <p className="Detail gap">100% Natural</p>
              <p className="Detail gap">Independently audited animals</p>
              <p className="Detail gap">Certified HALAL</p>
              <p className="Detail">Our Meat is inspected and approved by USDA to ensure that the meat is safe.</p>
            </div>
          </div>
        </div>
        <div className="Section">
          <div className="SectionMain">
            <div className="Description">
              <p className="Title">Halal</p>
              <p className="Detail line">
                The term “Halal” is an Arabic word meaning lawful or allowed in accordance to the Islamic law. In the Islamic faith, God
                (Allah) says “O people! Eat what is on earth, lawful (Halal) and good…” (Al-Quran 2:168)
              </p>
            </div>
            <img src={halal} alt="" className="OutMeatPic" />
          </div>
        </div>
      </div>
    </div>
  );
}
