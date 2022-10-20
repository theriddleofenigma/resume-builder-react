import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ResumeInfo from "./ResumeInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "550px" }}>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/resume" element={<ResumeInfo />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
