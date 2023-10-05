import React, { useState } from 'react';
import MyModal from './MyModal';
import butterfly from '../assets/butterfly.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css'

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className='homepage'>
    <div className='imagendiv'>
      <img src={butterfly} className='imagen' alt="Imagen de la página de inicio" />
      </div>
    <div className='descripcion'> 
    <h1 style={{ fontFamily: 'Montserrat', fontWeight: 900 }}> Celestialfly </h1>
      <p> Aplicativo web que permite conocer la información de las mariposas, alimentación y jaulas que existen en nuestro mariposario. También podrás encontrar observaciones de nuestros visitantes sobre el lugar.  </p>
      <button className= 'botonsito' onClick={handleShow}> ¿A dónde quieres ir? </button>
      {showModal && <MyModal show={showModal} handleClose={handleClose} />}
  
      </div>
    </div>
  );
}

export default HomePage;
