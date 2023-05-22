import {React} from "react"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/pages/Login.css';

function Login(props) {
    return (
        <div className="login-body">
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="email" placeholder="Введите Логин" value={props.login} onChange={props.handleLoginChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите Пароль" value={props.password} onChange={props.handlePasswordChange}/>
                    </Form.Group>
                    <Button className="login-form-button" variant="primary" onClick={props.handleEnter}>
                        Войти
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login