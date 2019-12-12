import React, { Component } from "react";
import { Link } from "react-router-dom";

const Experience3 = () => {
  return (
    <>
      <h1>AQUÍ VA EL experience 3</h1>
      <Link to={{ pathname: `/expW` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Experience3;
