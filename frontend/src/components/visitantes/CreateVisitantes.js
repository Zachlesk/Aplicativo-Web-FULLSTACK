import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateVisitantes( { show, handleClosePost } ){

    let history = useHistory();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [fecha_visita, setFechaVisita] = useState('');
    const [edad, setEdad] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [telefono, setTelefono] = useState('');
    

    const postData = () => {
        axios.post(`http://localhost:8020/visitantes/add`, {
            nombre: nombre,
            correo: correo,
            fecha_visita: fecha_visita,
            edad: edad,
            ciudad: ciudad,
            telefono: telefono,
        }).then(()=>{
            history.push('/visitantes')
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
                <label>Nombre:</label>
                    <input placeholder="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label> Correo: </label>
                    <input placeholder="Correo" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)}/>

                    <label> Fecha de visita: </label>
                    <input placeholder="Fecha de visita" type="text" value={fecha_visita} onChange={(e) => setFechaVisita(e.target.value)}/>

                    <label> Edad: </label>
                    <input placeholder="Edad" type="text" value={edad} onChange={(e) => setEdad(e.target.value)}/>

                    <label> Ciudad:</label>
                    <input placeholder="Ciudad" type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>

                    <label> Telefono:</label>
                    <input placeholder="Telefono" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>

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
