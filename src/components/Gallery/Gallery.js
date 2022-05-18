import React from "react";
import "./Gallery.css";
import Banner from "../Banner/Banner";
import g1 from "../../images/gallery/g-1.jpg";
import g2 from "../../images/gallery/g-2.jpg";
import g3 from "../../images/gallery/g-3.jpg";
import g4 from "../../images/gallery/g-4.jpg";
import g5 from "../../images/gallery/g-5.jpg";
import g6 from "../../images/gallery/g-6.jpg";
import g7 from "../../images/gallery/g-7.jpg";
import g8 from "../../images/gallery/g-8.jpg";
import g9 from "../../images/gallery/g-9.jpg";
import { BsZoomIn } from "react-icons/bs";

export default function Catering() {
  return (
    <div className="MainContainer">
      <Banner title={"Gallery"} />
      <div className="GalleryContainer">
        <div className="Main">
          <ImageItem url={g1} />
          <ImageItem url={g2} />
          <ImageItem url={g3} />
          <ImageItem url={g4} />
          <ImageItem url={g5} />
          <ImageItem url={g6} />
          <ImageItem url={g7} />
          <ImageItem url={g8} />
          <ImageItem url={g9} />
        </div>
      </div>
    </div>
  );
}

function ImageItem({ url }) {
  return (
    <div className="ImageContainer">
      <div className="Img ">
        <div className="hover">
          <BsZoomIn />
        </div>
        <img src={url} alt="" />
      </div>
    </div>
  );
}
