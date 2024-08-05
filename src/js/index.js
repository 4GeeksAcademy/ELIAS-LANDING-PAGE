import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./component/home.jsx";
import CardsAll from "./component/cardsAll.jsx";
import ContactForm from "./component/contactform.jsx";
import Cart from "./component/cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards-all" element={<CardsAll />} />
      <Route path="/contact-form" element={<ContactForm />} />
      <Route path="/cart" element={<Cart />} />

      
    </Routes>
  </Router>
);