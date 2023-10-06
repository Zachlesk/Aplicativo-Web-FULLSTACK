import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import './styles/ReadVisitantes.css'
import UpdateVisitantes from "./UpdateVisitantes"; 
import CreateVisitantes from "./CreateVisitantes"

export default function ReadVisitantes() {
    
    const [APIdata, setAPIdata] = useState([]);
    
    const [showModal, setShowModal] = useState(false);
    const [showModalPost, setShowModalPost] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleClosePost = () => setShowModalPost(false);
    const handleShowPost = () => setShowModalPost(true);
    
    useEffect(()=>{
        axios.get('http://localhost:8020/visitantes/all')
        .then((response)=>{
            console.log(response.data);
            setAPIdata(response.data);
        })
    },[])

    const setData = (data) => {
        const { _id, nombre, correo, fecha_visita, edad, ciudad, telefono } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Correo', correo);
        localStorage.setItem('Fecha visita', fecha_visita);
        localStorage.setItem('Edad', edad);
        localStorage.setItem('Ciudad', ciudad);
        localStorage.setItem('Telefono', telefono);

    }

      const getData = ()=>{
        axios.get('http://localhost:8020/visitantes/all')
        .then((getData) => {
            setAPIdata(getData.data)
            console.log(APIdata);
        })
    }

    const onDelete = (id)=>{
        axios.delete(`http://localhost:8020/visitantes/delete/${id}`)
        .then(() => {
          alert("¡Datos eliminados!");
            getData()
        })  
    }

    return ( 
      <div>

        <Button 
                  className="btn btn-warning btn-round add" 
                  onClick={() => { handleShowPost()}}> 
                    <i className="fa fa-plus" aria-hidden="true"> </i>
                </Button>
                {showModalPost && <CreateVisitantes show={showModalPost} handleClosePost={handleClosePost} />}
            <Row xs={1} md={2} className="g-4">


        {APIdata.map((data) => (
          <Col key={data.nombre_cientifico} xs={12} md={2} className="mb-5 col">
            <Card className="bg-light text-dark custom-card">
              <Card.Body>
              <div className="container-bb"> 
              <div className="text"> 
                <Card.Text style={{ fontSize: '12px', marginTop: '30px'}}> <b> Nombre: </b> {data.nombre}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Correo: </b> {data.correo}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Fecha visita : </b> {data.fecha_visita}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Edad :</b> {data.edad}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Ciudad : </b>{data.ciudad}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Telefono : </b>{data.telefono}</Card.Text>
                </div>
                <div className="rowt">
                <Button 
                  className="btn btn-warning btn-round" 
                  onClick={() => { handleShow(); setData(data); }}> 
                    <i className="fa fa-pencil" aria-hidden="true"> </i>
                </Button>
                {showModal && <UpdateVisitantes show={showModal} handleClose={handleClose} />}

                  <Button 
                    className="btn btn-danger btn-round" 
                    onClick={() => onDelete(data._id)}> 
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
    );
     ;
}
