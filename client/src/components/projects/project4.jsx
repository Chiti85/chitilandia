import React, { Component } from "react";
import { Link } from "react-router-dom";

const Project4 = () => {
  return (
    <>
      <h1>AQUÍ VA EL P4</h1>
      <Link to={{ pathname: `/proj` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Project4;
