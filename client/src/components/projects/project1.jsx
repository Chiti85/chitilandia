import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada from "../../images/poject1/Captura de pantalla 2020-01-31 a las 19.41.18.png";
import Photo2Pro from "../../images/poject1/Captura de pantalla 2020-01-31 a las 19.34.59.png";
import Photo3Pro from "../../images/poject1/Captura de pantalla 2020-01-31 a las 19.30.42.png";
import Photo4Pro from "../../images/poject1/Captura de pantalla 2020-01-31 a las 19.32.16.png";
import Photo5Pro from "../../images/poject1/Captura de pantalla 2020-01-31 a las 19.41.18.png";
import Photo6Pro from "../../images/poject1/Captura de pantalla 2020-01-31 a las 19.31.12.png";
import Photo8Pro from "../../images/poject1/pantalla-video.png";
import ArrowNew from "../../images/poject1/arrowNew.png";
import ExclamationP from "../../images/poject1/excalamationponit.png";

import ButtonGmail from "../../images/div9/gmail.png";
import ButtonGitHub from "../../images/poject1/botonGitHub.png";

const Project1 = () => {
  return (
    <>
      <img className="PortDtl" src={Portada}></img>
      <img className="exclaP arrowSign" src={ExclamationP}></img>
      <img className="pointerArw arrowSign" src={ArrowNew}></img>
      <p className="cachP">Welcome to Inception!!</p>
      <p className="pProjects">
        Of course I´m just joking, but talk about the web that you actually are
        is kind of the concept of the Christofer Nolan Film, no? <br></br> Well
        let´s talk about my web cv, this Project is one of the many developed in
        my bootcamp, to make it happen I use react js and the google map API.
      </p>
      <img className="photo2Proj" src={Photo2Pro}></img>
      <p className="pProjects">
        This is a powerfull front that let the user arround my profesional live
        and projects; about the design because of the horizontal scroll that let
        the user see a web in an atipycal way, a way reserved to platforms´s
        videogames, is for that I chose comeback to the pixel art that have a
        link with the classic videogames.
      </p>
      <img className="photo2Proj" src={Photo3Pro}></img>
      <p className="pProjects">
        With this Project my objetive is give to the user a different aproah to
        a think, the Cv, that is allways to similar one to another, also with
        this web I wanted to show my style of design and my knoledge on React.js
        at the same time.
      </p>
      <img className="photo2Proj" src={Photo4Pro}></img>
      <p className="pProjects">
        In the making of this Project I learn a lot, from time management to how
        to sleep two hours and survive, this was my last work inside of a nine
        week bootcamp and in the last two weeks I try to créate something that
        mirror most of my learnings.
      </p>
      <img className="photo2Proj" src={Photo5Pro}></img>
      <p className="pProjects">
        In conclusion this project was an exited, amazing and tired journey that
        bring me a lot of experiences and knowledge that for sure I´m going to
        use in all my new projects from here on.
      </p>
      <img className="photo2Proj" src={Photo6Pro}></img>
      <img className="pcRetro" src={Photo8Pro}></img>
      <div id="chitilandVd">
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
          <img className="contactButtonMap" src={ButtonGmail}></img>
        </a>
        <a href="https://github.com/Chiti85" target="_blank">
          <img className="contactButtonMap" src={ButtonGitHub}></img>
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

export default Project1;
