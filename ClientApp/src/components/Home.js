import React, { Component } from 'react';
import '../css/Home.css'
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="homeContainer">
        <div className="playDiv">
          <span>Play</span>
        </div>
        <div className="rulesDiv">
          <span>Rules</span>
        </div>
        <div className="rankDiv">
          <span>Rankings</span>
        </div>
        <div className="paramDiv">
          <span>Parameters</span>
        </div>        
      </div>
    );
  }
}
