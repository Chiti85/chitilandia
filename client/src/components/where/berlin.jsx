import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";
import "../../components/where/berlin.css";

import ChitiP from "../../images/div1/foto.png";
import Comic from "../../images/whereI/bocadillo.png";
import ContactW from "../../images/div9/gmail.png";
import downloadBT from "../../images/whereI/dwl_cv.png";
import CVCBM from "../../images/whereI/cv.pdf";

const Berlin = () => {
  return (
    <>
      <TheMap
        cities="Berlin"
        center={{ lat: 52.522317, lng: 13.413204 }}
        zoom={11}
        className="mapBerlin1"
      />
      <h1 className="helloDear">Hallo!</h1>
      <p className="wellcomeMSM">
        I love Berlin, is a city that always surprises me, when I am in there I
        love walking and enjoying the multicultural environment that it offers
        me, in the seasons in which I am in the city I usually work as
        FreeLancer and there is nothing better to start a New project that a
        talk in a nice coffeshops.
      </p>
      <div className="cotaineeer">
        <img className="photoDtailDiv2" src={ChitiP}></img>
        <img className="comicDtl" src={Comic}></img>
      </div>

      <div className="cotaineeerZ">
        <a href="mailto:macobonn@gmail.com?Subject=Hello!!%20Chiti%20let´s%20talk%20about%20new%20projects!">
          <img className="contactButtonMap" src={ContactW}></img>
        </a>

        <a href={CVCBM} download="Cv Concepción Bonnet">
          <img className="contactButtonMap" src={downloadBT}></img>
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

export default Berlin;
