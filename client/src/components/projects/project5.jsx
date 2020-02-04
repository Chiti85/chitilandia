import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada5 from "../../images/project 5/bigOneP5.png";
import ExclamationP5 from "../../images/poject1/excalamationponit.png";
import ArrowNew5 from "../../images/poject1/arrowNew.png";
import P5P1 from "../../images/project 5/2.png";
import P5P2 from "../../images/project 5/3.png";
import P5P3 from "../../images/project 5/4.png";
import P5P4 from "../../images/project 5/5.png";
import P5P5 from "../../images/project 5/6.png";
import RetroPcP5 from "../../images/poject1/pantalla-video.png";
import BbutonGmailP5 from "../../images/div9/gmail.png";
import BbutonBehanceP5 from "../../images/poject1/botonBehance.png";

const Project5 = () => {
  return (
    <>
      <img className="PortDtl" src={Portada5}></img>
      <img className="exclaP arrowSign" src={ExclamationP5}></img>
      <img className="pointerArw arrowSign" src={ArrowNew5}></img>
      <p className="cachP">A Diary 2.0 !!</p>
      <p className="pProjects">
        Dayland is a project developed for the entrepreneur Zoa Luengo, she
        approached me with the idea of creating a new thank-you diary to replace
        the one she has now for sale to her clients; After talking about the
        project we decided to go further and make a monthly that covers multiple
        functionalities.
      </p>
      <img className="photo2Proj" src={P5P1}></img>
      <p className="pProjects">
        This personal diary has a utility of only one month, the goal is that
        the user can carry his Dayland anywhere making it light and manageable.
      </p>
      <img className="photo2Proj" src={P5P2}></img>
      <p className="pProjects">
        The Dayland is a menship that has the necessary tools not only to keep
        track of our daily habits, but also gives you the possibility to track
        your economy, your healthy habits and your projects within the planning
        of your day to day on a weekly and monthly basis.
      </p>
      <img className="photo2Proj photoXProj" src={P5P3}></img>
      <img className="photo2Proj photoXProj" src={P5P4}></img>
      <img className="photo2Proj photoXProj" src={P5P5}></img>

      <img className="pcRetro" src={RetroPcP5}></img>
      <div id="chitilandVd5">
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
          <img className="contactButtonMap" src={BbutonGmailP5}></img>
        </a>
        <a href="https://www.behance.net/concepcionbonnet" target="_blank">
          <img className="contactButtonMap" src={BbutonBehanceP5}></img>
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

export default Project5;
