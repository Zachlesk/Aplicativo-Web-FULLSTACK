import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table, Modal  } from "react-bootstrap";
import UpdateJaulas from "./UpdateJaulas"; 
import CreateJaulas from "./CreateJaulas" 
import './styles/ReadJaulas.css'
import table from '../../assets/table.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ReadJaulas() {
    
    const [APIdata, setAPIdata] = useState([]);
    
    const [showModal, setShowModal] = useState(false);
    const [showModalPost, setShowModalPost] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false); 

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleClosePost = () => setShowModalPost(false);
    const handleShowPost = () => setShowModalPost(true);

    const handleCloseInfo = () => setShowModalInfo(false);
    const handleShowInfo = () => setShowModalInfo(true);

    
    useEffect(()=>{
        axios.get('http://localhost:8020/jaulas/all')
        .then((response)=>{
            console.log(response.data);
            setAPIdata(response.data);
        })
    },[])


    const setData = (data) => {
        const { _id, nombre, descripcion, capacidad, temperatura } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Descripcion', descripcion);
        localStorage.setItem('Capacidad', capacidad);
        localStorage.setItem('Temperatura', temperatura);

    }

      const getData = ()=>{
        axios.get('http://localhost:8020/jaulas/all')
        .then((getData) => {
            setAPIdata(getData.data)
            console.log(APIdata);
        })
    }

    const onDelete = (id)=>{
        axios.delete(`http://localhost:8020/jaulas/delete/${id}`)
        .then(() => {
          alert("¡Datos eliminados!");
            getData()
        })  
    }

    return ( 
        <div>
        <Button
          className="btn btn-warning btn-round add"
          onClick={handleShowPost}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </Button>
        {showModalPost && <CreateJaulas show={showModalPost} handleClosePost={handleClosePost} />}
  
        <div class="table-container">
        <Table hover>
          <thead>
            <tr>
              <th> <img src={table} className='tableimage' style={{borderRadius: '30px'}} width={140} alt="Imagen de la mariposa"/> </th> 
            </tr>
          </thead>
          <tbody>
            {APIdata.map((data) => (
              <tr className='render' key={data.nombre}>
                <td>
                <div className="text">
                  <b>Nombre de la jaula:</b> {data.nombre}
                  </div>
                  <div className="buttons">
                  <Button
                      className="btn btn-info"
                      onClick={() => { handleShowInfo(); setData(data); }}
                    >
                      Descripción

                    </Button>
                    <Button
                      className="btn btn-warning"
                      onClick={() => { handleShow(); setData(data); }}
                    >
                     {showModal && <UpdateJaulas show={showModal} handleClose={handleClose} />}
                      Editar
                    </Button>
                    <Button
                      className="btn btn-danger"
                      onClick={() => onDelete(data._id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
  </div>
        
        <Modal variant="dark" show={showModalInfo} onHide={handleCloseInfo} className="custom-modal">
  <Modal.Header closeButton>
    <Modal.Title className="mx-auto"> Descripción de la jaula 🦋</Modal.Title>
  </Modal.Header>
  <Modal.Body className="d-flex align-items-center">
  <div className="mx-auto">
    <p><b>Nombre:</b> {localStorage.getItem('Nombre')}</p>
    <p><b>Descripción:</b> {localStorage.getItem('Descripcion')}</p>
    <p><b>Capacidad:</b> {localStorage.getItem('Capacidad')}</p>
    <p><b>Temperatura:</b> {localStorage.getItem('Temperatura')}</p>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseInfo}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>
</div>
    );
     ;
}
