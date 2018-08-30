import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './inc/css/App.css';
import Header from './header';
import Footer from './footer';

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


class Section1 extends Component {
  render() {
    return (
      <section className="section-1">
        <div className="sec1-bg"></div>
        <div className="quote">
          <div className="container">
            <p>If people hate you don’t hate them, Do good die great.</p>
            <p className="text-right"> - Jordan The Wholesome VRChat</p>
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
                          <p>สวัสดีครับ ชื่อนาย วรชาติ ปธานวนิช</p>
                          <p>บ้านเกิดอยู่ที่สระบุรี แต่มาทำงานที่กรุงเทพ</p>
                          <p>จะว่าหลงแสงสีก็ว่าได้ ฮ่า ๆ </p>
                          <p>ชอบการเขียนเว็บ มันเป็นงานที่สนุกและท้าทาย</p>
                          <p>ในเวลาเดียวกัน</p>
                          <p>ตอนนี้เล่นเกมส์อะไรบ้าง ?</p>
                          <p>OverWatch, Pubg mobile</p>
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
    console.log(this.state.data);
    return (

      <section className="article">
        <div className="container">
            <div className="page-title">Article</div>
            <div className="row">
              {this.state.data.map(function(obj, i){
                return (
                    <div  key={obj.id} className="col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-thumbnail box-shadow"></div>
                            <div className="card-detail">
                                <div className="card-title"  dangerouslySetInnerHTML={{__html: obj.title.rendered}}></div>
                                <div className="card-excerpt" dangerouslySetInnerHTML={{__html: obj.excerpt.rendered}}></div>
                            </div>
                        </div>
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
