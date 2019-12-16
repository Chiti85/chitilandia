import React, { Component } from "react";
import Robo1 from "../images/Run (1).png";
import Robo2 from "../images/Run (2).png";
import Robo3 from "../images/Run (3).png";
import Robo4 from "../images/Run (4).png";
import Robo5 from "../images/Run (5).png";
import Robo6 from "../images/Run (6).png";
import Robo7 from "../images/Run (7).png";
import Robo8 from "../images/Run (8).png";
import "./Player.css";

export class Player extends Component {
  constructor() {
    super();
    this.state = {};
    this.imagesMove = undefined;
    this.frame = 0;
    this.imageSet = 0;
  }

  walk() {
    this.frame++;
    console.log(this.imagesMove);
    if (this.frame % 10 === 0) {
      this.imagesMove[this.imageSet].classList.remove("shown");

      this.imageSet == this.imagesMove.length - 1 // 7
        ? (this.imageSet = 0)
        : this.imageSet++;

      this.imagesMove[this.imageSet].classList.add("shown");
      //   this.imagesMove[this.imageSet].classList.remove("hidden");
      //   this.imagesMove[this.imageSet + 1].classList.add("hidden");
      // this.imagesMove[this.imageSet + 1].classList.remove("shown");
      // this.imagesMove[this.imageSet + 1].classList.add("shown");
    }
    // else {
    //   return this.imagesMove[this.imageSet].classList.remove("shown");
    // }
  }

  componentDidMount() {
    document.addEventListener("scroll", () => this.walk());
    this.imagesMove = document.getElementsByClassName("player");
  }

  render() {
    console.log(Robo1, "holaaaaaa paso por aqui");
    return (
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
