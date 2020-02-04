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
          <div id="wellcomed1">Hello and Welcome to my Web CV!!</div>
          <br></br>
          <br></br>
          My name is Concepción Bonnet and I invite you to explore my
          professional experience, skills and projects so that you can know
          better my professional side; on the other hand personally I am a
          creative and restless person who loves to discover new things ,
          experiment and pizza !!
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
