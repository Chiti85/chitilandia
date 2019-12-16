import React, { Component } from "react";
import Logo1Div3 from "../../images/div3/logo-html.png";
import Shadowm1Div3 from "../../images/div3/html-sombra.png";
import "../logos/logo.css";

class Logo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img className="logoMoveA logoDetailA " src={Logo1Div3}></img>
        <img className="shadowMoveA shadowDetailA " src={Shadowm1Div3}></img>
      </div>
    );
  }
}

export default Logo;
