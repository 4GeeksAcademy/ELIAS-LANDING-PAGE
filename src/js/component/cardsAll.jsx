import React from "react";
import icon from "../../img/cesta.png"
import "../../styles/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import cod1 from "../../img/cod1.png";
import cod2 from "../../img/cod2.png";
import cod3 from "../../img/cod3.png";
import cod4 from "../../img/cod4.png";
import cod5 from "../../img/cod5.png";
import cod6 from "../../img/cod6.png";
import cod7 from "../../img/cod7.png";
import cod8 from "../../img/cod8.png";
import cod9 from "../../img/cod9.png";
import cod10 from "../../img/cod10.png";
import cod11 from "../../img/cod11.png";
import cod12 from "../../img/cod12.png";
import cod13 from "../../img/cod13.png";
import cod14 from "../../img/cod14.png";
import cod15 from "../../img/cod15.png";
import cod16 from "../../img/cod16.png";
import cod17 from "../../img/cod17.png";
import cod18 from "../../img/cod18.png";
import cod19 from "../../img/cod19.png";
import cod20 from "../../img/cod20.png";

const CardsAll = () => {
  const images = [cod1, cod2, cod3, cod4, cod5, cod6, cod7, cod8, cod9, cod10, cod11, cod12, cod13, cod14, cod15, cod16, cod17, cod18, cod19, cod20];
  const titles = [
    "Call of Duty: Infinite Warfare (2080",
    "Call of Duty: Black Ops 3 (2065)",
    "Call of Duty: Advanced Warfare (2054)",
    "Call of Duty: Black Ops 4 (2043)",
    "Call of Duty: Ghosts (2017)", 
    "Call of Duty: Modern Warfare 3 (2016)",
    "Call of Duty: Modern Warfare 2 (2016)",
    "Call of Duty 4: Modern Warfare (2011)",
    "Call of Duty: Modern Warfare (1999)",
    "Call of Duty: Black Ops Cold War (1980s)",
    "Call of Duty: Black Ops 2 (1960s)",
    "Call of Duty: Black Ops (1961)",
    "Call of Duty: Vanguard (1945)",
    "Call of Duty: Big Red One (1944)",
    "Call of Duty 3 (1944)",
    "Call of Duty (1942)",
    "Call of Duty 2 (1942)",
    "Call of Duty: World at War (1942)",
    "Call of Duty: Finest Hour (1942)",
    "Call of Duty: WWII (1940)",
  ];

  return (
    <Container fluid className="p-4">
      <Row>
        {Array.from({ length: 20 }).map((_, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="card w-80 d-flex flex-column align-items-center justify-content-center m-3 position-relative" style={{ minWidth: "250px", maxWidth: "450px" }}>
              <img src={images[index % images.length]} className="card-img-top" alt={`Imagen ${index + 1}`} style={{ height: "300px", objectFit: "center" }} />
              <div className="card-body text-center">
                <h4 className="card-title text-dark">{titles[index]}</h4>
                <p className="card-text text-dark" style={{ fontSize: "0.85rem" }}>Disponible para: Play Station 4/5, PC, XBOX SERIES X.</p>
                {/* Modificado el botón para incluir el precio y cambiar el texto a "Add to" */}
                <button className="btn btn-primary" style={{ padding: "0.25rem 0.75rem" }}>Buy<span className="ms-1">69'90€</span></button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsAll;
