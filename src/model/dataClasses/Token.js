import Request from "../Request"

class Token {
    constructor() {
        //Object.assign(this, json);
        this.answer = "";
        this.accessToken = "";
        this.refreshToken = "";
    }

    async getToken(login, password){
        let loginJSON = {
            login: login,
            password: password
        }
        this.answer = await Request.loginAsync(JSON.stringify(loginJSON))
        let token = await this.answer.json()
        this.accessToken = token.accessToken
        this.refreshToken = token.refreshToken
    }
}

export default Token