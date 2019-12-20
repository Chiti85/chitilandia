import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";
import "../../components/where/berlin.css";

import ChitiP2 from "../../images/div1/foto.png";
import Comic2 from "../../images/whereI/bocadillo.png";
import ContactW2 from "../../images/div9/botonmailto.png";

const Mardrid = () => {
  return (
    <>
      <TheMap
        cities="Madrid"
        center={{ lat: 40.420549, lng: -3.705761 }}
        zoom={14}
      />
      <h1 className="helloDear">Hola!</h1>
      <p className="wellcomeMSM">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).
      </p>
      <div className="cotaineeer">
        <img className="photoDtailDiv2" src={ChitiP2}></img>
        <img className="comicDtl" src={Comic2}></img>
      </div>
      <div className="cotaineeerZ">
        <a href="mailto:macobonn@gmail.com?Subject=Hello!!%20Chiti%20let´s%20talk%20about%20new%20projects!">
          <img className="contactButtonMap" src={ContactW2}></img>
        </a>
        <Link to={{ pathname: `/where` }}>
          <img
            className="where  contactButtonMap"
            src="../../../image/navbarWhere.png"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Mardrid;
