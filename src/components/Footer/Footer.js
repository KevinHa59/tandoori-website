import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="FooterContainer ">
      <div className="FooterMain ">
        <div className="ContactUs ">
          <div className="SectionHeader">Contact US</div>
          <div className="SectionDetail">
            <p>Address: 4600 Chamberlain Lane</p>
            <p>Louisville, KY 40241</p>
            <br />
            <p>Email:tandoori@thetandoorifusion.com</p>
            <br />
            <p>Phone:(502) 255-2590</p>
          </div>
        </div>
        <div className="OpenHours ">
          <div className="SectionHeader">Open Hours</div>
          <div className="SectionDetail">
            <strong>Sunday</strong>
            <br />
            Lunch: 11:30 AM - 3:00 PM
            <br />
            Dinner: 5:00 PM - 9:30 PM
            <br />
            <strong>Monday</strong>
            <br />
            Lunch:<strong>Closed</strong>
            <br />
            Dinner: 5:00 PM - 9:30 PM
            <br />
            <strong>Tuesday - Thursday</strong>
            <br />
            Lunch: 11:30 AM - 2:30 PM
            <br />
            Dinner: 5:00 PM - 9:30 PM
            <br />
            <strong>Friday</strong>
            <br />
            Lunch: 11:30 AM - 2:30 PM
            <br />
            Dinner: 5:00 PM - 10:00 PM
            <br />
            <strong>Saturday</strong>
            <br />
            Lunch: 11:30 AM - 3:00 PM
            <br />
            Dinner: 5:00 PM - 10:00 PM
          </div>
        </div>
        <div className="Instagram">
          <div className="SectionHeader">Social Media</div>
          <div className="SectionDetail">
            <p>
              <BsInstagram /> Instagram
            </p>
            <p>
              <a href="https://www.facebook.com/AuthenticIndianfusionfood/">
                <BsFacebook /> Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="CopyRight ">Copyright © 2021. All Rights Reserved</div>
    </div>
  );
}
