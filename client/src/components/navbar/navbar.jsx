import React, { Component } from "react";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";
import "./navbar.css";
import { number } from "prop-types";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  update(scrollDistance) {
    window.scroll({
      left: scrollDistance,
      behavior: "smooth"
    });

    // this.props.Update(value);
  }

  render() {
    return (
      <nav>
        <div className="navbar">
          <img
            onClick={() => this.update(0)}
            src="../../../image/navbarAbout.png"
            id="navbarI"
          ></img>

          <img
            onClick={() => this.update(window.innerWidth)}
            src="../../../image/navbarWhere.png"
            id="navbarI"
          ></img>

          <img
            onClick={() => this.update(window.innerWidth * 2)}
            id="navbarI"
            src="../../../image/navbarTecS.png"
          ></img>

          <img
            onClick={() => this.update(window.innerWidth * 3)}
            id="navbarI"
            src="../../../image/navbarProjects.png"
          ></img>

          <img
            onClick={() => this.update(window.innerWidth * 4)}
            id="navbarI"
            src="../../../image/navbarLeismo.png"
          ></img>

          <img
            onClick={() => this.update(window.innerWidth * 5)}
            id="navbarI"
            src="../../../image/navbarWExp..png"
          ></img>
          <img
            onClick={() => this.update(window.innerWidth * 6)}
            id="navbarI"
            src="../../../image/navbarSoftS.png"
          ></img>

          <img
            onClick={() => this.update(window.innerWidth * 7)}
            id="navbarI"
            src="../../../image/navbarEdu.png"
          ></img>
          <img
            onClick={() => this.update(window.innerWidth * 8)}
            id="navbarI"
            src="../../../image/navbarCONTACT.png"
          ></img>
        </div>
      </nav>
    );
  }
}

export default Navbar;
