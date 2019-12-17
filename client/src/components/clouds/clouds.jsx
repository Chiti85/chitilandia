import React, { Component } from "react";
import CloudDiv1 from "../../images/div1/nube-amarilla.png";
import Cloud2Div1 from "../../images/div1/nube-azul.png";
import Cloud3Div1 from "../../images/div1/nube-lila.png";
import CloudDiv2 from "../../images/div2/nube-azul.png";
import Cloud2Div2 from "../../images/div2/nube-amarilla2.png";
import Cloud3Div2 from "../../images/div2/nube-amarilla.png";
import CloudDiv3 from "../../images/div3/nube1.png";
import Cloud2Div3 from "../../images/div3/nube2.png";
import CloudDiv4 from "../../images/div4/nube1.png";
import Cloud2Div4 from "../../images/div4/nube2.png";
import Cloud3Div4 from "../../images/div4/nube3.png";
import CloudDiv5 from "../../images/div5/nube1.png";
import Cloud2Div5 from "../../images/div5/nube2.png";
import CloudDiv6 from "../../images/div6/nube 1.png";
import Cloud2Div6 from "../../images/div6/nube2.png";
import Cloud3Div6 from "../../images/div6/nube 3.png";
import CloudDiv7 from "../../images/div7/nube1.png";
import Cloud2Div7 from "../../images/div7/nube2.png";
import CloudDiv8 from "../../images/div8/nube1.png";
import Cloud2Div8 from "../../images/div8/nube2.png";
import Cloud3Div8 from "../../images/div8/nube3.png";
import CloudDiv9 from "../../images/div9/nube1.png";
import Cloud2Div9 from "../../images/div9/nube2.png";

import "../clouds/clouds.css";

class Cloud extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="container3">
        <img className="cloudMove cloudDetail " src={CloudDiv1}></img>
        <img className="cloudMove cloudDetail2 " src={Cloud2Div1}></img>
        <img className="cloudMove cloudDetail3 " src={Cloud3Div1}></img>
        <img className="cloudMove cloudDetail4 " src={CloudDiv2}></img>
        <img className="cloudMove cloudDetail5 " src={Cloud2Div2}></img>
        <img className="cloudMove cloudDetail6 " src={Cloud3Div2}></img>
        <img className="cloudMove cloudDetail7 " src={CloudDiv3}></img>
        <img className="cloudMove cloudDetail8 " src={Cloud2Div3}></img>
        <img className="cloudMove cloudDetail9 " src={CloudDiv4}></img>
        <img className="cloudMove cloudDetail10 " src={Cloud2Div4}></img>
        <img className="cloudMove cloudDetail11 " src={Cloud3Div4}></img>
        <img className="cloudMove cloudDetail12 " src={CloudDiv5}></img>
        <img className="cloudMove cloudDetail13 " src={Cloud2Div5}></img>
        <img className="cloudMove cloudDetail14 " src={CloudDiv6}></img>
        <img className="cloudMove cloudDetail15 " src={Cloud2Div6}></img>
        <img className="cloudMove cloudDetail16 " src={Cloud3Div6}></img>
        <img className="cloudMove cloudDetail17 " src={CloudDiv7}></img>
        <img className="cloudMove cloudDetail18 " src={Cloud2Div7}></img>
        <img className="cloudMove cloudDetail19 " src={CloudDiv8}></img>
        <img className="cloudMove cloudDetail20 " src={Cloud2Div8}></img>
        <img className="cloudMove cloudDetail21 " src={Cloud3Div8}></img>
        <img className="cloudMove cloudDetail22 " src={CloudDiv9}></img>
        <img className="cloudMove cloudDetail23 " src={Cloud2Div9}></img>
      </div>
    );
  }
}

export default Cloud;
