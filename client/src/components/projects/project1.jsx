import React, { Component } from "react";
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <>
      <h1>AQUÍ VA EL P1</h1>
      <Link to={{ pathname: `/proj` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Project1;
