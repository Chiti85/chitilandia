import React, { Component } from "react";
import { Link } from "react-router-dom";
import TheMap from "../maps/map";

const Berlin = () => {
  return (
    <>
      <TheMap
        cities="Berlin"
        center={{ lat: 52.522317, lng: 13.413204 }}
        zoom={11}
      />
      <h1>HELLOOOOOO!!! Motherfucker</h1>
      <Link to={{ pathname: `/where` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Berlin;
