import React, { Component } from 'react';
import "./products.css";
import {Container, Image} from "semantic-ui-react";
// import {lightningFlashDrive} from "../../asset/images/lightningFlashDrive.png";
import MenuExampleBasic from "../nav/Nav.js";

class Products extends Component {
  render() {
    return (

      <section className="section-products">
        <MenuExampleBasic />
        <Container>
        <div className="products-app"></div>
        <div className="products-fd"></div>

        </Container>
      </section>
    );
  }
}

export default Products;
