import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <div className="navBar">
          <Link to="/">Home</Link>
          <Link className="loginLink" to="/login">Login</Link>
        </div>
      </header>
    );
  }
}
