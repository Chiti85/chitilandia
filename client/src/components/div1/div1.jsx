import React from "react";
import "../div1/div1.css";

import TittleA from "../../images/div1/about.png";
import Square from "../../images/div1/marco.png";
import PhotoM from "../../images/div1/foto.png";

const Div1 = () => {
  return (
    <>
      <div>
        <img className="AboutSize " src={TittleA}></img>
        <div id="containerX">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in
        </div>
        <div id="containerZ">Scroll to continue =></div>
        <div id="containerW">Scroll to continue =></div>
        <img className="squareSize " src={Square}></img>
        <img className="photoSize " src={PhotoM}></img>
      </div>
    </>
  );
};

export default Div1;
