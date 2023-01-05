import {React, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {withRouter} from '../../model/withRouter';

import Token from '../../model/dataClasses/Token'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Login.css';



function LoginComponent(props) {

    const [login, setLogin] = useState("")
    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    }

    const [password, setPassword] = useState("")
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const dispatch = useDispatch()
    const loginState = useSelector(state => state.login)

    const setLoginState = (loginValue) => {
        dispatch({type: "SET_LOGIN", login: loginValue})
    }

    const handleEnter = async () => {
        let token = new Token()
        await token.getToken(login, password)
        if(token.answer.ok){
            setLoginState(login)
            localStorage.setItem('accessToken', token.accessToken)
            localStorage.setItem('refreshToken', token.refreshToken)
            props.navigate('/profile')
        }
        else{
            alert("Неверный логин или пароль")
        }
    }

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
                    <Form.Control type="email" placeholder="Введите Логин" value={login} onChange={handleLoginChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите Пароль" value={password} onChange={handlePasswordChange}/>
                </Form.Group>
                <Button variant="primary" onClick={handleEnter}>
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

export default withRouter(LoginComponent);