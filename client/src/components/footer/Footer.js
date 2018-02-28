import React, { Component } from 'react';
import "./footer.css";
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (

              <footer>
                <span className="footer_box">
                <ul>
                  <Link to= '/' target="_blank"><li>Home</li></Link>
                  <Link to= '/products' target="_blank"><li>Products</li></Link>
                  <Link to= '/pricing' target="_blank"><li>Pricing</li></Link>
                  <Link to= '/company' target="_blank"><li>Company</li></Link>
                  <Link to= '/documentation' target="_blank"><li>Documentation</li></Link>
                  <Link to= '/contact' target="_blank"><li>Contact Us</li></Link>
                </ul>
                <p className="copyright">copyright&#169;2018 Proeetech Inc. All rights reserved. <br/>Web built by Kamoltip Cardenas</p>
                </span>
            </footer>
    );
  }
}

export default Footer;
