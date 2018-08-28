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
        <About />
        <Article />
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
class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
            <div className="page-title">About</div>
            <div className="row">
                <div className="offset-lg-1 col-lg-6">
                    <div className="ab-dtl">
                        <span>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Etiam scelerisque risus
                        ornare egestas commodo. Quisque metus
                        sapien, pellentesque nec purus sit amet,
                        tempus euismod elit. Integer mollis dolor
                        a posuere interdum. Morbi a lorem non
                        mi bibendum gravida ut et nibh. Sed id
                        odio rhoncus, congue dolor et, varius arcu.
                         Nulla sit amet posuere ligula. Proin
                        consectetur lobortis risus, vel pellentesque
                         erat. Integer porta facilisis euismod.
                        Maecenas blandit elit ut massa convallis,
                        </span>
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
            {this.state.data.map(function(obj, i){
              return (<div key={obj.id}>{obj.id}</div>);
            })}
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-thumbnail box-shadow"></div>
                        <div className="card-detail">
                            <div className="card-title">Title</div>
                            <div className="card-excerpt">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-thumbnail box-shadow"></div>
                        <div className="card-detail">
                            <div className="card-title">Title</div>
                            <div className="card-excerpt">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-thumbnail box-shadow"></div>
                        <div className="card-detail">
                            <div className="card-title">Title</div>
                            <div className="card-excerpt">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-thumbnail box-shadow"></div>
                        <div className="card-detail">
                            <div className="card-title">Title</div>
                            <div className="card-excerpt">
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">©2018 worachat.com. All rights reserved | Designed By Worachat Patanawanich</div>
      </div>
    );
  }
}
export default App;
