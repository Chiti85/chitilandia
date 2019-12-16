import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";

const Mardrid = () => {
  return (
    <>
      <TheMap
        cities="Madrid"
        center={{ lat: 40.420549, lng: -3.705761 }}
        zoom={14}
      />
      <h1>HELLOOOOOO!!! hijo de la grandisima puta</h1>
      <Link to={{ pathname: `/where` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Mardrid;
