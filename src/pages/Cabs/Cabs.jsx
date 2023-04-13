import { React } from "react"

import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from "../../components/standardComponents/Tables/Table"

import "../../styles/test.css"

function Cabs(props) {
    return (
        <>
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item className="breadcrumb" href="/profile">Выбор сервиса</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb" active>Прогноз по шунтированию</Breadcrumb.Item>
                </Breadcrumb>
                <Button variant="primary" className="cabsButton" onClick={props.handleExit}>
                    Выйти
                </Button>
            </div>
            <Table
                columns={props.columns}
                data={props.data}
                skipPageReset={props.skipPageReset}
                additionalTableComponents={props.additionalTableComponents}
            />
            <Button onClick={props.handleNewPatient} className="cabsButton"> Новый пациент </Button>
        </>
    )
}

export default Cabs