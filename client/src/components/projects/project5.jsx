import React, { Component } from "react";
import { Link } from "react-router-dom";

const Project5 = () => {
  return (
    <>
      <h1>AQUÍ VA EL P5</h1>
      <Link to={{ pathname: `/proj` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Project5;
