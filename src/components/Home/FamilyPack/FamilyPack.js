import React, { useEffect } from "react";
import "./FamilyPack.css";
import imgFPack from "../../../images/FamilyPack.png";

export default function FamilyPack() {
  useEffect(() => {
    const container = document.querySelector(".FPackContainer");
    setTimeout(() => {
      container.classList.add("active");
    }, 500);
  }, []);
  return (
    <div className="FPackContainer">
      <div className="AboutMain">
        <div className="Right">
          <img src={imgFPack} alt="" className="FPack" />
        </div>
        <div className="Left">
          <div className="Title">Biryani Family Packs Available</div>
          <div className="Description">
            Tandoori Fusion brings in a rotating roster of chefs that have been classically trained in both southern and northern Indian
            recipes. These chefs have been trained all over the world, and we're lucky enough to have them as a part of the story that is
            Tandoori Fusion. The faces may change, but the quality of our dishes certainly doesn't!
          </div>
        </div>
      </div>
    </div>
  );
}
