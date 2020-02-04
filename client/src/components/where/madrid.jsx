import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";
import "../../components/where/berlin.css";

import ChitiP2 from "../../images/div1/foto.png";
import Comic2 from "../../images/whereI/bocadillo.png";
import ContactW2 from "../../images/div9/gmail.png";
import downBT from "../../images/whereI/dwl_cv.png";
import CVCBMM from "../../images/whereI/cv.pdf";

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
        Madrid is a city that I know very well, it´s great to spend time in the
        city and enjoy it´s good weather in winter and it´s refreshing summers
        drinking beer in La Latina or Malasaña, that is why whenever I start a
        FreeLancer project in the city I like to go to one of these bars to get
        to know each other and establish the basics of the project in which we
        will working together.
      </p>
      <div className="cotaineeer">
        <img className="photoDtailDiv2" src={ChitiP2}></img>
        <img className="comicDtl" src={Comic2}></img>
      </div>

      <div className="cotaineeerZ">
        <a href="mailto:macobonn@gmail.com?Subject=Hello!!%20Chiti%20let´s%20talk%20about%20new%20projects!">
          <img className="contactButtonMap" src={ContactW2}></img>
        </a>

        <a href={CVCBMM} download="Cv Concepción Bonnet">
          <img className="contactButtonMap" src={downBT}></img>
        </a>

        <Link to={{ pathname: `/where` }}>
          <img
            className="where  contactButtonMap"
            src="../../../image/where_botton.png"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Mardrid;
