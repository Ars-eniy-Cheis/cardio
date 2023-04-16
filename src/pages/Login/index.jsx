import { React, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { cabsPatientsHeader } from "../../config/tableHeaders";

import { withRouter } from '../../utils/withRouter';

import Token from '../../model/dataClasses/Token'

import Login from './Login'

function LoginComponent(props) {

    const setServiceName = (nameValue) => {
        dispatch({ type: "SET_SERVICE_NAME", serviceName: nameValue })
    }

    const setServiceTableHeader = (tableHeaderValue) => {
        dispatch({ type: "SET_SERVICE_TABLE_HEADER", serviceTableHeader: tableHeaderValue })
    }

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
        dispatch({ type: "SET_LOGIN", login: loginValue })
    }

    const handleEnter = async () => {
        let token = new Token()
        await token.getToken(login, password)
        if (token.status >= 200 && token.status < 300) {
            setLoginState(login)
            localStorage.setItem('accessToken', token.accessToken)
            localStorage.setItem('refreshToken', token.refreshToken)
            localStorage.setItem('serviceName', 'cabs')
        localStorage.setItem('serviceTableHeader', JSON.stringify(cabsPatientsHeader))
        setServiceName('cabs')
        setServiceTableHeader(cabsPatientsHeader)
            props.navigate('/cabs')
        }
        else {
            alert("Неверный логин или пароль")
        }
    }

    return (
        <Login
            login={login}
            handleLoginChange={handleLoginChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            handleEnter={handleEnter}
        />
    )
}

export default withRouter(LoginComponent);