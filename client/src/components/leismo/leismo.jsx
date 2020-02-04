import React, { Component } from "react";
import "../leismo/leismo.css";

import ScreenL from "../../images/div5/tv.png";
import tittleDivL from "../../images/div5/tittle.png";
import TextInfo from "../../images/div5/marcotext.png";

class Leismo extends Component {
  constructor() {
    super();
    this.growsK();
  }
  grows() {
    let itgrows = [...document.getElementsByClassName("expansd")];

    itgrows.forEach(elm => {
      let positionScr = elm.getBoundingClientRect().right;
      let spaceX = window.innerWidth / 2;
      console.log(positionScr, spaceX);
      if (positionScr < spaceX) {
        elm.style.animation = "itgrows 2s ease-out forwards";
      }
    });
  }
  growsK() {
    window.addEventListener("scroll", this.grows);
  }
  componentDidMount() {
    this.growsK();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.grows);
  }
  render() {
    return (
      <>
        <h6 className="expansd" id="moremoI">
          More Info
        </h6>
        <p className="expansd" id="textPanel">
          Leismo is a short film that participated in the Spanish short film
          festival Notofilm, in which I worked as a screenwriter and producer,
          the short film tells us about how Sara and Elisa have a linguistic
          discussion that will highlight their present, solidify their past and
          establish the basis of a hopeful future for embassies.
        </p>
        <img className="textInfo expansd" src={TextInfo}></img>

        <div id="pressP">Press play!!</div>
        <div id="pressP2">Press play!!</div>
        <img className="tittlDL" src={tittleDivL}></img>
        <img className="tvD " src={ScreenL}></img>
        <iframe
          src="https://www.youtube.com/embed/pCXvcEsE_EE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          id="videoLeis"
        ></iframe>
      </>
    );
  }
}

export default Leismo;
