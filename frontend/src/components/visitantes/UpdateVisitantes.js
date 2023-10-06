import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateVisitantes( { show, handleClose } ){
    let history = useHistory();
    const [id, setId] = useState(null);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [fecha_visita, setFechaVisita] = useState('');
    const [edad, setEdad] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [telefono, setTelefono] = useState('');
    
    useEffect(()=>{
        setId(localStorage.getItem('ID'));
        setNombre(localStorage.getItem('Nombre'));
        setCorreo(localStorage.getItem('Correo'));
        setFechaVisita(localStorage.getItem('Fecha Visita'));
        setEdad(localStorage.getItem('Edad'));
        setCiudad(localStorage.getItem('Ciudad'));
        setTelefono(localStorage.getItem('Telefono'));
        
        }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8020/visitantes/update/${id}`, {
            nombre: nombre,
            correo: correo,
            fecha_visita: fecha_visita,
            edad: edad,
            ciudad: ciudad,
            telefono: telefono,
        }).then(()=>{
            handleClose();
            history.push('/visitantes')
            window.location.reload();
        })
    }

    return(
        <div>
            <div>
            <Modal show={show} onHide={handleClose} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> <h2> ¡Edita los datos del visitante! </h2> </Modal.Title>
                </Modal.Header>
                <Modal.Body className='a'>
                    <label>Nombre:</label>
                    <input placeholder="nombre_comun" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label> Correo: </label>
                    <input placeholder="nombre_cientifico" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)}/>

                    <label> Fecha de visita: </label>
                    <input placeholder="fecha_visita" type="text" value={fecha_visita} onChange={(e) => setFechaVisita(e.target.value)}/>

                    <label> Edad: </label>
                    <input placeholder="edad" type="text" value={edad} onChange={(e) => setEdad(e.target.value)}/>

                    <label> Ciudad:</label>
                    <input placeholder="ciudad" type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>

                    <label> Telefono:</label>
                    <input placeholder="telefono" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>


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

