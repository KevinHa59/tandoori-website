import React from "react";
import "./Banner.css";
import breadcrups from "../../images/breadcrubs.jpg";
import { Link } from "react-router-dom";

export default function Banner({ title }) {
  return (
    <div className="MainBannerContainer">
      <img src={breadcrups} alt="" className="BannerPic" />
      <div className="BannerDetail">
        <div className="Title">{title}</div>
        <div className="Link">
          <Link to={"/"} className={"HomeLink"}>
            HOME
          </Link>{" "}
          // <span className="PageName">{title?.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}
