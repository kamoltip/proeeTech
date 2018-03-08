import React, { Component } from "react";
import "./contact.css";
import {Container, Image} from "semantic-ui-react";
// import {contactBg} from "../../asset/images/geometric3.jpg";
import MenuExampleBasic from "../nav/Nav.js";
import Footer from "../footer/Footer.js";


class Contact extends Component {

  getValue = () => {
    // TODO
  };

  handleSubmit = () => {
    // TODO

  };



  render() {
    return (
              <section className="section-contact">
                <MenuExampleBasic />
                <Container>
                <div className="contact">
                </div>

                <button onClick = {this.handleSubmit}>Send Data</button>
                </Container>
                <Footer />
              </section>

    );
  }
}

export default Contact;
