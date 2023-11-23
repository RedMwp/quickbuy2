import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  return (
    <>
      <div className="register-form-container">
        <div className="text">
          <h1 className="big-text">
            shop in style <br /> on quickbuy.
            <br />
            Login with...
          </h1>
          <button id="google">google</button>
          <button id="facebook">facebook</button>
        </div>
        <div className="register-form">
          <p className="big-text">
            login into your account <span>.</span>
          </p>

          <div className="form-register">
            <input type="text" placeholder="user name" id="username" />

            <input type="email" placeholder="email" id="email" />
            <input type="password" placeholder="password" id="password" />

            <input type="button" id="signup-btn" value="Login" />
            <p className="terms">
              {' '}
              don't have an account?{' '}
              <Link to="/register" className="a">
                {' '}
                <span className="a">Register</span>{' '}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
