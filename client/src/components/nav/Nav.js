import React, { Component } from "react";
import "./nav.css";
import {Container} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div class="navigation">

        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">

            <ul class="navigation__list">
                <li class="navigation__item"><NavLink to="/" target="_blank" class="navigation__link">Home</NavLink></li>
                <li class="navigation__item"><NavLink to="/pricing" target="_blank" class="navigation__link">Pricing</NavLink></li>
                <li class="navigation__item"><NavLink to="/products" target="_blank" class="navigation__link">Products</NavLink></li>
                <li class="navigation__item"><NavLink to="/company" target="_blank" class="navigation__link">Company</NavLink></li>
                <li class="navigation__item"><NavLink to="/contact" target="_blank" class="navigation__link">Contact Us</NavLink></li>
                <li class="navigation__item"><NavLink to="/documentation" target="_blank" class="navigation__link">Documentation</NavLink></li>

            </ul>

        </nav>
  </div>






      // <Menu secondary>
      //   <Menu.Item header></Menu.Item>
      //
      //   <Menu.Item
      //     name='home'
      //     active={activeItem === 'home'}
      //     onClick={this.handleItemClick}
      //   >
      //     <NavLink to="/" target="_blank">Home</NavLink>
      //   </Menu.Item>
      //   <Menu.Item
      //     name='products'
      //     active={activeItem === 'products'}
      //     onClick={this.handleItemClick}
      //   >
      //     <NavLink to="/products" target="_blank">Products</NavLink>
      //   </Menu.Item>
      //
      //   <Menu.Item
      //     name='pricing'
      //     active={activeItem === 'pricing'}
      //     onClick={this.handleItemClick}
      //   >
      //     <NavLink to="/pricing" target="_blank">Pricing</NavLink>
      //   </Menu.Item>
      //
      //   <Menu.Item
      //     name='company'
      //     active={activeItem === 'company'}
      //     onClick={this.handleItemClick}
      //   >
      //     <NavLink to="/company" target="_blank">Company</NavLink>
      //   </Menu.Item>
      //
      //   <Menu.Item
      //     name='contact'
      //     active={activeItem === 'contact'}
      //     onClick={this.handleItemClick}
      //   >
      //     <NavLink to="/contact" target="_blank">Contact</NavLink>
      //   </Menu.Item>
      // </Menu>

    )
  }
}
