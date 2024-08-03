import React from "react";
import backgroundImage from "../../img/fondo.png";

const Section = () => {
  return (
    <div className="container_section m-4 mt-5 border border-secondary rounded-2" style={{
      padding: "50px",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
  }}>
      <h1 className="display-1 p-3" style={{ fontFamily: "Rubik Maps", width:"100px"}}>CALL OF DUTTY SERIES</h1>
      
      <p className="lead p-4">¡Sumérgete en el corazón del caos con Call of Duty, donde cada misión es una aventura épica! Desde las playas de Normandía hasta las calles de un futuro post-apocalíptico, Call of Duty te lleva a través de los escenarios más emocionantes de la historia militar. Disfruta de una experiencia inmersiva que te hará sentir parte de la acción, con gráficos impresionantes, sonidos realistas y una trama que te mantendrá al borde de tu asiento.</p>
      
      <button type="button" className="btn btn-primary btn-lg m-3 mb-5">VER SAGA COMPLETA</button>
    </div>
  );
};

export default Section;
