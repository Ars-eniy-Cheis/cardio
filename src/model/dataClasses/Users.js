import Request from "../Request"

import User from './User'

import { usersAnswer } from "./fakeAnswers";

class Users {

    constructor() {
        this.answer = {};
        this.status = 200;
        this.users = []
    }
    async getUsers(accessToken) {

        for (let i = 0; i < usersAnswer.length; i++) {
            this.users.push(new User(usersAnswer[i]))
        }
    }

}

export default Users
