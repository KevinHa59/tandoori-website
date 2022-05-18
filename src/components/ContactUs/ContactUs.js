import React from "react";
import "./ContactUs.css";
import Banner from "../Banner/Banner";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import formbg from "../../images/formbg.jpg";
export default function ContactUs() {
  return (
    <div className="MainContainer">
      <Banner title={"Contact Us"} />
      <div className="ContactUsContainer">
        <div className="Section">
          <div className="SectionMain">
            <div className="Item">
              <div className="icon bd">
                <FaPhoneAlt />
              </div>
              (502) 255-2590
            </div>
            <div className="Item">
              <div className="icon">
                <BiBasketball />
              </div>
              tandoori@thetandoorifusion.com
            </div>
            <div className="Item">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <p>4600 Chamberlain Lane, </p>
              <p>Louisville, KY 40241</p>
            </div>
          </div>
        </div>
        <div className="Section ContactSize">
          <img src={formbg} alt="" className="ContactBG" />
          <div className="MapEmbedContainer ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6444.7713580946875!2d-85.56991081658454!3d38.31075996802515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88699e7d0e1c9f73%3A0xf22cfe53c9d61c89!2sTANDOORI%20FUSION%20-%20INDIAN%20RESTAURANT!5e0!3m2!1sen!2sus!4v1652805066891!5m2!1sen!2sus"
              height="500"
              loading="lazy"
              className="MapEmbed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
