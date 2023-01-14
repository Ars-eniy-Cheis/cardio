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
        //this.answer = await Request.loginAsync(JSON.stringify(loginJSON))
        //let token = await this.answer.json()
        this.accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImxvZ2luMSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJ0eXBlIjoiYWNjZXNzIn0.G3z_2lbKtmnHjNhAycB4zzmr1ESiJqZttZ81byeNJeM"
        this.refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImxvZ2luMSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJ0eXBlIjoicmVmcmVzaCJ9.0uInSXSMpf3R9fn0fP-K5D5C-Fpz5CZWdEXnNS1cbWo"
    }
}

export default Token