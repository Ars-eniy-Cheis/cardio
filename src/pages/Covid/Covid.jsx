import { React } from "react"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';

import '../../styles/pages/Covid.css';

function Covid(props) {
    return (
        <div className="p-3 mb-2 bg-info text-dark bg-opacity-25">
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item className="breadcrumb" href="/profile">Выбор сервиса</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb" active>COVID</Breadcrumb.Item>
                </Breadcrumb>

                <Button variant="primary" className="covidButton" onClick={props.handleExit}>
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
                                <th>Летальный исход</th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.tableData}
                        </tbody>
                    </Table>
                    <Button onClick={props.handleNewPatient} className="covidButton"> Новый пациент </Button>
                </Container>
            </div>

        </div>
    )
}

export default Covid