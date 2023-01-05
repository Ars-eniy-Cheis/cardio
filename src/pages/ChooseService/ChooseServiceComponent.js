import {React} from "react";

import {withRouter} from '../../model/withRouter';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ChooseService.css';


function ChooseServiceComponent(props) {

    const handleCovid = async () => {
        props.navigate('/profile/covid')
    }

    const handleCabs = async () => {
        props.navigate('/profile/cabs')
    }
    
    return (
        
        <div className="p-3 mb-2 bg-info text-dark bg-opacity-25">
        <div className="jumbotron vertical-center">
        <Container>
            <center>
            <Row>
                <Col><Button size="lg" onClick={handleCovid}>Прогноз по <br/>COVID</Button></Col>
                <Col><Button size="lg" onClick={handleCabs}>Прогноз по <br/>Шунтированию</Button></Col>
            </Row>
            </center>
        </Container>
        </div>
        </div>
    );
    
}

export default withRouter(ChooseServiceComponent)