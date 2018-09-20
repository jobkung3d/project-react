import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './inc/css/App.css';
import './inc/css/index.css';

class Header extends Component {
  constructor(props) {
   super(props);

   this.state = {
     styleName: 'ababab'
   };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll() );
  }
  handleScroll() {
    var minPixel = window.pageYOffset;
    if(minPixel > 104 ){
      this.setState({styleName: 'scrolling'});
    }else{
      this.setState({styleName: ''});
    }
  }
  render() {
    return (
      <header>
        <div className={ `wrapper-menu ${ this.props.styleName }`  } >
            <nav className={ `site-menu clearfix ${ this.state.styleName }`  }>
              <div className="container">
                <div className="logo float-left">Jobkung3d</div>
                <ul className="float-right">
                  <li><Link to="/">Home</Link></li>
                  {/*<li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/work">Work</Link></li>*/}
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
        </div>
      </header>
    );
  }
}

export default Header;
