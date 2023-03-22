

import Request from "../Request"

import User from './User'

class Users {

    constructor() {
        this.answer = {};
        this.status = 200;
        this.users = []
    }
    async getUsers(accessToken) {

        let usersAnswer = [
            {
                id: 1,
                registrationDate: 1678891010,
                surname:"Калинько",
                name: "Арсений",
                fathersName: "Евгеньевич",
                login: "Arseniy",
                role: "admin"
            },
            {
                id: 2,
                registrationDate: 1678977410,
                surname:"Шванев",
                name: "Арсений",
                fathersName: "Алексеевич",
                login: "doctor",
                role: "user"
            },
            {
                id: 3,
                registrationDate: 1679063810,
                surname:"Бауэр",
                name: "Рудольф",
                fathersName: "Евгеньевич",
                login: "rudenf",
                role: "user"
            },
        ]

        for (let i = 0; i < usersAnswer.length; i++) {
            this.users.push(new User(usersAnswer[i]))
        }
    }

}

export default Users
