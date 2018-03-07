import React, { Component } from 'react';
import "./footer.css";
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (

              <footer>
                <span className="footer_box">
                <ul className="footer_ul">
                  <Link to= '/' target="_blank"><li className="footer-list">Home</li></Link>
                  <Link to= '/products' target="_blank"><li className="footer-list">Products</li></Link>
                  <Link to= '/pricing' target="_blank"><li className="footer-list">Pricing</li></Link>
                  <Link to= '/company' target="_blank"><li className="footer-list">Company</li></Link>
                  <Link to= '/documentation' target="_blank"><li className="footer-list">Documentation</li></Link>
                  <Link to= '/contact' target="_blank"><li className="footer-list">Contact</li></Link>
                </ul>
                <p className="copyright">copyright&#169;2018 Proeetech Inc. All rights reserved. Web crafted by Kamoltip Cardenas</p>
                </span>
            </footer>
    );
  }
}

export default Footer;
