import React from "react";
import "../div6/div6.css";

import TittleDiv6 from "../../images/div6/tittlediv6.png";

const Div6 = () => {
  return (
    <>
      <div className="div6Box1">
        <p id="div6Box1P">
          <strong> It is a long established fact </strong>
          <br></br>that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution.
        </p>
      </div>
      <div className="div6Box2">
        <p id="div6Box2P">
          <strong> It is a long established fact </strong>
          <br></br>that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution.
        </p>
      </div>
      <div className="div6Box3">
        <p id="div6Box3P">
          <strong> It is a long established fact </strong>
          <br></br>that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution.
        </p>
      </div>
      <div className="div6Box4">
        <p id="div6Box4P">
          <strong> It is a long established fact </strong>
          <br></br>that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution.
        </p>
      </div>
      <p className="arrow arrowColor arrowMove">==></p>
      <p className="arrow2 arrowColor arrowMove">==></p>
      <p class="movePdiv6 Pdiv6D1">2019</p>
      <p class="movePdiv6B Pdiv6D2">2018</p>
      <p class="movePdiv6 Pdiv6D3">2018</p>
      <p class="movePdiv6B Pdiv6D4">2017</p>
      <img className="titlediv6" src={TittleDiv6}></img>
    </>
  );
};

export default Div6;
