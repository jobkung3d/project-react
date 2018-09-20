import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import Tilt from 'react-tilt';

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
        <Header styleName="header-home" />
        <Section1 />
        <About />
        <Article />
        <Footer />
      </div>
    );
  }
}


class Section1 extends Component {
  render() {
    return (
      <section className="section-1 home">
        <div className="sec1-bg">
          <div className="slide-tilt">
            <div className="slide-banner">
    					<div className="firefly1"></div>
    					<div className="firefly2"></div>
    				</div>
            <div className="container">
              <Tilt className="Tilt" options={{ max : 25 }}  style={{ height: 250, width: 700 }} >
               <div className="Tilt-inner">The Begining</div>
               <div className="tilt-line tl-1"></div>
               <div className="tilt-line-thin tl-1 yellow"></div>
               <div className="Tilt-inner text-right">of Something</div>
               <div className="tilt-line tl-2"></div>
               <div className="tilt-line-thin tl-2 yellow"></div>
              </Tilt>
            </div>
          </div>

        </div>
        <div className="quote">
          <div className="container">
            <span>If people hate you don’t hate them, Do good die great. - Jordan</span>
          </div>
        </div>
      </section>
    );
  }
}

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
            <div className="page-title">About</div>
            <div className="row">
                <div className="offset-lg-1 col-lg-6">
                    <div className="ab-dtl">
                        <div className="ab-dtl-ct">
                          <h2>Worachat Patanawanich</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="ab-img box-shadow d-none d-sm-block"></div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

class Article extends Component {
  constructor(props) {
   super(props);

   this.state = {
     data: []
   };
  }

  componentDidMount() {
  fetch('http://127.0.0.1/project-react/wordpress/wp-json/wp/v2/posts')
     .then(response => response.json())
     .then(data =>  this.setState({ data }));

  }

  render() {
    return (
      <section className="article">
        <div className="container">
            <div className="page-title">Article</div>
            <div className="row">

              {this.state.data.map(function(obj, i){
                return (
                    <div  key={obj.id} className="col-md-6 col-lg-3">
                        {  console.log(obj._links) }
                        <Link to={`/blog/${obj.id}`}>
                          <div className="card">
                              <div className="card-thumbnail box-shadow"></div>
                              <div className="card-detail">
                                  <div className="card-title"  dangerouslySetInnerHTML={{__html: obj.title.rendered}}></div>
                                  <div className="card-excerpt" dangerouslySetInnerHTML={{__html: obj.excerpt.rendered}}></div>
                              </div>
                          </div>
                        </Link>
                    </div>
                );
              })}
            </div>
        </div>
      </section>
    );
  }
}

export default App;
