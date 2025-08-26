import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-0 border-bottom" style={{ backgroundColor: 'white' }}>
      <div className="container d-flex align-items-center">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logoTN.svg"
            alt="TradeNova Logo"
            className="navbar-logo"
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/about' className="nav-link active">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/notfound'>Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/signup'>Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
