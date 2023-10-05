import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Table, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';


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
        <Card.Group>
  {APIdata.map((data) => {
    return (
      <div key={data.nombre_cientifico}>
        <Card>
          {data.nombre_comun}
          {data.nombre_cientifico}
          {data.descripcion}
          {data.habitat}
          {data.distribucion}
        </Card>
        <Link to='/update'>
          <Table.Cell>
            <Button onClick={() => setData(data)}>Actualizar</Button>
          </Table.Cell>
        </Link>
        <Table.Cell>
          <Button onClick={() => onDelete(data.id)}>Eliminar</Button>
        </Table.Cell>
      </div>
    );
  })}
</Card.Group>

        </div>
     );
}
