

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
                fullName: "Калинько А.Е.",
                login: "Arseniy",
                role: "admin",
                deletionStatus: true,
                deletionDate: 0
            },
            {
                id: 2,
                registrationDate: 1678977410,
                fullName: "Шванев А.А.",
                login: "doctor",
                role: "user",
                deletionStatus: true,
                deletionDate: 0
            },
            {
                id: 3,
                registrationDate: 1679063810,
                fullName: "Бауэр Р.Е.",
                login: "rudenf",
                role: "user",
                deletionStatus: false,
                deletionDate: 1679150210
            },
        ]

        for (let i = 0; i < usersAnswer.length; i++) {
            this.users.push(new User(usersAnswer[i]))
        }
    }

}

export default Users
