import React, { Component } from "react";

import Background1 from "../../images/div1/background1-01.png";
import Background2 from "../../images/div2/backgroun2-01.png";
import Background3 from "../../images/div3/background3-01.png";
import Background4 from "../../images/div4/background-div4-01.png";
import Background5 from "../../images/div5/background-div5-01.png";
import Background6 from "../../images/div6/background6-01.png";
import Background7 from "../../images/div7/background7-01.png";
import Background8 from "../../images/div8/background8-01.png";
import Background9 from "../../images/div9/background9-01.png";

import "../backgrounds/background.css";

const Background = () => {
  return (
    <>
      <div>
        <img className="backgroundSize backgroundP1 " src={Background1}></img>
        <img className="backgroundSize backgroundP2 " src={Background2}></img>
        <img className="backgroundSize backgroundP3 " src={Background3}></img>
        <img className="backgroundSize backgroundP4 " src={Background4}></img>
        <img className="backgroundSize backgroundP5 " src={Background5}></img>
        <img className="backgroundSize backgroundP6 " src={Background6}></img>
        <img className="backgroundSize backgroundP7 " src={Background7}></img>
        <img className="backgroundSize backgroundP8 " src={Background8}></img>
        <img className="backgroundSize backgroundP9 " src={Background9}></img>
      </div>
    </>
  );
};

export default Background;
