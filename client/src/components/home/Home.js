import React, { Component } from "react";
import "./home.css";
import Footer from "../footer/Footer.js";
import MenuExampleBasic from "../nav/Nav.js";
import {} from "semantic-ui-react";

// import mp4 from "../../asset/images/Bokeh-Tov-mp4.mp4";
// import webm from "../../asset/images/Bokeh-Tov-webm.webm";
// import poster from "../../asset/images/Bokeh-Tov-poster.jpg";

class Home extends Component {
  render() {
    return (
          <div>
            <MenuExampleBasic />
            <div>
              <header className="home-intro">
                {/* <MenuExampleBasic /> */}
                <div className="slogan"><p className="slogan_p">Never been easier, Never been better</p></div>
              </header>
            </div>

            {/* <div className="homepage-hero-module">
              <div className="video-container">
                  <div className="fillWidth"></div>
                  <video className='videoTag' autoPlay loop muted>
                    <source src={mp4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    <source src={webm} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                  </video>
                  <div className="poster hidden">
                      <img src={poster} />
              </div>
          </div> */}
            <Footer />
          </div>


    );
  }
}

export default Home;
