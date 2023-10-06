import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateAlimentacion ( { show, handleClose } ){
    let history = useHistory();
    const [id, setId] = useState(null);
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [fuente, setFuente] = useState('');
    
    useEffect(()=>{
        setId(localStorage.getItem('ID'));
        setNombre(localStorage.getItem('Nombre'));
        setTipo(localStorage.getItem('Tipo'));
        setDescripcion(localStorage.getItem('Descripcion'));
        setDisponibilidad(localStorage.getItem('Disponibilidad'));
        setFuente(localStorage.getItem('Fuente'));
        }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8020/alimentacion/update/${id}`, {
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
            <Modal show={show} onHide={handleClose} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> <h2> ¡Edita los datos de los alimentos! 🌹 </h2> </Modal.Title>
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

