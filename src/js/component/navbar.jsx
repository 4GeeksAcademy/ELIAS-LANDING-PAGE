import React from "react";
import logo from "../../img/logo.png";
import icon from "../../img/cesta.png"

const Navbar = () => {
  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg bg-dark p-4 mb-5"> {/* Añadimos mb-5 para el margen inferior */}
        <div className="container-fluid">
          <a className="navbar-brand text-light d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" width="50" height="34" className="me-2"/>
            <h3 className="mb-0">React Landing Page</h3>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link text-light" href="#">INICIO</a></li>
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
