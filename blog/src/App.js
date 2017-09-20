import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
    <div id="wrapper">
        <section id="navigasi">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"><img src="http://danielags.hol.es/assets/images/logoku1-500x500-81-128x128-9.png" alt="" /></a>
              </div>

              <div className="rigt-side">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Skills</a></li>
                  <li className="contact"><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
        </nav>
      </section>

        <section id="wrapperHeader">
            <div className="intro-header">
              <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                       <div className="intro-message">
                           <h2>HELLO, I'M<br />
                           DANIEL SIDABUTAR</h2>
                           <h3></h3>
                           <hr className="intro-mylink" />
                           <ul className="list-inline intro-social-buttons">
                               <li>
                                   <a href="https://twitter.com/danilagst" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                               </li>
                               <li>
                                   <a href="https://github.com/danilags" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                               </li>
                               <li>
                                   <a href="https://id.linkedin.com/in/daniel-agus-sidabutar-0324b6106" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
         </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="row">
                <div className="col-md-8 image-custom-left">
                  <img src="https://static.pexels.com/photos/380810/pexels-photo-380810.jpeg" alt="" className="img-rounded" />
                </div>
                <div className="col-md-4">
                  <h2 className="section-heading">Death to the Stock Photo:<br />Special Thanks</h2>
                <p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
              </div>
            </div>
          </div>
        </section>

      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="section-heading">Death to the Stock Photo:<br />Special Thanks</h2>
              <p className="lead"> A special thanks to>
                <a target="_blank" href="http://join.deathtothestockphoto.com/">
                  Death to the Stock Photo</a>
                  for providing the photographs that you see in this template. Visit their website to become a member.
              </p>
            </div>
            <div className="col-md-4 image-custom-right">
              <img src="https://image.freepik.com/free-vector/great-isometric-user-experience_23-2147546971.jpg" alt="" className="img-rounded" />
            </div>
          </div>
        </div>
      </section>

      <section id="content-satu">
        <div className="container center-custom">
          <div className="row">
            <div className="author">
              <h3>The Story of Mel, a Real Programmer</h3>
              <p>Real Programmer write a FORTRAN</p>
            </div>
            <div className="isi-quotes">
              <p className="lead">Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back
                in the Good Old Days, when the term "software" sounded
                funny and Real Computers were made out of drums and vacuum tubes,
                Real Programmers wrote in machine code. Not FORTRAN. Not RATFOR. Not,
                even, assembly language. Machine Code. Raw, unadorned,
                inscrutable hexadecimal numbers. Directly. Lest a whole new generation
                of programmers grow up in ignorance of this glorious past,
                I feel duty-bound to describe, as best I can through the generation gap,
                how a Real Programmer wrote code. I'll call him Mel, because that was his name. <a href="#">More</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="knowledge">
        <div className="container">
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="https://smyl.es/wurdp/assets/mongodb.png" alt="" className="img-rounded" />
            </div>
            <div className="content">
              <h3>Database Skills</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="https://coderbyte.com/images/homepage_icons/academy/className_easy.png" alt="" className="img-rounded" />
            </div>
            <div className="content">
              <h3>JS Fundamental Skill</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="https://vuejs.org/images/logo.png" alt="" className="img-rounded" />
            </div>
            <div className="content">
              <h3>Vue JS</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="https://d3t0dn7puh4fxw.cloudfront.net/wp-content/uploads/2015/09/expressjs.jpg" alt="" className="img-rounded" />
            </div>
            <div className="content">
              <h3>Express JS</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
        </div>
      </section>

      <section id="knowledge2">
        <div className="container">
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png" alt="" className="img-rounded" />
            </div>
            <div className="content">
              <h3>Database Skills</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="http://moduscreate.com/wp-content/uploads/2015/04/logo_og-300x300.png" alt="" className="img-rounded" />
            </div>
            <div className="content">
              <h3>React JS</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="https://cdn1.icicletech.com/media/l_react-native-logo.png" alt="img-rounded" />
            </div>
            <div classNameName="content">
              <h3>React Native</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
          <div className="col-md-3 custom-pembagi">
            <div className="image">
              <img src="http://mherman.org/images/mocha-chaijs.png" alt="" className="img-rounded" />
            </div>
            <div className="content">
              <h3>Unit Testing</h3>
              <p>Maybe they do now, in this decadent era of Lite beer,
                hand calculators, and "user-friendly" software but back</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    )
  }
}

export default App;
