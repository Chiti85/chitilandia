import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada3 from "../../images/project3/fondo de inicio-01.png";
import ExclamationP3 from "../../images/poject1/excalamationponit.png";
import ArrowNew3 from "../../images/poject1/arrowNew.png";
import P3P1 from "../../images/project3/rabbits-01.png";
import P3P2 from "../../images/project3/Captura de pantalla 2020-02-03 a las 15.48.28.png";
import P3P3 from "../../images/project3/winner-01-01.png";
import P3P4 from "../../images/project3/game-over-01-01.png";
import RetroPcP3 from "../../images/poject1/pantalla-video.png";
import BbutonGmailP3 from "../../images/div9/gmail.png";
import BbutonGitHubP3 from "../../images/poject1/botonGitHub.png";

const Project3 = () => {
  return (
    <>
      <img className="PortDtl" src={Portada3}></img>
      <img className="exclaP arrowSign" src={ExclamationP3}></img>
      <img className="pointerArw arrowSign" src={ArrowNew3}></img>
      <p className="cachP">Kill then all !!</p>
      <p className="pProjects">
        Inspired by the garden dwarfs of the world and how they are really
        planning something, I bring you Dwarfs Wars, a shooter game in where you
        need to kill dwarfs to make 500 points before the time up´s, depends of
        the color of the dwarfs that you kill you gain more or less points, what
        I can said, this is a fun and easy game.
      </p>
      <img className="photo2Proj" src={P3P1}></img>
      <p className="pProjects">
        To develop this game I work with Canvas in java script and HTML, this
        project is part of the work of the bootcamp where I learn different
        languages, inspired in the classic shooter Duck Hunt for Nintendo NES
        for that this shooter have a pixel art base and a colorful game
        environment.
      </p>
      <img className="photo2Proj" src={P3P2}></img>
      <p className="pProjects">
        In this project I design four different screens based on the theme of
        the game, the dwarf´s world, and the chosen style, pixel art; this four
        screen are the opening of the game, where we found the instructions, the
        main screen of the game and the two left are the “You Win” and the “You
        Lose” screens.
      </p>
      <img className="photo2Proj" src={P3P4}></img>
      <p className="pProjects">
        This was my first big Project inside the program, working alone using
        this new languages was a great learning full of mistakes and funny
        moments.
      </p>
      <img className="photo2Proj" src={P3P3}></img>

      <img className="pcRetro" src={RetroPcP3}></img>
      <div id="chitilandVd3">
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
          <img className="contactButtonMap" src={BbutonGmailP3}></img>
        </a>
        <a href="https://github.com/Chiti85" target="_blank">
          <img className="contactButtonMap" src={BbutonGitHubP3}></img>
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

export default Project3;
