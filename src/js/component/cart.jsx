import React from "react";
import Navbar from "./navbar";
import backgroundImage from "../../img/fondoConstruction.png";

const Cart= () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "content", backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundAttachment: "fixed"}}></div>
    </>
  );
};

export default Cart;