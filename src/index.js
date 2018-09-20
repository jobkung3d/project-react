import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SingleBlog from './singleblog';
import './inc/css/index.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      {/*<Route exact path="/blog" component={blog} />
      <Route exact path="/" component={Work} />
    <Route exact path="/" component={Contact} />*/}
    <Route exact path="/blog/:id" component={SingleBlog} />
    </div>
  </Router>, document.getElementById('root')
  );
