import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
let Footer = () => {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="abou-us-useful-links">
            <ul>
              <h1>Company info</h1>
              <Link to="">
                <li>about us</li>
              </Link>
              <Link to="">
                <li>contact us</li>
              </Link>
              <Link to="">
                <li>blog</li>
              </Link>
              <Link to="">
                <li>business with us</li>
              </Link>
              <Link to="">
                <li>find store</li>
              </Link>
            </ul>

            <ul>
              <h1>Usefull links</h1>
              <Link to="">
                <li>latest product</li>
              </Link>
              <Link to="">
                <li>top rated</li>
              </Link>
              <Link to="">
                <li>featured products</li>
              </Link>
              <Link to="">
                <li>featured collection</li>
              </Link>
              <Link to="">
                <li>best selling</li>
              </Link>
            </ul>
          </div>
          <div className="contact-more">
            <div className="contact-footer">
              <ul>
                <h1>let us help you</h1>
                <Link to="">
                  <li>orders</li>
                </Link>
                <Link to="">
                  <li>addresses</li>
                </Link>
                <Link to="">
                  <li>account details</li>
                </Link>
                <Link to="">
                  <li>lost password</li>
                </Link>
                <Link to="">
                  <li>download</li>
                </Link>
              </ul>

              <ul>
                <h1>quick links</h1>
                <Link to="">
                  <li>spacial offers</li>
                </Link>
                <Link to="">
                  <li>gift cards</li>
                </Link>
                <Link to="">
                  <li>privecy policy</li>
                </Link>
                <Link to="">
                  <li>terms of use</li>
                </Link>
                <Link to="">
                  <li>portfolio</li>
                </Link>
              </ul>
            </div>

            <div className="footer-form">
              <h1>Never miss a thing from us</h1>
              <p>signup for our newslatter</p>
              <div className="email-footer-input">
                <input type="email" placeholder="email" id="foot-email" />
                <button>signup</button>
              </div>
              <ol>
                <li className="material-symbols-outlined">Facebook</li>
                <li>twi</li>
                <li>whats</li>
                <li>email</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="copy">&copy; 2023 all rights reserved</div>
      </footer>
    </>
  );
};

export default Footer;
