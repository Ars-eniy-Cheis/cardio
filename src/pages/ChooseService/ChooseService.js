import {React} from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ChooseService(props) {
    return (
        
        <div className="p-3 mb-2 bg-info text-dark bg-opacity-25">
        <div className="jumbotron vertical-center">
        <Container>
            <center>
            <Row>
                <Col><Button size="lg" onClick={props.handleCovid}>Прогноз по <br/>COVID</Button></Col>
                <Col><Button size="lg" onClick={props.handleCabs}>Прогноз по <br/>Шунтированию</Button></Col>
            </Row>
            </center>
        </Container>
        </div>
        </div>
    );
}

export default ChooseService