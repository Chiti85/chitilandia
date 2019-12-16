import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";

const Tenerife = () => {
  return (
    <>
      <TheMap
        cities="Tenerife"
        center={{ lat: 28.419077, lng: -16.404057 }}
        zoom={11}
      />
      <h1>HELLOOOOOO!!! mamarracha</h1>
      <Link to={{ pathname: `/where` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Tenerife;
