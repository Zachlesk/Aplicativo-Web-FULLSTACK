import axios from "axios";
import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import './styles/ReadAlimentacion.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import alimentos from '../../assets/alimentos.png'

import CreateAlimentacion from "./CreateAlimentacion"
import UpdateAlimentacion from "./UpdateAlimentacion";


export default function ReadAlimentacion() {
    
    const [APIdata, setAPIdata] = useState([]);

    const [selectedDropdown, setSelectedDropdown] = useState(null); 

    const [showModal, setShowModal] = useState(false);
   const [showModalPost, setShowModalPost] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true); 

    const handleClosePost = () => setShowModalPost(false);
    const handleShowPost = () => setShowModalPost(true);

    
    useEffect(()=>{
        axios.get('http://localhost:8020/alimentacion/all')
        .then((response)=>{
            console.log(response.data);
            setAPIdata(response.data);
        })
    },[])


    const setData = (data) => {
        const { _id, nombre, tipo, descripcion, disponibilidad, fuente } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Tipo', tipo);
        localStorage.setItem('Descripcion', descripcion);
        localStorage.setItem('Disponibilidad', disponibilidad);
        localStorage.setItem('Fuente', fuente);

    }

    const toggleDropdown = (index) => {
        if (selectedDropdown === index) {
            setSelectedDropdown(null); 
        } else {
            setSelectedDropdown(index); 
        }
    };


      const getData = ()=>{
        axios.get('http://localhost:8020/alimentacion/all')
        .then((getData) => {
            setAPIdata(getData.data)
            console.log(APIdata);
        })
    } 

    const onDelete = (id)=>{
        axios.delete(`http://localhost:8020/alimentacion/delete/${id}`)
        .then(() => {
          alert("¡Datos eliminados!");
            getData()
        })  
    } 

    return (
        <div>
            <Button className="btn btn-warning btn-round add" onClick={handleShowPost}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </Button>
            {showModalPost && <CreateAlimentacion show={showModalPost} handleClosePost={handleClosePost} />}
            <img src={alimentos} className="alimentos" style={{borderRadius: '30px'}} width={400 } alt="Imagen de la mariposa" />
            <div className="large-container"> 
            <img src={alimentos} className="alimentos" style={{borderRadius: '30px'}} width={400 } alt="Imagen de la mariposa" />
            {APIdata.map((data, index) => (
                <div className={`custom-dropdown ${selectedDropdown === index ? 'open' : ''}`} key={index}>
                    <button className="dropdown-button" onClick={() => toggleDropdown(index)}>
                    🦋 <b> {data.nombre} </b> 
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </button>
                    {selectedDropdown === index && (
                        <div className="dropdown-content">
                            <p>  <h4><b>Nombre: </b>  {data.nombre} 🌺 </h4>   </p>
                            <p> <b>🐝 Tipo: </b> {data.tipo} </p>
                            <p> <b> 🐝Descripcion: </b> {data.descripcion} </p>
                            <p> <b> 🐝Disponibilidad: </b> {data.disponibilidad} </p>
                            <p> <b> 🐝Fuente: </b> {data.fuente} </p>
                            <div className="buttons">
                    <Button
                      className="btn btn-warning"
                      onClick={() => { handleShow(); setData(data); }}
                    >
                     {showModal && <UpdateAlimentacion show={showModal} handleClose={handleClose} />}
                      Editar
                    </Button>
                    <Button
                      className="btn btn-danger"
                      onClick={() => onDelete(data._id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                        </div>
                    )}
                </div>
            ))}
</div>
        </div>
    )
}