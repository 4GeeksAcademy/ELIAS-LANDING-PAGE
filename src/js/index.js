import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./component/home.jsx";
import SagaCompleta from "./component/sagacompleta.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saga-completa" element={<SagaCompleta />} />
    </Routes>
  </Router>
);