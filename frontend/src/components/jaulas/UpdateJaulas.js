import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateJaulas ( { show, handleClose } ){
    let history = useHistory();
    const [id, setId] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('')
    const [capacidad, setCapacidad] = useState('');
    const [temperatura, setTemperatura] = useState('');
    
    useEffect(()=>{
        setId(localStorage.getItem('ID'));
        setNombre(localStorage.getItem('Nombre'));
        setDescripcion(localStorage.getItem('Descripcion'));
        setCapacidad(localStorage.getItem('Capacidad'));
        setTemperatura(localStorage.getItem('Temperatura'));
        }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8020/jaulas/update/${id}`, {
            nombre: nombre,
            descripcion: descripcion,
            capacidad: capacidad,
            temperatura: temperatura,
        }).then(()=>{
            handleClose();
            history.push('/jaulas')
            window.location.reload();
        })
    }

    return(
        <div>
            <div>
            <Modal show={show} onHide={handleClose} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> <h2> ¡Edita los datos de la jaula! </h2> </Modal.Title>
                </Modal.Header>
                <Modal.Body className='a'>
                    <label>Nombre de la Jaula: </label>
                    <input placeholder="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label>Descripción:</label>
                    <input placeholder="descripcion" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

                    <label>Capacidad:</label>
                    <input placeholder="capacidad" type="number" value={capacidad} onChange={(e) => setCapacidad(e.target.value)}/>

                    <label>Temperatura:</label>
                    <input placeholder="temperatura" type="text" value={temperatura} onChange={(e) => setTemperatura(e.target.value)}/>

                </Modal.Body>
                <Modal.Footer>
                    <div className="text-center ">
                        Designed by: Zachlesk
                        <a href="https://github.com/Zachlesk" className="text-white me-2 custom-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github fa-2x"></i>
                        </a>
                    </div>
                    <Button variant="primary" type="submit" onClick={updateAPIData}>
                        Guardar Cambios
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
    )


}

