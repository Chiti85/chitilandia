import React from "react";
import "../div9/div9.css";
import { Link } from "react-router-dom";

import Tittlediv9 from "../../images/div9/tittlediv9.png";
import Telephone from "../../images/div9/telefono.png";
import Linkeding from "../../images/div9/linkedin.png";
import Behance from "../../images/div9/behance.png";
import Github from "../../images/div9/github.png";
import GMail from "../../images/div9/gmail.png";

const Div9 = () => {
  return (
    <>
      <img className="tittlediv9Dtl" src={Tittlediv9}></img>
      <img className="telephone" src={Telephone}></img>
      <h3>+34 687359041</h3>
      <a
        href="https://www.linkedin.com/in/chiti-bonnet-molina/"
        target="_blank"
      >
        <img className="linkedin bottonMove9" src={Linkeding}></img>
      </a>
      <a href="https://www.behance.net/concepcionbonnet" target="_blank">
        <img className="Behance bottonMove9B" src={Behance}></img>
      </a>
      <a href="https://github.com/Chiti85" target="_blank">
        <img className="Github bottonMove9" src={Github}></img>
      </a>
      <a href="mailto:macobonn@gmail.com?Subject=Hello!!%20Chiti%20let´s%20talk%20about%20new%20projects!">
        <img className="GMail bottonMove9B" src={GMail}></img>
      </a>
    </>
  );
};

export default Div9;
