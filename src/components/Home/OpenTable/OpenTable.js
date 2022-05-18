import React, { useEffect } from "react";
import { BiDish } from "react-icons/bi";
import "./OpenTable.css";

export default function OpenTable() {
  return (
    <div className="PopDishContainer OpenTable BGWhite active">
      <div className="PopMain">
        <div className="Title">Tandoori Fusion - Open Table</div>
        <div className="IconDesign">
          <div className="Line" />
          <BiDish className="Icon" />
          <div className="Line" />
        </div>
        <a
          href="https://www.opentable.com/r/tandoori-fusion-louisville?originId=2&corrid=dcfe92fe-b39f-4627-a5f1-fb2a15aaa020&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2020-12-04T00%3A00%3A00"
          target={"_blank"}
          className="OpenTableButton"
        >
          Tandoori Fusion - Open Table
        </a>
      </div>
    </div>
  );
}
