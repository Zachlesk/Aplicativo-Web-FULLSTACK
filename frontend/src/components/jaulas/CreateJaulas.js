import { useState } from "react";
import { useHistory } from "react-router";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdateMariposas( { show, handleClosePost } ){

    let history = useHistory();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('')
    const [capacidad, setCapacidad] = useState('');
    const [temperatura, setTemperatura] = useState('');

    const postData = () => {
        axios.post(`http://localhost:8020/jaulas/add`, {
            nombre: nombre,
            descripcion: descripcion,
            capacidad: capacidad,
            temperatura: temperatura
        }).then(()=>{
            history.push('/jaulas')
            window.location.reload();
        })
    }

    return(
        <div>
            <div>
            <Modal show={show} onHide={handleClosePost} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> ¡Agrega una nueva mariposa! </Modal.Title>
                </Modal.Header>
                <Modal.Body className='a'>
                    <label> Nombre:</label>
                    <input placeholder="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label> Descripción:</label>
                    <input placeholder="Descripción" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

                    <label> Capacidad: </label>
                    <input placeholder="Imagen" type="number" value={capacidad} onChange={(e) => setCapacidad(e.target.value)}/>

                    <label> Temperatura: </label>
                    <input placeholder="Temperatura" type="text" value={temperatura} onChange={(e) => setTemperatura(e.target.value)}/>


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

