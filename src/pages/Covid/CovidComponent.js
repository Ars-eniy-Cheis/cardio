import {React, useEffect, useState} from "react"

import {withRouter} from '../../model/withRouter';

import CovidPatients from '../../model/dataClasses/CovidPatients'
import CovidPatient from '../../model/dataClasses/CovidPatient'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Covid.css';

function CovidComponent(props) {

  const [covidPatients, setCovidPatients] = useState(new CovidPatients());

  //let covidPatients = new CovidPatients()

  let DisplayData = covidPatients.patients.map(
      (item)=>{
        return(
          <tr className="table-light">
            <td>{item.id}</td>
            <td>{item.dateOfAdmission}</td>
            <td>{item.probabilityOfDeath}</td>
            <td> sd </td>
            <td> sd </td>
          </tr>
        )
      }
    )

  const getTable = async () => {
    await covidPatients.getPatients(localStorage.getItem('accessToken'), localStorage.getItem('refreshToken'))
  }

  useEffect(() => {
    getTable()
    setCovidPatients(covidPatients)
    console.log(covidPatients.patients)
    
  }, [covidPatients.patients]);

  const handleExit = async () => {
    console.log("exit");
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    props.navigate('/')
  }

  

    return (
        <div className="p-3 mb-2 bg-info text-dark bg-opacity-25"> 
            <div>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item className="breadcrumb" href="/profile">Выбор сервиса</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb" active>COVID</Breadcrumb.Item>
            </Breadcrumb>

            <Button variant="primary" className="exitButton" onClick={handleExit}>
                    Выйти
            </Button>
            </div>
        <div className="jumbotron vertical-center">
            <Container>
            <Table className="table table-bordered">
      <thead>
        <tr className="table-light">
          <th>ID</th>
          <th>Дата поступления</th>
          <th>Вероятность летального исхода</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        { DisplayData }
      </tbody>
    </Table>
            </Container>
        </div>
        </div>
    )
}

/*
<tr  >
          <td>1</td>
          <td>12.11.2022</td>
          <td>10%</td>
          <td> <button className="link">изменить</button> </td>
          <td> удалить </td>
        </tr>
*/

export default withRouter(CovidComponent)
