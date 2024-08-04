import React from 'react';

const ContactSection = () => {
  return (
    <section className="contacto" id="contacto">
      <div className="contenido-seccion">
        <h2 className="titulo-seccion"></h2>
        <h3>Contacto</h3>
        <div className="fila">
          <div className="col">
            <h2><i className="fas fa-phone"></i>Teléfono</h2>
            <span className="info-contacto">+34 658 64 00 66</span>
          </div>
          <div className="col">
            <h2><i className="fas fa-envelope"></i>Em@il</h2>
            <a href="mailto:eliasjiminian@gmail.com">eliasjiminian@gmail.com</a>
          </div>
          <div className="col">
            <h2><i className="fas fa-globe"></i>Website</h2>
            <a href="https://github.com/eliasjr1989" targetBlank className="info-contacto">https://github.com/eliasjr1989</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4 className="copyright">Copyright <i className="far fa-copyright"></i> Elías Jiminián</h4>
      </div>
    </section>
  );
};

export default ContactSection;