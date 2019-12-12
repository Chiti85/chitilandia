import React, { Component } from "react";
import { Link } from "react-router-dom";

const Berlin = () => {
  return (
    <>
      <h1>HELLOOOOOO!!! Motherfucker</h1>
      <Link to={{ pathname: `/where` }}>
        <img className="where" src="../../image/next button G.png"></img>
      </Link>
    </>
  );
};

export default Berlin;
