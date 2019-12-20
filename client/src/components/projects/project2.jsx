import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada2 from "../../images/project2/champu zebra.png";
import Photo22 from "../../images/project2/base zebra.png";
import Photo23 from "../../images/project2/base oso.png";
import Photo24 from "../../images/project2/base medusa.png";
import Photo25 from "../../images/project2/base elefante.png";
import BackPhoto from "../../images/project2/fodop2prj.png";

const Project2 = () => {
  return (
    <>
      <img className="PortDtl3" src={Portada2}></img>
      <p className="pProjects">
        I am in charge of the project to create the image of the new shampoos
        Marco Aldany, for the largest chain of hairdressers in Spain,
        hairdressers Marco Aldany, and plans to take this line and fully
        integrate it into the market in a period of three years. The first
        proposals of the project are based on the traditional corporate colors
        of the brand, I wanted the stain created in the supermarket showcases to
        shout the name of the brand to the public eye.
      </p>
      <img className="photo2Proj" src={Photo22}></img>
      <p className="subtittlePDtl">Animal series 1 (Yellow)</p>
      <img className="photo2Proj" src={Photo23}></img>
      <p className="subtittlePDtl">Animal series 3 (Orange) </p>
      <p className="pProjects">
        As a final result it was decided to combine these two last proposals,
        the bicolor and the animal, as a result this is the definitive
        collection.
      </p>
      <img className="photo2Proj" src={Photo24}></img>
      <p className="subtittlePDtl">Animal series 2 (Blue) </p>
      <img className="photo2Proj" src={Photo25}></img>
      <p className="subtittlePDtl">Animal series 4 (Green) </p>
      <img className="PortDtl2" src={BackPhoto}></img>
      <Link to={{ pathname: `/proj` }}>
        <img
          className="where bottonBack"
          src="../../../image/navbarProjects.png"
        ></img>
      </Link>
    </>
  );
};

export default Project2;
