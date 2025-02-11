import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "rgb(9,9,9)", borderBottom: "1px solid white", boxShadow: "2px 2px 8px white" }} className="navbar px-4 navbar-expand-lg mb-4 navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1 style={{ textAlign: "center" }}>
            <strong>
              <span style={{ color: "red", textShadow: "1px 1px rgb(39,37,36)" }}>Whats Cookin'</span>
            </strong>
          </h1>
        </a>


        <button
          style={{ border: "1px solid white", backgroundColor: "white" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-white ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#feedback">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
