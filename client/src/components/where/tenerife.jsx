import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";
import "../../components/where/berlin.css";

import ChitiP3 from "../../images/div1/foto.png";
import Comic3 from "../../images/whereI/bocadillo.png";
import ContactW3 from "../../images/div9/gmail.png";
import downBT2 from "../../images/whereI/dwl_cv.png";
import CVCBMM2 from "../../images/whereI/cv.pdf";

const Tenerife = () => {
  return (
    <>
      <TheMap
        cities="Tenerife"
        center={{ lat: 28.419077, lng: -16.404057 }}
        zoom={11}
      />
      <h1 className="helloDear">Hola!</h1>
      <p className="wellcomeMSM">
        Tenerife, an island full of surprises where I grew up, is a tropical
        paradise where I can enjoy, the sea, the food and it´s people that make
        anyone feel at home, placed near Africa this islands (are seven of them)
        are from Spain and are a spectacular place to undertake a project
        together and talk about it in any of my three favorite coffee shops on
        the island.
      </p>
      <div className="cotaineeer">
        <img className="photoDtailDiv2" src={ChitiP3}></img>
        <img className="comicDtl" src={Comic3}></img>
      </div>
      <div className="cotaineeerZ">
        <a href="mailto:macobonn@gmail.com?Subject=Hello!!%20Chiti%20let´s%20talk%20about%20new%20projects!">
          <img className="contactButtonMap" src={ContactW3}></img>
        </a>

        <a href={CVCBMM2} download="Cv Concepción Bonnet">
          <img className="contactButtonMap" src={downBT2}></img>
        </a>

        <Link to={{ pathname: `/where` }}>
          <img
            className="where contactButtonMap"
            src="../../../image/where_botton.png"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Tenerife;
