import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada4 from "../../images/project4/enclave.png";
import ExclamationP4 from "../../images/poject1/excalamationponit.png";
import ArrowNew4 from "../../images/poject1/arrowNew.png";
import P4P1 from "../../images/project4/P4P1.png";
import P4P2 from "../../images/project4/P4P2.png";
import P4P3 from "../../images/project4/P4P3.png";
import P4P4 from "../../images/project4/P4P4.png";
import RetroPcP4 from "../../images/poject1/pantalla-video.png";
import BbutonGmailP4 from "../../images/div9/gmail.png";
import BbutonBehanceP4 from "../../images/poject1/botonBehance.png";

const Project4 = () => {
  return (
    <>
      <img className="PortDtl" src={Portada4}></img>
      <img className="exclaP arrowSign" src={ExclamationP4}></img>
      <img className="pointerArw arrowSign" src={ArrowNew4}></img>
      <p className="cachP">Let's draw !!</p>
      <p className="pProjects">
        Apelestrudel is a wonderfull project that give me the oportunity to
        learn all the process of a product, the idea, the creation, the
        distribution, the comercialization and the marketing. I as a leader of a
        four people team this is one of my favourites projects.
      </p>
      <img className="photo2Proj" src={P4P1}></img>
      <p className="pProjects">
        The idea of apelestrudel is a adult activity notebook, we use one topic
        by issue and from that topic we talk about sex, drugs, politics and
        religión, with this strong topics we want that our user experiment a
        travel between our draws and their imagination the porpouse is to move
        the public and make then think.
      </p>
      <img className="photo2Proj" src={P4P2}></img>
      <img className="photo2Proj" src={P4P3}></img>
      <img className="photo2Proj" src={P4P4}></img>

      <img className="pcRetro" src={RetroPcP4}></img>
      <div id="chitilandVd4">
        <iframe
          src="https://www.youtube.com/embed/ZTTzcXSLjhI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          id="chitilandVd"
        ></iframe>
      </div>

      <div className="cotaineeerZ">
        <a href="mailto:macobonn@gmail.com?Subject=Hello!!%20Chiti%20let´s%20talk%20about%20new%20projects!">
          <img className="contactButtonMap" src={BbutonGmailP4}></img>
        </a>
        <a href="https://www.behance.net/concepcionbonnet" target="_blank">
          <img className="contactButtonMap" src={BbutonBehanceP4}></img>
        </a>

        <Link to={{ pathname: `/proj` }}>
          <img
            className="where contactButtonMap"
            src="../../../image/botonBackProject.png"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Project4;
