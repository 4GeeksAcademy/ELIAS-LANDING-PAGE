import React from "react";
import logo from "../../img/logo.png";
import icon from "../../img/cesta.png";
import "../../styles/styles.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark p-2 mb-5" style={{ zIndex: 1000, width: "100%" }}>
        <div className="container-fluid" id="linksNav">
          <a className="navbar-brand text-light d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" width="80" height="80" className="me-2"/>
            <h3 className="mb-0">React Landing Page</h3>
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link text-light" to="/">INICIO</Link></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">OFERTAS</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">CONTACTO</a></li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">CARRITO 
                  <img src={icon} alt="" style={{width: "30px"}} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
