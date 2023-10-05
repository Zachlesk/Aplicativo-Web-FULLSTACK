import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import './styles/ReadMariposas.css'
import UpdateMariposas from "./UpdateMariposas"; 
import CreateMariposas from "./CreateMariposas"

export default function ReadMariposas() {
    
    const [APIdata, setAPIdata] = useState([]);
    
    const [showModal, setShowModal] = useState(false);
    const [showModalPost, setShowModalPost] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleClosePost = () => setShowModalPost(false);
    const handleShowPost = () => setShowModalPost(true);
    
    useEffect(()=>{
        axios.get('http://localhost:8020/mariposas/all')
        .then((response)=>{
            console.log(response.data);
            setAPIdata(response.data);
        })
    },[])

    const setData = (data) => {
        const { _id, nombre_comun, nombre_cientifico, descripcion, imagen, habitat, distribucion, jaulas, alimentos } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Nombre comun', nombre_comun);
        localStorage.setItem('Nombre cientifico', nombre_cientifico);
        localStorage.setItem('Descripcion', descripcion);
        localStorage.setItem('Imagen', imagen);
        localStorage.setItem('Habitat', habitat);
        localStorage.setItem('Distribución', distribucion);
        localStorage.setItem('Jaula', jaulas.nombre);
        localStorage.setItem('Alimentacion', alimentos.nombre);

    }

      const getData = ()=>{
        axios.get('http://localhost:8020/mariposas/all')
        .then((getData) => {
            setAPIdata(getData.data)
            console.log(APIdata);
        })
    }

    const onDelete = (id)=>{
        axios.delete(`http://localhost:8020/mariposas/delete/${id}`)
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
                {showModalPost && <CreateMariposas show={showModalPost} handleClosePost={handleClosePost} />}
            <Row xs={1} md={3} className="g-4">


        {APIdata.map((data) => (
          <Col key={data.nombre_cientifico} xs={12} md={4} className="mb-5 col">
            <Card className="bg-dark text-white custom-card">
              <Card.Body>
              <img src={data.imagen} style={{borderRadius: '30px'}} width={240 } alt="Imagen de la mariposa" />
                <Card.Text style={{ fontSize: '12px', marginTop: '30px'}}> <b> Nombre común: </b> {data.nombre_comun}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Nombre cientifico: </b> {data.nombre_cientifico}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Descripción : </b> {data.descripcion}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Hábitat :</b> {data.habitat}</Card.Text>
                <Card.Text style={{ fontSize: '12px' }}> <b> Distribución : </b>{data.distribucion}</Card.Text>
                <div className="row">
                <Button 
                  className="btn btn-warning btn-round" 
                  onClick={() => { handleShow(); setData(data); }}> 
                    <i className="fa fa-pencil" aria-hidden="true"> </i>
                </Button>
                {showModal && <UpdateMariposas show={showModal} handleClose={handleClose} />}


                  <Button 
                    className="btn btn-danger btn-round" 
                    onClick={() => onDelete(data._id)}> 
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Button>
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
