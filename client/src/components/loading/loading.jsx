import React, { Component } from "react";
import "../loading/loading.css";

import Cesped from "../../images/loading/cesped.png";
import PacmanB from "../../images/loading/pacmanBlue.png";
import PacmanYellow from "../../images/loading/pacmanYellow.png";
import PacmanPurple from "../../images/loading/pacmanPurpel.png";

class Loading extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <img id="cespedLoading" src={Cesped}></img>
        <img id="pacma1Loading" src={PacmanB}></img>
        <img id="pacma2Loading" src={PacmanYellow}></img>
        <img id="pacma3Loading" src={PacmanPurple}></img>
        <h2 id="leterLoading">LOADING ...</h2>
        <h2 id="leterLoading2">LOADING ...</h2>
        <div id="fullp"></div>
      </>
    );
  }
}

export default Loading;
