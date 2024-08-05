import React from "react";
import logo from "../../img/logo.png";
import icon1 from "../../img/cesta.png";

import "../../styles/styles.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark p-2" style={{width: "100%" }}>
      <div className="container-fluid" id="linksNav">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" width="70" height="70" className="me-2 img-fluid"/>
        </a>
        <h3 className="mb-0 text-light">Landing Page with</h3>
        <a href="https://es.react.dev/" target="_blank"><img src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" alt="React" width="40" height="40" className="me-2 img-fluid"/></a>
        <h3 className="mb-0 text-light">&</h3>
        <a href="https://getbootstrap.com/" target="_blank"><img src="https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000" alt="Bootstrap" width="40" height="40" className="me-2 img-fluid"/></a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link text-light" to="/">INICIO</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/cards-all">JUEGOS</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/contact-form">CONTACTO</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="">CARRITO<img src={icon1} alt="" style={{width: "30px"}}/></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
