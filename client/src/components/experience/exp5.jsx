import React, { Component } from "react";
import { Link } from "react-router-dom";

const Experience5 = () => {
  return (
    <>
      <h1>AQUÍ VA EL experience 5</h1>
      <Link to={{ pathname: `/expW` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Experience5;
