import React, {Component} from "react"
import LoginComponent from "./LoginComponent"
import Request from "../../model/Request"
import {withRouter} from '../../model/withRouter';
import { useNavigate } from "react-router-dom"


class Login extends Component {
    
    constructor() {
        super()
        
        this.state = {
            login: "",
            password: "",
        }
        this.loginChange = this.loginChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    loginChange(event) {
        this.setState({login: event.target.value});
    }

    passwordChange(event) {
        this.setState({password: event.target.value});
    }
    
    async handleEnter(event) {
        //alert('Логин: ' + this.state.login + "\nПароль: " + this.state.password);
        /*
        loginJSON = {
            login: this.state.login,
            password: this.state.password
        }
        let answer = Request.login(loginJSON);
        if(answer.ok){

        }
        else{
            alert("Неверный логин или пароль")
        }
        */
        let result = await Request.pingAsync();
        console.log(result);
        this.props.navigate('/profile')
        event.preventDefault();
    }
    
    render() {
        return(
            <LoginComponent
                data={this.state}
                loginChange={this.loginChange}
                passwordChange={this.passwordChange}
                handleEnter={this.handleEnter}
            />
        )
    }
}

export default withRouter(Login);