import Request from "../Request"

import { usersAnswer } from "./fakeAnswers";

class User {
    constructor(object) {

        this.answer = {};
        this.status = 200;

        this.id = object.id;
        this.registrationDate = object.registrationDate;
        this.surname = object.surname;
        this.name = object.name;
        this.fathersName = object.fathersName;
        this.login = object.login;
        this.role = object.role;

    }

    async addUser(accessToken, userJSON) {
        //this.answer = await Request.addUserAsync(refreshToken, userJSON)
        //this.status = await this.answer.status
        //let user = await this.answer.json()
        //return user
    }

    async getUser(accessToken, userID) {
        //this.answer = await Request.getUserAsync(accessToken, userID)
        //this.status = await this.answer.status
        //let user = await this.answer.json()
        //return user
        return usersAnswer.find(item => item.id === userID)
    }

    async deleteUser(accessToken, userID) {
        //this.answer = await Request.deleteUserAsync(accessToken, userID)
        //this.status = await this.answer.status
        //let user = await this.answer.json()
        //return user
    }

    async patchUser(accessToken, userID, userJSON) {
        //this.answer = await Request.patchUserAsync(accessToken, userID, userJSON)
        //this.status = await this.answer.status
        //let user = await this.answer.json()
        //return user
    }

}

export default User