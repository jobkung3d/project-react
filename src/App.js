import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React2</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Footer />
      </div>
    );
  }
}

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

class Section1 extends Component {
  render() {
    return (
      <section className="section-1">
        <div className="sec1-bg"></div>
        <div className="quote">
          <div className="container">Nulla molestie lacinia justo, et tincidunt metus euismod nec. </div>
        </div>
      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        hello footer
      </div>
    );
  }
}
export default App;
