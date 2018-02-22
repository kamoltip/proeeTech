import React, { Component } from 'react';
import "./Nav.css";
import { Menu } from 'semantic-ui-react';

class MenuExampleHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='products' active={activeItem === 'products'} onClick={this.handleItemClick} />
        <Menu.Item name='pricing' active={activeItem === 'pricing'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default MenuExampleHeader;
