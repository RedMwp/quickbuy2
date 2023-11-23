import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

let logo = (
  <Link to="/">
    {' '}
    <p className="logo">
      Quick<span>Buy</span>
    </p>
  </Link>
);

function NavBar() {
  const [showMenu, setShowMenu] = useState({ left: '-100vw', opacity: 0 });

  let reviewMenu = () => {
    setShowMenu({ left: 0 });
  };

  let hideMenu = () => {
    setShowMenu({ left: '-100vw' });
  };
  let mobileMenu = 'mobile-menu';

  return (
    <header>
      <nav className="secondary-nav" style={{ background: 'red' }}>
        <div className="container">
          <p className="small-text">call us:+260970064229</p>
          <ul>
            <Link to="/login">
              <li>login</li>
            </Link>
            <Link to="/register">
              <li>register</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
            <Link to="/myOrders">
              <li>My Orders</li>
            </Link>
          </ul>
        </div>
      </nav>

      <nav className="primary-nav">
        <div className="container">
          {logo}

          <div className="form">
            <input type="text" placeholder="Search" id="search" />
            <button
              id="search-btn"
              className="material-symbols-outlined search-icon"
            >
              Search
            </button>
          </div>

          <div className="user-cart-menu">
            <div className="user">
              <i className="material-symbols-outlined icon avatar">Person</i>
              <p>
                hello,
                <br /> <span className="bold">guest</span>
              </p>
            </div>
            <div id="cart">
              <i className="material-symbols-outlined icon2 cart">
                shopping_bag
              </i>{' '}
              <span>0</span>
            </div>

            <div id="menu">
              <i
                className="material-symbols-outlined icon"
                id="menu"
                onClick={reviewMenu}
              >
                Menu
              </i>
            </div>
          </div>
        </div>
      </nav>

      <div className="mobile-menu" id="mobile-menu" style={showMenu}>
        <nav className="mobile-nav">
          <div className="mobile-nav-head">
            {logo}
            <i
              className="material-symbols-outlined close-btn"
              id="close-btn"
              onClick={hideMenu}
            >
              {' '}
              Close
            </i>
          </div>

          <ul>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
            <Link to="/cart">
              <li>Account</li>
            </Link>
            <Link to="/myOrders">
              <li>My Orders</li>
            </Link>
            <Link to="/cart">
              <li>Admin</li>
            </Link>
            <Link to="/myOrders">
              <li>My Orders</li>
            </Link>
          </ul>
        </nav>
        <div className="menu-wraper" onClick={hideMenu}>
          ...
        </div>
      </div>
    </header>
  );
}
export default NavBar;
