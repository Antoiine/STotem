import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="homeContainer">
        <div className="playDiv">
          <Link to="/game">Play</Link>
        </div>
        <div className="rulesDiv">
        <Link to="/rules">Rules</Link>
        </div>
        <div className="rankDiv">
        <Link to="/ranks">Rankings</Link>
        </div>
        <div className="paramDiv">
          <Link to="/params">Parameters</Link>
        </div>        
      </div>
    );
  }
}
