import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';


class SingleBlog extends Component {
  constructor(props) {
   super(props);

   this.state = {
     data: []
   };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    fetch('http://127.0.0.1/project-react/wordpress/wp-json/wp/v2/posts/'+id)
       .then(response => response.json())
       .then(data =>  this.setState({ content :  data.content.rendered}));
  }
  render() {
    return (
      <div>
        <Header styleName="single" />
        <section className="section-1 single">
          <div className="sec-img-head"></div>
          <div className="container">
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default SingleBlog;
