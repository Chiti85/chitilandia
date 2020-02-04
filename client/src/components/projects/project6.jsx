import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada6 from "../../images/project6/Ayoga6.png";
import ExclamationP6 from "../../images/poject1/excalamationponit.png";
import ArrowNew6 from "../../images/poject1/arrowNew.png";
import P6P1 from "../../images/project6/Ayoga1.png";
import P6P2 from "../../images/project6/Ayoga2.png";
import P6P3 from "../../images/project6/Ayoga3.png";
import P6P4 from "../../images/project6/Ayoga4.png";
import P6P5 from "../../images/project6/Ayoga5.png";
import RetroPcP6 from "../../images/poject1/pantalla-video.png";
import BbutonGmailP6 from "../../images/div9/github.png";
import BbutonBehanceP6 from "../../images/poject1/botonBehance.png";

const Project6 = () => {
  return (
    <>
      <img className="PortDtl" src={Portada6}></img>
      <img className="exclaP arrowSign" src={ExclamationP6}></img>
      <img className="pointerArw arrowSign" src={ArrowNew6}></img>
      <p className="cachP">It´s Yoga Time !!</p>
      <p className="pProjects">
        The Ayoga school in Madrid has commissioned me to write theoretical and
        didactic notebooks for their 200-hour Yoga Alliance course for teacher
        training.
      </p>
      <img className="photo2Proj" src={P6P1}></img>
      <p className="pProjects">
        This Project is a series of books that covers theory, history, exercises
        and practical examples of the Asanas, there are tecnical books oriented
        to peopel to want to learn all about yoga and a tool to teachers, to
        follow a path to cover all you can teach about yoga.
      </p>
      <img className="photo2Proj" src={P6P2}></img>
      <p className="pProjects">
        To design this series of book thinking about the students, I divide the
        serie by color to easy recocnition, space to take notes and designa n
        interior in black and White, to aboid distractions, but accompanying the
        text always images that stimulate the study and understanding.
      </p>
      <img className="photo2Proj photoXProj" src={P6P3}></img>
      <img className="photo2Proj photoXProj" src={P6P4}></img>
      <img className="photo2Proj photoXProj" src={P6P5}></img>

      <img className="pcRetro" src={RetroPcP6}></img>
      <div id="chitilandVd6">
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
          <img className="contactButtonMap" src={BbutonGmailP6}></img>
        </a>
        <a href="https://www.behance.net/concepcionbonnet" target="_blank">
          <img className="contactButtonMap" src={BbutonBehanceP6}></img>
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

export default Project6;
