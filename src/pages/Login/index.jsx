import { React, useState } from "react"
import { useDispatch } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { handleEventChange, handleEnter, handleExit } from "../../model/app/Handlers";

import Login from './Login'

function LoginComponent(props) {

    const dispatch = useDispatch()

    const setLoginState = (loginValue) => {
        dispatch({ type: "SET_LOGIN", login: loginValue })
    }

    const setServiceName = (nameValue) => {
        dispatch({ type: "SET_SERVICE_NAME", serviceName: nameValue })
    }

    const setServiceTableHeader = (tableHeaderValue) => {
        dispatch({ type: "SET_SERVICE_TABLE_HEADER", serviceTableHeader: tableHeaderValue })
    }

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Login
            login={login}
            handleLoginChange={(event) => {handleEventChange(event, setLogin)}}
            password={password}
            handlePasswordChange={(event) => {handleEventChange(event, setPassword)}}
            handleEnter={() => {handleEnter(login, password, setLoginState, setServiceName, setServiceTableHeader, props.navigate, () => {handleExit(() => {props.navigate('/')}) })}}
        />
    )
}

export default withRouter(LoginComponent);