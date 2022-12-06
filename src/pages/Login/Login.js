import React, {Component} from "react"
import LoginComponent from "./LoginComponent"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            login: "",
            password: "",
        }
        this.loginChange = this.loginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    loginChange(event) {
        this.setState({login: event.target.value});
    }

    passwordChange(event) {
        this.setState({password: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Логин: ' + this.state.login + "\nПароль: " + this.state.password);
        event.preventDefault();
    }
    
    render() {
        return(
            <LoginComponent
                data={this.state}
                loginChange={this.loginChange}
                passwordChange={this.passwordChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default Login