import React, { Component } from "react";
import "./nav.css";
import { Menu, Image} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import {proee} from "../../asset/images/proee.png";
import "./nav.css";

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <Menu secondary>
        <Menu.Item header></Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/" target="_blank">Home</NavLink>
        </Menu.Item>
        <Menu.Item
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/products" target="_blank">Products</NavLink>
        </Menu.Item>

        <Menu.Item
          name='pricing'
          active={activeItem === 'pricing'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/pricing" target="_blank">Pricing</NavLink>
        </Menu.Item>

        <Menu.Item
          name='company'
          active={activeItem === 'company'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/company" target="_blank">Company</NavLink>
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/contact" target="_blank">Contact</NavLink>
        </Menu.Item>
      </Menu>

    )
  }
}
