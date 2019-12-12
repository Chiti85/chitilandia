import React, { Component } from "react";
import { Link } from "react-router-dom";

const Tenerife = () => {
  return (
    <>
      <h1>HELLOOOOOO!!! mamarracha</h1>
      <Link to={{ pathname: `/where` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Tenerife;
