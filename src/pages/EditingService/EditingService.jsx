import { React } from "react"

import { Navigation } from 'react-minimal-side-navigation';

import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from "../../components/standardComponents/Tables/Table"

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import "../../styles/test.css"

function EditingService(props) {
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
                <Navigation
                    activeItemId={props.activeItemId}
                    onSelect={props.onSelect}
                    items={props.menuItems}
                />
            </div>
            <Table
                defaultColumn={props.defaultColumn}
                columns={props.columns}
                data={props.data}
                skipPageReset={props.skipPageReset}
                additionalTableComponents={props.additionalTableComponents}
            />
            <Button onClick={props.handleNewPatient} className="cabsButton"> Новый пациент </Button>
        </>
    )
}

export default EditingService