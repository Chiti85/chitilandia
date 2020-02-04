import React from "react";
import "../div6/div6.css";

import TittleDiv6 from "../../images/div6/tittlediv6.png";
import downloadBTd6 from "../../images/whereI/dwl_cv.png";
import CVCBMd6 from "../../images/whereI/cv.pdf";

const Div6 = () => {
  return (
    <>
      <div className="div6Box1">
        <div id="tittlePDv6"> Alma Corporation</div>
        <p id="div6Box1P">
          <br></br>
          <strong> Designer Graphic</strong>
          <br></br>
          As a graphic designer inside of this international corporation I had
          the opportunity to bring my creativity into campaigns, products and
          branding.
        </p>
      </div>
      <div className="div6Box2">
        <div id="tittlePDv6"> Leismo Shortfilm </div>
        <p id="div6Box2P">
          <br></br>
          <strong>Production + Script</strong>
          <br></br>
          leismo is a shortfilm, a low budget proyect that participed in
          Notodofilm Fest, in this proyect I write the history and was in charge
          of the Production.
        </p>
      </div>
      <div className="div6Box3">
        <div id="tittlePDv6"> Graphic designer</div>
        <p id="div6Box3P">
          <br></br>
          <strong> Freelancer</strong>
          <br></br>
          After working for three years in the startup emviroment I begin a new
          stage and started to working as a freelancer.
        </p>
      </div>
      <div className="div6Box4">
        <div id="tittlePDv6"> Studio Martina Flor </div>
        <p id="div6Box4P">
          <br></br>
          <strong>Intership</strong>
          <br></br>
          As result of my partisipation on the program EYE (Erasmus Young
          Entrepreneur) I started a intership in this studio directed by Martina
          Flor in Berlin.
        </p>
      </div>
      <p className="arrow arrowColor arrowMove">==></p>
      <p className="arrow2 arrowColor arrowMove">==></p>
      <p class="movePdiv6 Pdiv6D1">2019</p>
      <p class="movePdiv6B Pdiv6D2">2018</p>
      <p class="movePdiv6 Pdiv6D3">2018</p>
      <p class="movePdiv6B Pdiv6D4">2017</p>
      <img className="titlediv6" src={TittleDiv6}></img>

      <a href={CVCBMd6} download="Cv Concepción Bonnet">
        <img className="Cvdownload" src={downloadBTd6}></img>
      </a>
    </>
  );
};

export default Div6;
