import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";
import "../../components/where/berlin.css";

import ChitiP from "../../images/div1/foto.png";
import Comic from "../../images/whereI/bocadillo.png";
import ContactW from "../../images/div9/botonmailto.png";

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
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).
      </p>
      <div className="cotaineeer">
        <img className="photoDtailDiv2" src={ChitiP}></img>
        <img className="comicDtl" src={Comic}></img>
      </div>

      <div className="cotaineeerZ">
        <a href="mailto:macobonn@gmail.com?Subject=Hello!!%20Chiti%20let´s%20talk%20about%20new%20projects!">
          <img className="contactButtonMap" src={ContactW}></img>
        </a>
        <Link to={{ pathname: `/where` }}>
          <img
            className="where contactButtonMap"
            src="../../../image/navbarWhere.png"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Berlin;
