import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada2 from "../../images/project2/bigOneP2-01.png";
import LoginP2 from "../../images/project2/bigOneP2.login-02.png";
import SignupP2 from "../../images/project2/bigOneP2.signup-03.png";
import SearchP2 from "../../images/project2/bigOneP2.search-04.png";
import MustRP2 from "../../images/project2/bigOneP2.random-06.png";
import LastPhP2 from "../../images/project2/lastPhP2-03.png";
import ExclamationP2 from "../../images/poject1/excalamationponit.png";
import ArrowNew2 from "../../images/poject1/arrowNew.png";
import BbutonGmail from "../../images/div9/gmail.png";
import BbutonGitHub from "../../images/poject1/botonGitHub.png";
import RetroPcP2 from "../../images/poject1/pantalla-video.png";

const Project2 = () => {
  return (
    <>
      <img className="PortDtl" src={Portada2}></img>
      <img className="exclaP arrowSign" src={ExclamationP2}></img>
      <img className="pointerArw arrowSign" src={ArrowNew2}></img>
      <p className="cachP">Welcome to Galactus!!</p>
      <p className="pProjects">
        This webpage is part of the projects I develop in the bootcamp, to
        créate this app we use different technologies, in specific Node.js,
        Express and two diferent API´s of free use.
      </p>
      <img className="photo2Proj" src={LoginP2}></img>
      <p className="pProjects">
        The objetive of this web is the creation of a platform that give to the
        comic´s readers a place where expans their knowlleg about comic throught
        time.
      </p>
      <img className="photo2Proj" src={SignupP2}></img>
      <p className="pProjects">
        In this web have differents funcionalitys depending of your role when
        you´re visiting it, if you are just a visitor (that means that you
        haven´t a acount in the web) you just can see the web tabs Search, must
        reaad and stores, when you become a menber of Galactus you can publish
        files of your own creations, this files are stored in your profile where
        you can also edit and erase this files.
      </p>
      <img className="photo2Proj" src={SearchP2}></img>
      <p className="pProjects">
        The two API´s that we use are Comic Vine, that we use in Search and Must
        Read, the other API is Google Map, we used this tool to locate the most
        important comics store in the city of Madrid.
      </p>
      <img className="photo2Proj" src={MustRP2}></img>
      <p className="pProjects">
        The front line of design is oriented to we inclusive, when I started to
        think about the design of this app my first move was make a research
        about this type of webs to search for reference, but I was surprised to
        see that most of then are aesthetic floods, in that momment I decided to
        start from cero and created a comic web that reflect that superhero that
        we have inside day by day.
      </p>
      <img className="photo2Proj" src={LastPhP2}></img>

      <img className="pcRetro" src={RetroPcP2}></img>
      <div id="chitilandVd2">
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
          <img className="contactButtonMap" src={BbutonGmail}></img>
        </a>
        <a href="https://github.com/Chiti85" target="_blank">
          <img className="contactButtonMap" src={BbutonGitHub}></img>
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

export default Project2;
