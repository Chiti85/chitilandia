import React from "react";
import "../div4/div4.css";
import { Link } from "react-router-dom";

import tittleDiv4 from "../../images/div4/tittle-div4.png";
import Coin1 from "../../images/div4/coin-solo.png";
import CoinP1 from "../../images/div4/colo-coin-1.png";
import Coin2 from "../../images/div4/coin-solo.png";
import CoinP2 from "../../images/div4/colo-coin-2.png";
import Coin3 from "../../images/div4/coin-solo.png";
import CoinP3 from "../../images/div4/colo-coin-3.png";
import Coin4 from "../../images/div4/coin-solo.png";
import CoinP4 from "../../images/div4/colo-coin-4.png";
import Coin5 from "../../images/div4/coin-solo.png";
import CoinP5 from "../../images/div4/colo-coin-5.png";
import Coin6 from "../../images/div4/coin-solo.png";
import CoinP6 from "../../images/div4/colo-coin-6.png";

const Div4 = () => {
  return (
    <>
      <img className="tittleDet4 " src={tittleDiv4}></img>
      <div id="subtittleDiv4">Onclick to see the projects</div>
      <Link id="moveCoin" to="/project/1">
        <div id="moveCoin">
          <img className="coin1Detl coinOpa420 " src={Coin1}></img>
          <img className="coinP1Detl  " src={CoinP1}></img>
        </div>
      </Link>
      <Link id="moveCoin" to="/project/2">
        <div id="moveCoin">
          <img className="coin2Detl coinOpa420 " src={Coin2}></img>
          <img className="coinP2Detl  " src={CoinP2}></img>
        </div>
      </Link>
      <Link id="moveCoin" to="/project/3">
        <div id="moveCoin">
          <img className="coin3Detl coinOpa420 " src={Coin3}></img>
          <img className="coinP3Detl  " src={CoinP3}></img>
        </div>
      </Link>
      <Link id="moveCoin" to="/project/4">
        <div id="moveCoin">
          <img className="coin4Detl coinOpa420 " src={Coin4}></img>
          <img className="coinP4Detl  " src={CoinP4}></img>
        </div>
      </Link>
      <Link id="moveCoin" to="/project/5">
        <div id="moveCoin">
          <img className="coin5Detl coinOpa420 " src={Coin5}></img>
          <img className="coinP5Detl  " src={CoinP5}></img>
        </div>
      </Link>
      <Link id="moveCoin" to="/project/6">
        <div id="moveCoin">
          <img className="coin6Detl coinOpa420 " src={Coin6}></img>
          <img className="coinP6Detl  " src={CoinP6}></img>
        </div>
      </Link>
    </>
  );
};

export default Div4;
