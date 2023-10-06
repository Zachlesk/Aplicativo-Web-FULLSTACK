import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import UpdateObservaciones from "./UpdateObservaciones"; 
import CreateObservaciones from "./CreateObservaciones"

import './styles/ReadMariposas.css'

export default function ReadObservaciones() {
    
    const [APIdata, setAPIdata] = useState([]);
    
    const [showModal, setShowModal] = useState(false);
    const [showModalPost, setShowModalPost] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleClosePost = () => setShowModalPost(false);
    const handleShowPost = () => setShowModalPost(true);
    
    useEffect(()=>{
        axios.get('http://localhost:8020/observaciones/all')
        .then((response)=>{
            console.log(response.data);
            setAPIdata(response.data);
        })
    },[])

    const setData = (data) => {
        const { _id, fecha, observador, notas } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Fecha', fecha);
        localStorage.setItem('Observador', observador.nombre);
        localStorage.setItem('Notas', notas);

    }

      const getData = ()=>{
        axios.get('http://localhost:8020/observaciones/all')
        .then((getData) => {
            setAPIdata(getData.data)
            console.log(APIdata);
        })
    }

    const onDelete = (id)=>{
        axios.delete(`http://localhost:8020/observaciones/delete/${id}`)
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
                {showModalPost && <CreateObservaciones show={showModalPost} handleClosePost={handleClosePost} />}
            <Row xs={1} md={2} className="g-2">


        {APIdata.map((data) => (
          <Col key={data.observador} xs={12} md={2} className="mb-5 col">
            <Card className="bg-dark text-white custom-card">
              <Card.Body>
              <div className="container-bb"> 
              <div className="text"> 
                <Card.Text style={{ fontSize: '12px', marginTop: '30px'}}> <b> Observador: </b> {data.observador.nombre}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Notas: </b> {data.notas}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Fecha : </b> {data.fecha}</Card.Text>
                </div>
                <div className="rowt">
                <Button 
                  className="btn btn-warning btn-round" 
                  onClick={() => { handleShow(); setData(data); }}> 
                    <i className="fa fa-pencil" aria-hidden="true"> </i>
                </Button>
                {showModal && <UpdateObservaciones show={showModal} handleClose={handleClose} />}

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
