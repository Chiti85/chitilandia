import React, { Component } from "react";
import "./scroll.css";
import { Link } from "react-router-dom";
import Player from "../Player";
import Cloud from "../clouds/clouds";
import Logo from "../logos/logo";
import Where from "../front-where/where";
import Background from "../backgrounds/backgrounds";
import Div1 from "../div1/div1";
import Div4 from "../div4/div4";
import Leismo from "../leismo/leismo";
import Loading from "../loading/loading";

class ScrollH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.redirectTrack = this.redirectTrack.bind(this);
  }

  redirectTrack() {
    if (window.scrollX <= 0) {
      console.log(window.scrollX);
      this.props.history.push("/");
    } else if (window.scrollX <= window.innerWidth) {
      this.props.history.push("/where");
    } else if (window.scrollX <= window.innerWidth * 2) {
      this.props.history.push("/tecSkill");
    } else if (window.scrollX <= window.innerWidth * 3) {
      this.props.history.push("/proj");
    } else if (window.scrollX <= window.innerWidth * 4) {
      this.props.history.push("/leismo");
    } else if (window.scrollX <= window.innerWidth * 5) {
      this.props.history.push("/wExp");
    } else if (window.scrollX <= window.innerWidth * 6) {
      this.props.history.push("/softSkills");
    } else if (window.scrollX <= window.innerWidth * 7) {
      this.props.history.push("/edu");
    } else if (window.scrollX <= window.innerWidth * 8) {
      this.props.history.push("/contact");
    }
  }

  newUrl() {
    document.addEventListener("scroll", this.redirectTrack);
  }

  update(place) {
    let scrollDistance;
    switch (place) {
      case "where":
        scrollDistance = window.innerWidth;
        break;
      case "proj":
        scrollDistance = window.innerWidth * 3;
        break;
      case "expW":
        scrollDistance = window.innerWidth * 5;
        break;
    }

    window.scroll(scrollDistance, 0);
  }
  componentDidMount() {
    this.update(this.props.match.params.screenP);
    this.newUrl();
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.redirectTrack);
  }

  render() {
    console.log(this.props);
    return (
      <div id="container">
        <div id="track">
          {this.state.isLoading ? <Loading /> : null}
          {this.state.isLoading
            ? setTimeout(() => this.setState({ isLoading: false }), 4500)
            : null}
          <Cloud />
          <Leismo />
          <Logo />
          <Where />
          <Div4 />
          <Div1 />
          <Player />
          <Background />
          <div id="about" className="box one">
            <div>1</div>
          </div>
          <div className="box two">
            <div id="whereI">
              <div id="containerr">
                <Link to="/where/berlin">
                  <img
                    className="where posB"
                    src="../../image/start button Org.png"
                  ></img>
                </Link>
                <Link to="/where/madrid">
                  <img
                    className="where posM"
                    src="../../image/start button Org.png"
                  ></img>
                </Link>
                <Link to="/where/tenerife">
                  <img
                    className="where posT"
                    src="../../image/start button Org.png"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
          <div className="box three">
            <div id="tecSkills">3</div>
          </div>
          <div id="proj" className="box four">
            <div></div>
          </div>
          <div id="leismo" className="box one">
            <div>5</div>
          </div>
          <div id="wExp" className="box two">
            <div>
              <Link to="/experience/1">
                <img
                  className="where"
                  src="../../image/start button Org.png"
                ></img>
              </Link>
              <Link to="/experience/2">
                <img
                  className="where"
                  src="../../image/start button Org.png"
                ></img>
              </Link>
              <Link to="/experience/3">
                <img
                  className="where"
                  src="../../image/start button Org.png"
                ></img>
              </Link>
              <Link to="/experience/4">
                <img
                  className="where"
                  src="../../image/start button Org.png"
                ></img>
              </Link>
              <Link to="/experience/5">
                <img
                  className="where"
                  src="../../image/start button Org.png"
                ></img>
              </Link>
              <Link to="/experience/6">
                <img
                  className="where"
                  src="../../image/start button Org.png"
                ></img>
              </Link>
            </div>
          </div>
          <div id="softSkills" className="box three">
            <div>7</div>
          </div>
          <div id="edu" className="box four">
            <div>8</div>
          </div>
          <div id="contact" className="box three">
            <div>9</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollH;
