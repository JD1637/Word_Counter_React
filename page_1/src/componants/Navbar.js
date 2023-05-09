import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.heading}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About Us</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  heading: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  heading: 'Set heading'
};
