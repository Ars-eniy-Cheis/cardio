import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';

function LoginComponent(props) {
    return (
        <div className="p-3 mb-2 bg-info text-dark bg-opacity-25">
        <div className="jumbotron vertical-center">
        <Container>
      <Row>
        <Col></Col>
        <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="email" placeholder="Введите Логин" value={props.data.login} onChange={props.loginChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите Пароль" value={props.data.password} onChange={props.passwordChange}/>
                </Form.Group>
                <Button variant="primary" onClick={props.handleEnter}>
                    Войти
                </Button>
            </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
    </div>
    )
}

export default LoginComponent