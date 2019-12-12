import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollH from "./components/scroll-H/scroll";
import Navbar from "./components/navbar/navbar";
import Berlin from "./components/where/berlin";
import Madrid from "./components/where/madrid";
import Tenerife from "./components/where/tenerife";
import Project1 from "./components/projects/project1";
import Project2 from "./components/projects/project2";
import Project3 from "./components/projects/project3";
import Project4 from "./components/projects/project4";
import Project5 from "./components/projects/project5";
import Project6 from "./components/projects/project6";
import Experience1 from "./components/experience/exp1";
import Experience2 from "./components/experience/exp2";
import Experience3 from "./components/experience/exp3";
import Experience4 from "./components/experience/exp4";
import Experience5 from "./components/experience/exp5";
import Experience6 from "./components/experience/exp6";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/where/berlin" component={Berlin} />
          <Route path="/where/madrid" component={Madrid} />
          <Route path="/where/tenerife" component={Tenerife} />
          <Route path="/project/1" component={Project1} />
          <Route path="/project/2" component={Project2} />
          <Route path="/project/3" component={Project3} />
          <Route path="/project/4" component={Project4} />
          <Route path="/project/5" component={Project5} />
          <Route path="/project/6" component={Project6} />
          <Route path="/experience/1" component={Experience1} />
          <Route path="/experience/2" component={Experience2} />
          <Route path="/experience/3" component={Experience3} />
          <Route path="/experience/4" component={Experience4} />
          <Route path="/experience/5" component={Experience5} />
          <Route path="/experience/6" component={Experience6} />
          <Route
            path="/:screenP"
            render={match => {
              return (
                <div style={{ height: "100vh" }}>
                  <Navbar Update={value => this.setState({ X: value })} />
                  <ScrollH {...match} />
                </div>
              );
            }}
          />
          <Route
            path="/"
            render={match => {
              return (
                <div style={{ height: "100vh" }}>
                  <Navbar Update={value => this.setState({ X: value })} />
                  <ScrollH {...match} />
                </div>
              );
            }}
          />
        </Switch>
      </>
    );
  }
}

export default App;
