import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateVisitantes( { show, handleClosePost } ){

    let history = useHistory();
    const [fecha, setFecha] = useState('');
    const [observador, setObservador] = useState('');
    const [notas, setNotas] = useState('');
    const [dataVisitantes, setDataVisitantes] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:8020/visitantes/all")
        .then((response) => {
            console.log(response.data);
            setDataVisitantes(response.data)
        })
        }, []);

    const postData = () => {
        axios.post(`http://localhost:8020/observaciones/add`, {
            fecha: fecha,
            observador: observador,
            notas: notas,
        }).then(()=>{
            history.push('/observaciones')
            window.location.reload();
        })
    }

    return(
        <div>
            <div>
            <Modal show={show} onHide={handleClosePost} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> ¡Agrega una nueva observación! </Modal.Title>
                </Modal.Header>
                <Modal.Body className='a'>

                    <label> Fecha:</label>
                    <input placeholder="Fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

                    <label> Observador: </label>
                    <select onChange={(e) => setObservador(e.target.value)}>
                        <option value=''> Seleccionar observador: </option>
                            {Array.isArray(dataVisitantes) && dataVisitantes.map((element) => (
                        <option key={element._id} value={element._id}> {element.nombre} </option>     
                        ))}
                    </select>

                    <label> Notas: </label>
                    <input placeholder="Notas" type="text" value={notas} onChange={(e) => setNotas(e.target.value)}/>

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
