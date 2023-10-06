import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdatObservaciones( { show, handleClose } ){
    let history = useHistory();
    const [id, setId] = useState(null);
    const [fecha, setFecha] = useState('');
    const [observador, setObservador] = useState('');
    const [notas, setNotas] = useState('');
    const [dataVisitantes, setDataVisitantes] = useState('');
    
    useEffect(()=>{
        axios.get("http://localhost:8020/visitantes/all")
        .then((response) => {
            setDataVisitantes(response.data)
            console.log(response.data);
        })

        setId(localStorage.getItem('ID'));
        setFecha(localStorage.getItem('Fecha'));
        setObservador(localStorage.getItem('Observador'));
        setNotas(localStorage.getItem('Notas'));
        
        }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8020/observaciones/update/${id}`, {
            fecha: fecha,
            observador: observador,
            notas: notas,
        }).then(()=>{
            handleClose();
            history.push('/observaciones')
            window.location.reload();
        })
    }

    return(
        <div>
            <div>
            <Modal show={show} onHide={handleClose} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> <h2> ¡Edita los datos de la observacion! </h2> </Modal.Title>
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

