import { React } from "react"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import '../../styles/pages/CabsPatient.css';

function Patient(props) {

    return (
        <div >
            <div>
               
                <Button type="button" className="left-button-in-form" onClick={() => {props.back()}}> 🡐 </Button> 

                <div> &nbsp;&nbsp;&nbsp;&nbsp; </div>

            </div>
            <div >
                <Container >
                    {props.form}
                </Container>
            </div>

        </div>
    )
}

export default Patient

/*
 <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item className="breadcrumb" href="/profile">Выбор сервиса</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb" href="/profile/cabs">Прогноз по шунтированию</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb" active>{props.breadcrumbPath}</Breadcrumb.Item>
                </Breadcrumb>
*/