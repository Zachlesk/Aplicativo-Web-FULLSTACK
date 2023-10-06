import { useState } from "react";
import { useHistory } from "react-router";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdateAlimentacion( { show, handleClosePost } ){

    let history = useHistory();
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [fuente, setFuente] = useState('');
    

    const postData = () => {
        axios.post(`http://localhost:8020/alimentacion/add`, {
            nombre: nombre,
            tipo: tipo,
            descripcion: descripcion,
            disponibilidad: disponibilidad,
            fuente: fuente
        }).then(()=>{
            history.push('/alimentacion')
            window.location.reload();
        })
    }

    return(
        <div>
            <div>
            <Modal show={show} onHide={handleClosePost} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> ¡Agrega una nuevo alimento! 🌸 </Modal.Title>
                </Modal.Header>
                <Modal.Body className='a'>
                    <label>Nombre</label>
                    <input placeholder="Nombre común" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label>Tipo:</label>
                    <input placeholder="Tipo" type="text" value={tipo} onChange={(e) => setTipo(e.target.value)}/>

                    <label>Descripción:</label>
                    <input placeholder="Descripción" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

                    <label>Disponibilidad: </label>
                    <input placeholder="Disponbilidad" type="text" value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)}/>

                    <label>Fuente:</label>
                    <input placeholder="Fuente" type="text" value={fuente} onChange={(e) => setFuente(e.target.value)}/>

                </Modal.Body>
                <Modal.Footer>
                    <div className="text-center ">
                        Designed by: Zachlesk
                        <a href="https://github.com/Zachlesk" className="text-white me-2 custom-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github fa-2x"></i>
                        </a>
                    </div>
                    <Button  type="submit" onClick={postData}>
                        Agrega 
                    </Button>
                    <Button type="submit" variant="secondary" onClick={handleClosePost}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
    )


}

