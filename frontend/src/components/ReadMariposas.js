import axios from "axios";
import { useEffect, useState } from "react";
/* import { Card, Table, Button } from "semantic-ui-react"; */
import { Button, Card, Col, Row } from "react-bootstrap";
import './styles/ReadMariposas.css'
/* import { Link } from 'react-router-dom'; */


export default function ReadMariposas() {
    
    const [APIdata, setAPIdata] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8020/mariposas/all')
        .then((response)=>{
            console.log(response.data);
            setAPIdata(response.data);
        })
    },[])

    const setData = (data) => {
        const { nombre_comun, nombre_cientifico, descripcion, habitat, distribucion, jaula, alimentacion } = data;
        localStorage.setItem('Nombre comun', nombre_comun);
        localStorage.setItem('Nombre cientifico', nombre_cientifico);
        localStorage.setItem('Descripcion', descripcion);
        localStorage.setItem('Habitat', habitat);
        localStorage.setItem('Distribución', distribucion);
        localStorage.setItem('Jaula', jaula);
        localStorage.setItem('Alimentacion', alimentacion);

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
            getData()
        })  
    }

    return ( 
      <div>
      <Row xs={1} md={3} className="g-4">
        {APIdata.map((data) => (
          <Col key={data.nombre_cientifico} xs={12} md={4} className="mb-5 col">
            <Card className="bg-dark text-white custom-card">
              <Card.Body>
                <Card.Text> <b> Nombre común: </b> {data.nombre_comun}</Card.Text>
                <Card.Text> <b> Nombre cientifico: </b> {data.nombre_cientifico}</Card.Text>
                <Card.Text> <b> Descripción : </b> {data.descripcion}</Card.Text>
                <Card.Text> <b> Hábitat :</b> {data.habitat}</Card.Text>
                <Card.Text> <b> Distribución : </b>{data.distribucion}</Card.Text>
                <div className="row">
                  <Button className="btn btn-warning btn-round" onClick={() => setData(data)}> <i className="fa fa-pencil" aria-hidden="true"> </i></Button>
                  <Button className="btn btn-danger btn-round" onClick={() => onDelete(data.id)}> <i className="fa fa-trash" aria-hidden="true"></i></Button>
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
