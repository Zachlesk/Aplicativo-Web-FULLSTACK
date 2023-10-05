import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useHistory } from "react-router";
import './styles/UpdateMariposa.css'

export default function UpdateMariposas( { show, handleClose } ){
    let history = useHistory();
    const [id, setId] = useState(null);
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

        setId(localStorage.getItem('ID'));
        setNombreComun(localStorage.getItem('Nombre comun'));
        setNombreCientifico(localStorage.getItem('Nombre cientifico'));
        setDescripcion(localStorage.getItem('Descripcion'));
        setImagen(localStorage.getItem('Imagen'));
        setHabitat(localStorage.getItem('Habitat'));
        setDistribucion(localStorage.getItem('Distribución'));
        setJaulas(localStorage.getItem('Jaula'));
        setAlimentos(localStorage.getItem('Alimentacion'));
        
        }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8020/mariposas/update/${id}`, {
            nombre_comun: nombre_comun,
            nombre_cientifico: nombre_cientifico,
            descripcion: descripcion,
            imagen: imagen,
            habitat: habitat,
            distribucion: distribucion,
            jaula: jaulas,
            alimentacion: alimentos
        }).then(()=>{
            handleClose();
            history.push('/mariposas')
            window.location.reload();
        })
    }

    return(
        <div>
            <div>
            <Modal show={show} onHide={handleClose} className="custom-modal">

                <Modal.Header className='b'>
                    <Modal.Title> <h2> ¡Edita los datos de la mariposa! </h2> </Modal.Title>
                </Modal.Header>
                <Modal.Body className='a'>
                    <label>Nombre Común:</label>
                    <input placeholder="nombre_comun" type="text" value={nombre_comun} onChange={(e) => setNombreComun(e.target.value)} />

                    <label>Nombre Científico:</label>
                    <input placeholder="nombre_cientifico" type="text" value={nombre_cientifico} onChange={(e) => setNombreCientifico(e.target.value)}/>

                    <label>Descripción:</label>
                    <input placeholder="descripcion" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

                    <label>Imagen: </label>
                    <input placeholder="imagen" type="text" value={imagen} onChange={(e) => setImagen(e.target.value)}/>

                    <label>Habitat:</label>
                    <input placeholder="habitat" type="text" value={habitat} onChange={(e) => setHabitat(e.target.value)}/>

                    <label>Distribución:</label>
                    <input placeholder="distribucion" type="text" value={distribucion} onChange={(e) => setDistribucion(e.target.value)}/>

                    <label> Jaula: </label>
                    <select onChange={(e) => setJaulas(e.target.value)}>
                        <option value=''>Seleccionar jaula: </option>
                            {Array.isArray(dataJaula) && dataJaula.map((element) => (
                        <option key={element._id} value={element._id}> {element.nombre} </option>     
                        ))}
                    </select>

                    <label> Alimentacion: </label>
                    <select onChange={(e) => setAlimentos(e.target.value)}>
                        <option value=''> Seleccionar alimentacion: </option>
                            {Array.isArray(dataAlimentacion) && dataAlimentacion.map((element) => (
                        <option key={element._id} value={element._id}>{element.nombre}</option>     
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

