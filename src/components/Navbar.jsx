import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color: "green", fontSize:"20px"}}><b>    NewsMonkey </b>
          
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/home" style={{fontSize:"17px"}}>
                  Home
                </a>
                <a className="nav-link active" aria-current="page" href="/about" style={{fontSize:"17px"}}>About
                  
                </a>
              </div>
            </div>
          </div>
        </nav>
        
      </>
    );
  }
}
