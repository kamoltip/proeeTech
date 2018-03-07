import React, { Component } from "react";
import "./contact.css";
import {Container, Image} from "semantic-ui-react";
import {contactBg} from "../../asset/images/geometric3.jpg";
import MenuExampleBasic from "../nav/Nav.js";
import Footer from "../footer/Footer.js";


class Contact extends Component {
  render() {
    return (
              <section className="section-contact">
                <MenuExampleBasic />
                <Container>
                <div className="contact">
                  <image src={contactBg} />
                </div>
              </Container>
              <Footer />
              </section>

    );
  }
}

export default Contact;
