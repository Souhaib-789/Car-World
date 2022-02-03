import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (


    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbg static-top">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBcwhaPdX3WF-wVOrjb892TsnAPuTSbrv-9duMjuVIM6k2Hs9OA7aNa3I6LUdN0qr8EM&usqp=CAU' alt="..." height="45" />

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <h2 style={{ color: 'rgb(34, 34, 145)' }}>Car World</h2>
            <ul className="navbar-nav ms-auto ul">
            <li className="nav-item active white">
                <Link className="nav-link white" to="/register">
                  <i className="fa fa-user-plus"> </i>
                   Sign Up
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active white">
                <Link className="nav-link white" to="/login">
                  <i className="fa fa-sign-in"> </i>
                   Sign In
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active white">
                <Link className="nav-link white" to="/home">
                  <i className="fa fa-home"> </i>
                   Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active white">
                <Link className="nav-link white" to="/cart">
                  <i className="fa fa-shopping-cart"> </i>
                   Cart
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active white">
                <Link className="nav-link white" to="/about">
                  <i className="fa fa-globe"> </i>
                   About
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active white">
                <Link className="nav-link white" to="/contact">
                  <i className="fa fa-phone"> </i>
                   Contact
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  );
}