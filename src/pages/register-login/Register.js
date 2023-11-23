import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/logo';
import './register.css';

function Register() {
  return (
    <>
      <div className="register-form-container">
        <div className="text">
          <h1 className="big-text">
            shop in style <br /> on quickbuy.
            <br />
            sign up with...
          </h1>
          <button id="google">google</button>
          <button id="facebook">facebook</button>
        </div>
        <div className="register-form">
          <p className="big-text">
            create new account <span>.</span>
          </p>

          <div class="form-register">
            <input type="text" placeholder="user name" id="username" />
            <div className="wrap-form">
              <input type="textt" placeholder="first name" id="Fname" />
              <input type="text" placeholder="last name" id="Lname" />
            </div>
            <input type="email" placeholder="email" id="email" />
            <input type="password" placeholder="password" id="password" />

            <input type="button" id="signup-btn" value="Create account" />
            <p className="terms">
              {' '}
              already have an account?{' '}
              <Link to="/login" className="a">
                {' '}
                <span className="a">Login</span>{' '}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
