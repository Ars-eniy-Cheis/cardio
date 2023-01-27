import Request from "../Request"

class Token {
    constructor() {
        //Object.assign(this, json);
        this.answer = {};
        this.status = 200;
        this.accessToken = "";
        this.refreshToken = "";
    }

    async getToken(login, password){
        let loginJSON = {
            login: login,
            password: password
        }
        //this.answer = await Request.loginAsync(JSON.stringify(loginJSON))
        //this.status = await this.answer.status
        //let token = await this.answer.json()
        this.accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImxvZ2luMSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJ0eXBlIjoiYWNjZXNzIn0.G3z_2lbKtmnHjNhAycB4zzmr1ESiJqZttZ81byeNJeM"
        this.refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImxvZ2luMSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJ0eXBlIjoicmVmcmVzaCJ9.0uInSXSMpf3R9fn0fP-K5D5C-Fpz5CZWdEXnNS1cbWo"
    }

    async updateToken(refreshToken){
        //this.answer = await Request.refreshTokenAsync(refreshToken)
        //this.status = await this.answer.status
        //let updatedToken = await this.answer.json()
        //return updatedToken
    }

}

export default Token