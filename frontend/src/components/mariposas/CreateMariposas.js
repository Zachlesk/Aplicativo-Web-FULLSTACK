import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CreateMariposa.css'

export default function UpdateMariposas( { show, handleClosePost } ){

    let history = useHistory();
    const [nombre_comun, setNombreComun] = useState('');
    const [nombre_cientifico, setNombreCientifico] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [habitat, setHabitat] = useState('');
    const [distribucion, setDistribucion] = useState('');
    const [jaulas, setJaulas] = useState('');
    const [alimentos, setAlimentos] = useState('');
    const [dataJaula, setDataJaula] = useState('');
    const [dataAlimentacion, setDataAlimentacion] = useState('');
    
    useEffect(()=>{
        axios.get("http://localhost:8020/jaulas/all")
        .then((response) => {
            console.log(response.data);
            setDataJaula(response.data)
        })
        axios.get("http://localhost:8020/alimentacion/all")
        .then((response) => {
            setDataAlimentacion(response.data)
            console.log(response.data);
        })

        }, []);

    const postData = () => {
        axios.post(`http://localhost:8020/mariposas/add`, {
            nombre_comun: nombre_comun,
            nombre_cientifico: nombre_cientifico,
            descripcion: descripcion,
            imagen: imagen,
            habitat: habitat,
            distribucion: distribucion,
            jaula: jaulas,
            alimentacion: alimentos
        }).then(()=>{
            history.push('/mariposas')
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
                    <label>Nombre Común:</label>
                    <input placeholder="Nombre común" type="text" value={nombre_comun} onChange={(e) => setNombreComun(e.target.value)} />

                    <label>Nombre Científico:</label>
                    <input placeholder="Nombre cientifico" type="text" value={nombre_cientifico} onChange={(e) => setNombreCientifico(e.target.value)}/>

                    <label>Descripción:</label>
                    <input placeholder="Descripción" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

                    <label>Imagen: </label>
                    <input placeholder="Imagen" type="text" value={imagen} onChange={(e) => setImagen(e.target.value)}/>

                    <label>Habitat:</label>
                    <input placeholder="Hábitat" type="text" value={habitat} onChange={(e) => setHabitat(e.target.value)}/>

                    <label>Distribución:</label>
                    <input placeholder="Distribución" type="text" value={distribucion} onChange={(e) => setDistribucion(e.target.value)}/>

                    <label> Jaula: </label>
                    <select onChange={(e) => setJaulas(e.target.value)}>
                        <option value=''> Seleccionar jaula: </option>
                            {Array.isArray(dataJaula) && dataJaula.map((element) => (
                        <option key={element._id} value={element._id}> {element.nombre} </option>     
                        ))}
                    </select>

                    <label> Alimentacion: </label>
                    <select onChange={(e) => setAlimentos(e.target.value)}>
                        <option value=''> Seleccionar alimentación: </option>
                            {Array.isArray(dataAlimentacion) && dataAlimentacion.map((element) => (
                        <option key={element._id} value={element._id}> {element.nombre} </option>     
                        ))}
                    </select>

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

