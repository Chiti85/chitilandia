import React from "react";
import "../div7/div7.css";

import CircleB from "../../images/div7/circuloazul.png";
import CircleY from "../../images/div7/circulo-amarillo.png";
import HeadDv7 from "../../images/div7/cabeza.png";
import Atomo7 from "../../images/div7/atomo.png";
import Rueda1D7 from "../../images/div7/rueda1.png";
import Rueda2D7 from "../../images/div7/rueda2.png";
import Bombilla from "../../images/div7/bombilla.png";
import Lumin from "../../images/div7/brillo-bombilla.png";
import tittleDiv7 from "../../images/div7/tittlediv7.png";

const Div7 = () => {
  return (
    <>
      <img className="tittleDet7" src={tittleDiv7}></img>
      <img className="heatDet" src={HeadDv7}></img>
      <img className="circle1Det rotationA" src={CircleB}></img>
      <img className="circle2Det" src={CircleY}></img>
      <img className="atomoDet rotationB" src={Atomo7}></img>
      <img className="rueda1Det rotationA" src={Rueda1D7}></img>
      <img className="rueda2Det rotationB" src={Rueda2D7}></img>
      <img className="bombiDet" src={Bombilla}></img>
      <img className="luminDet luminOpa" src={Lumin}></img>
      <p id="proact">PROACTIVE</p>
      <p id="leader">LEADERSHIP</p>
      <p id="manage">TEAM MANAGEMENT</p>
      <p id="work">TEAM WORK</p>
    </>
  );
};

export default Div7;
