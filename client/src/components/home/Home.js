import React, { Component } from 'react';
import "./home.css";
import Footer from "../footer/Footer.js";
import MenuExampleBasic from "../nav/Nav.js";
import { Menu } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
          <div>
            <MenuExampleBasic />
            <div>
              <header className="home-intro">

              </header>

            </div>
            <Footer />
          </div>
    );
  }
}

export default Home;
