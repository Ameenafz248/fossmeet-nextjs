import Script from 'next/script';
import React from 'react'
import { Nav, Button } from 'react-bootstrap';
export default function Navbar() {
  return (
    <>
    <section id="first-page">
  <Nav id="heading" className="navbar navbar-expand-lg navbar-dark">
    <a id="heading1" className="navbar-brand" href="#">
      FOSSMeet'22
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div id="headeroptions">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div id="headeroptions" className="navbar-nav">
          <a className="top-hdr1" id="top-header" href="#">
            About <span className="sr-only"></span>
          </a>
          <a id="top-header" className="nav-item nav-link" href="#">
            FAQ
          </a>
          <a id="top-header" className="nav-item nav-link" href="#">
            Contacts
          </a>
          <a id="top-header" className="nav-item nav-link disabled" href="#">
            Code of conduct
          </a>
          <a id="top-header" className="nav-item nav-link disabled" href="#" />
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a id="top-header" className="nav-item nav-link" href="#">
              Login
            </a>
            <button type="button" className="btn btn-primary" id="rndbtn">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </Nav>
  <section></section>
</section>
</>

  );
}