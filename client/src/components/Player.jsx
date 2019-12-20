import React, { Component } from "react";
import Robo1 from "../images/playermove1/chitidance1.png";
import Robo2 from "../images/playermove1/chitidance2.png";
import Robo3 from "../images/playermove1/chitidance3.png";
import Robo4 from "../images/playermove1/chitidance4.png";
import Robo5 from "../images/playermove1/chitidance5.png";
import Robo6 from "../images/playermove1/chitidance6.png";
import Robo7 from "../images/playermove1/chitidance7.png";
import Robo8 from "../images/playermove1/chitidance8.png";
import Robot1A from "../images/playermove1/hellochit1.png";
import Robot2A from "../images/playermove1/hellochit2.png";
import Robot3A from "../images/playermove1/hellochit3.png";
import Robot4A from "../images/playermove1/hellochit4.png";
import Robot5A from "../images/playermove1/hellochit5.png";
import Robot6A from "../images/playermove1/hellochit6.png";
import Robot7A from "../images/playermove1/hellochit7.png";
import Robot8A from "../images/playermove1/hellochit8.png";
import Robot1C from "../images/playermove1/chitimove1.png";
import Robot2C from "../images/playermove1/chitimove2.png";
import Robot3C from "../images/playermove1/chitimove3.png";
import Robot4C from "../images/playermove1/chitimove4.png";
import Robot5C from "../images/playermove1/chitimove5.png";
import Robot6C from "../images/playermove1/chitimove6.png";
import Robot7C from "../images/playermove1/chitimove7.png";
import Robot8C from "../images/playermove1/chitimove8.png";
import Robot9C from "../images/playermove1/chitimove1.png";
import "./Player.css";

export class Player extends Component {
  constructor() {
    super();
    this.state = {
      idleAnimation: true,
      animationA: true,
      animationB: true
    };
    this.imagesMove = undefined;
    this.frame = 0;
    this.imageSet = 0;
  }

  // if(dom.getPlayer.posX > window.innerWidth*4 < window.innerWidth*6)

  walk() {
    if (this.state.idleAnimation)
      //this.setState(cambiar a false el state)
      this.frame++;
    console.log(this.imagesMove);
    if (this.frame % 10 === 0 && this.imagesMove.length) {
      this.imagesMove[this.imageSet].classList.remove("shown");

      this.imageSet == this.imagesMove.length - 1 // 7
        ? (this.imageSet = 0)
        : this.imageSet++;

      this.imagesMove[this.imageSet].classList.add("shown");
    }

    //Cambiar animacion
    if (window.scrollX > 800) {
      this.setState({ animationA: false });

      if (window.scrollX > 10800) {
        this.setState({ animationB: false });
      }
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", () => this.walk());
    this.imagesMove = document.getElementsByClassName("player");
  }

  render() {
    console.log(Robo1, "holaaaaaa paso por aqui");
    return this.state.animationA ? (
      <div>
        <img className="player shown " src={Robot1A}></img>
        <img className="player hidden" src={Robot2A}></img>
        <img className="player hidden" src={Robot3A}></img>
        <img className="player hidden" src={Robot4A}></img>
        <img className="player hidden" src={Robot5A}></img>
        <img className="player hidden" src={Robot6A}></img>
        <img className="player hidden" src={Robot7A}></img>
        <img className="player hidden" src={Robot8A}></img>
      </div>
    ) : this.state.animationB ? (
      <div>
        <img className="player shown " src={Robot1C}></img>
        <img className="player hidden" src={Robot2C}></img>
        <img className="player hidden" src={Robot3C}></img>
        <img className="player hidden" src={Robot4C}></img>
        <img className="player hidden" src={Robot5C}></img>
        <img className="player hidden" src={Robot6C}></img>
        <img className="player hidden" src={Robot7C}></img>
        <img className="player hidden" src={Robot8C}></img>
        <img className="player hidden" src={Robot9C}></img>
      </div>
    ) : (
      <div>
        <img className="player shown " src={Robo1}></img>
        <img className="player hidden" src={Robo2}></img>
        <img className="player hidden" src={Robo3}></img>
        <img className="player hidden" src={Robo4}></img>
        <img className="player hidden" src={Robo5}></img>
        <img className="player hidden" src={Robo6}></img>
        <img className="player hidden" src={Robo7}></img>
        <img className="player hidden" src={Robo8}></img>
      </div>
    );
  }
}

export default Player;
