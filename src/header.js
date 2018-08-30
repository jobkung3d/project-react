import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './inc/css/App.css';

class Header extends Component {
  render() {
    return (
      <div className="wrapper-menu">
        <div className="container">
          <nav className="site-menu">
              <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
