import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './header';
import './inc/css/index.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      {/*<Route exact path="/" component={Blog} />
      <Route exact path="/" component={Work} />
      <Route exact path="/" component={Contact} />*/}
    </div>
  </Router>, document.getElementById('root')
  );
