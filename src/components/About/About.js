import React from "react";
import "./About.css";
import Banner from "../Banner/Banner";

export default function About() {
  return (
    <div className="MainContainer">
      <Banner title={"About Us"} />
      <div className="AboutContainer">About</div>
    </div>
  );
}
