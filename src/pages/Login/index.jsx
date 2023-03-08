import { React, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import Token from '../../model/dataClasses/Token'

import Login from './Login'

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
        dispatch({ type: "SET_LOGIN", login: loginValue })
    }

    const handleEnter = async () => {
        let token = new Token()
        await token.getToken(login, password)
        if (token.status >= 200 && token.status < 300) {
            setLoginState(login)
            localStorage.setItem('accessToken', token.accessToken)
            localStorage.setItem('refreshToken', token.refreshToken)
            props.navigate('/profile')
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