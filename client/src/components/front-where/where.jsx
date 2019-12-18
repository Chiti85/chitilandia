import React, { Component } from "react";
import { Link } from "react-router-dom";

import MadridC from "../../images/div2/madrid-color.png";
import MadridL from "../../images/div2/madrid-lila.png";
import BerlinC from "../../images/div2/berlin-color.png";
import BerlinL from "../../images/div2/berli-lila.png";
import TenerifeC from "../../images/div2/tenerife-color.png";
import TenerifeL from "../../images/div2/tenerife-lila.png";
import TittleWhere from "../../images/div2/tittle.png";
import TittleBerlin from "../../images/div2/berlintitle.png";
import TittleMadrid from "../../images/div2/titlemadrid.png";
import TittleTenerife from "../../images/div2/titletenerife.png";
import BottonBerlin from "../../images/div2/botton lila.png";
import BottonMadrid from "../../images/div2/botton lila.png";
import BottonTenerife from "../../images/div2/botton lila.png";
import "../front-where/where.css";

class Where extends Component {
  constructor() {
    super();

    this.opacityK();
  }
  opacityF() {
    let opacityW = document.getElementsByClassName("photoOpacity")[0];
    let opacityM = document.getElementsByClassName("photoOpacity")[1];
    let opacityT = document.getElementsByClassName("photoOpacity")[2];
    let positionSc = opacityW.getBoundingClientRect().right;
    let positionSce = opacityM.getBoundingClientRect().right;
    let positionSct = opacityT.getBoundingClientRect().right;
    console.log(positionSc, "la mierder esta");

    let space = window.innerWidth / 2;
    console.log(positionSce, space);
    if (positionSc < space) {
      opacityW.style.animation = "opacityW 2s ease-out forwards";
    }
    if (positionSce < space) {
      console.log("BAJANDO OPACITY");
      opacityM.style.animation = "opacityW 2s ease-out forwards";
    }
    if (positionSct < space) {
      opacityT.style.animation = "opacityW 2s ease-out forwards";
    }
  }

  opacityK() {
    window.addEventListener("scroll", this.opacityF);
  }

  componentDidMount() {
    this.opacityK();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.opacityF);
  }

  render() {
    return (
      <div>
        <img className="tittleWDl " src={TittleWhere}></img>
        <img className="photoOpacity berlinD " src={BerlinL}></img>
        <img className=" berlinS" src={BerlinC}></img>
        <img className="photoOpacity madridD " src={MadridL}></img>
        <img className=" madridS" src={MadridC}></img>
        <img className="photoOpacity tenerifeD " src={TenerifeL}></img>
        <img className=" tenerifeS" src={TenerifeC}></img>
        <img className="minititleB" src={TittleBerlin}></img>
        <img className="minititleM" src={TittleMadrid}></img>
        <img className="minititleT" src={TittleTenerife}></img>
        <Link to="/where/berlin">
          <img className="botonB" src={BottonBerlin}></img>
        </Link>
        <Link to="/where/madrid">
          <img className="botonM" src={BottonMadrid}></img>
        </Link>
        <Link to="/where/tenerife">
          <img className="botonT" src={BottonTenerife}></img>
        </Link>
      </div>
    );
  }
}

export default Where;
