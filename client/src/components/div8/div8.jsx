import React from "react";
import "../div8/div8.css";

import LogoLeinn from "../../images/div8/image (18).png";
import LogoLeinnSh from "../../images/div8/Leinn-logo-sombra.png";
import LogoComplu from "../../images/div8/image (20).png";
import LogoCompluSH from "../../images/div8/logo-complu-sombra.png";
import LogoIronH from "../../images/div8/logo-ironhack.png";
import LogoIronHSH from "../../images/div8/logo-iron-sombra.png";
import LogoUax from "../../images/div8/image (19).png";
import LogoUaxSH from "../../images/div8/logo-uAX-sombra.png";
import TittleDiv8 from "../../images/div8/tittlediv8.png";
import UKFlag from "../../images/div8/ukflag.png";
import SPFlag from "../../images/div8/Spflag.png";
import BZFlag from "../../images/div8/Bzflag.png";

const Div8 = () => {
  return (
    <>
      <div id="SQBorder">
        <img id="SQBorder" className="BZDt" src={BZFlag}></img>
        <img id="SQBorder" className="UKDt" src={UKFlag}></img>
        <img id="SQBorder" className="SPDt" src={SPFlag}></img>
      </div>
      <img className="Div8TittleDt" src={TittleDiv8}></img>
      <img className="leinnDt logomoveDiv8" src={LogoLeinn}></img>
      <img className="leinnDtSh logomoveDiv8" src={LogoLeinnSh}></img>
      <p id="textLeinn">
        LEINN Bilingual Degree <br></br>University of Mondragón 2014 - 2016
      </p>
      <img className="ironDt logomoveDiv8B" src={LogoIronH}></img>
      <img className="LogoIronHSH logomoveDiv8B" src={LogoIronHSH}></img>
      <p id="textIron">
        Web Development Bootcamp <br></br>Ironhack, Madrid 2019
      </p>
      <img className="compluDt logomoveDiv8B" src={LogoComplu}></img>
      <img className="compluDtSh logomoveDiv8B" src={LogoCompluSH}></img>
      <p id="textComplu">
        Audiovisual Communication <br></br>Complutense University of Madrid 2017
      </p>
      <img className="uaxDt logomoveDiv8" src={LogoUax}></img>
      <img className="uaxDtSh logomoveDiv8" src={LogoUaxSH}></img>
      <p id="textUax">
        Degree in Pharmacy <br></br>University Alfonso X, Madrid <br></br> 2013
      </p>
    </>
  );
};

export default Div8;
