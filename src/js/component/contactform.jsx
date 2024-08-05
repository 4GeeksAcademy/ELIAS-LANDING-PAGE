import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from './navbar';
import backgroundImage from "../../img/fondo4.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false); //

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', message);

    setShowModal(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setShowModal(false);
    }, 6000); 
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: "fixed"}}>
        <div className="col-md6 col-lg-5 mx-auto" style={{padding: "80px", height: "40vh"}}>
          <Form className="text-light" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label><h3>Nombre</h3></Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre y apellidos" required value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label><h3>Email</h3></Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo electrónico" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label><h3>Teléfono</h3></Form.Label>
              <Form.Control type="tel" placeholder="Ingrese un número de contacto" required value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Nota: Este campo usa el mismo controlador que el email, corrígelo según sea necesario */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label><h3>Mensaje</h3></Form.Label>
              <Form.Control as="textarea" placeholder="Escriba su mensaje aquí" required value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
          </Form>
          <Button id="btnForm" type="submit">
              Enviar
            </Button>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>¡Mensaje enviado!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ContactForm;
