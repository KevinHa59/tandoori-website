import React, { useEffect } from "react";
import "./PopularDishes.css";
import { BiDish } from "react-icons/bi";
import d1 from "../../../images/d1.png";
import d2 from "../../../images/d2.png";
import d3 from "../../../images/d3.png";

export default function PopularDishes() {
  useEffect(() => {
    const container = document.querySelector(".PopDishContainer");
    setTimeout(() => {
      container.classList.add("active");
    }, 500);
  }, []);
  return (
    <div className="PopDishContainer">
      <div className="PopMain">
        <div className="Title">Our Popular Dishes</div>
        <div className="IconDesign">
          <div className="Line" />
          <BiDish className="Icon" />
          <div className="Line" />
        </div>
        <div className="PopDishPics">
          <PopularDishItem image={d1} title={"Karvepaku Manchurian"} cost={"$12.99"} />
          <PopularDishItem image={d2} title={"Full Tandoor"} cost={"$21.99"} />
          <PopularDishItem image={d3} title={"Dondakaya"} cost={"$13.99"} />
        </div>
      </div>
    </div>
  );
}

function PopularDishItem({ image, title, cost }) {
  return (
    <div className="PopDishItem">
      <img src={image} alt="" className="popImage" />
      <div className="PopDishItemTitle">{title}</div>
      <div className="PopDishItemCost">{cost}</div>
    </div>
  );
}
