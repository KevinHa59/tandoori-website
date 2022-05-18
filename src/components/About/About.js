import React from "react";
import "./About.css";
import Banner from "../Banner/Banner";
import about from "../../images/about.jpg";
import Owner from "../../images/Owner.jpg";

export default function About() {
  return (
    <div className="MainContainer">
      <Banner title={"About Us"} />
      <div className="AboutContainer ">
        <div className="Section ">
          <div className="SectionMain flexEnd ">
            <div className="Description left ">
              <p className="Title">Explore The Real Taste of Indian Kitchen </p>
              <p className="Detail">
                Tandoori Fusion was born out of a desire by Purna Veer, our founder, to bring the dishes of his home country, India, to his
                home of Louisville, Kentucky – with a little modern flare. We believe in a farm-to-table philosophy – with some of our
                fruits and vegetables coming straight from Veering Creek. Simply put, we believe people should be able to eat well, eat
                local, and enjoy new flavors as well as familiar ones.
              </p>
              <br />
              <p className="Detail">
                Tandoori Fusion is located just off Chamberlain Lane. We hope you will join us soon, we'd love to have you at our table.
              </p>
            </div>
            <img src={about} alt="" className="AboutImage" />
          </div>
        </div>
        <div className="Section">
          <div className="SectionMain flexStart">
            <img src={Owner} alt="" className="OwnerImage" />
            <div className="OwnerDescription">
              <p className="Title red">PURNA VEER, OWNER</p>
              <p className="Detail">
                Purna Veer, our owner, had a vision for an authentic Indian restaurant that came from his passion for bringing people
                together and his desire to share the flavors of his home country with a Bluegrass flare. Out of this devotion for creating
                excellence, Tandoori Fusion was born. Purna is an accomplished leader in the IT Services field and is the president of
                V-Soft Consulting, a Louisville, KY based staffing firm that was named one of the Best Places to Work in Kentucky the past
                three years. In addition to his success with V-Soft, Purna owns Veering Creek Farm, a farm and vineyard in Smithfield, KY
                that boasts the largest hops yard in the state of Kentucky. Veering Creek also provides farm-to-table produce for Tandoori
                Fusion.
              </p>
              <br />
              <p className="Title">MANAGEMENT</p>
              <p className="Detail">
                Vasu has recently joined the Tandoori family as Manager of our restaurant. Vasu is from Hyderabad, India and brings his love
                of authentic cuisine to Tandoori. While Vasu has a Bachelor’s from the National Council of Hospitality and an MBA from
                Johnson and Wales University his true passion is for farm to table Indian cuisine. Vasu focuses on ensuring our staff make
                your Tandoori Fusion experience one to remember.
              </p>
              <br />
              <p className="Title">ROTATING CLASSICALLY TRAINED INDIAN CHEFS</p>
              <p className="Detail">
                Tandoori Fusion brings in a rotating roster of chefs that have been classically trained in both southern and northern Indian
                recipes. These chefs have been trained all over the world, and we're lucky enough to have them as a part of the story that
                is Tandoori Fusion. The faces may change, but the quality of our dishes certainly doesn't!
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
