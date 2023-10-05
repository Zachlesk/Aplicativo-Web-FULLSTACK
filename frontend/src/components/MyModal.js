import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MyModal.css'

function MyModal({ show, handleClose }) {
  const history = useHistory(); 

  const handleRedirect = (route) => {
    history.push(route); 
    handleClose(); 
  };
  
  return (
    <Modal show={show} onHide={handleClose} className="custom-modal" 
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
>

      <Modal.Header className='b'>
        <Modal.Title> Mariposario Celestialfly 🦋 </Modal.Title>
      </Modal.Header>
      <Modal.Body className='a'>
        <Button variant="dark" onClick={() => handleRedirect('/mariposas')}>
          ¡Conoce a nuestras mariposas!
          <i className="fa fa-arrow-right"></i>
        </Button>
        <Button variant="dark" onClick={() => handleRedirect('/jaulas')}>
          ¡Observa las jaulas en nuestro mariposario!
          <i className="fa fa-arrow-right"></i>
        </Button>
        <Button variant="dark" onClick={() => handleRedirect('/alimentacion')}>
          ¡Infórmate sobre los alimentos de las mariposas!
          <i className="fa fa-arrow-right"></i>
        </Button>
        <Button variant="dark" onClick={() => handleRedirect('/visitantes')}>
          ¡Nuestros queridos visitantes!
          <i className="fa fa-arrow-right"></i>
        </Button>
        <Button variant="dark" onClick={() => handleRedirect('/observaciones')}>
          ¡Observaciones que nos ayudan a crecer mejorar!
          <i className="fa fa-arrow-right"></i>
        </Button>
      </Modal.Body>
      <Modal.Footer>
      <div className="text-center ">
          Designed by: Zachlesk 
          <a href="https://github.com/Zachlesk" className="text-white me-2 custom-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x"></i>
            </a>
        </div>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
      {/* </div> */}
    </Modal>
  );
}

export default MyModal;
