import Request from "../Request"


class User {
    constructor(object) {

        this.answer = {};
        this.status = 200;

        this.id = object.id;
        this.registrationDate = object.registrationDate;
        this.fullName = object.fullName;
        this.login = object.login;
        this.role = object.role;
        this.deletionStatus = object.deletionStatus;
        this.deletionDate = object.deletionDate;

    }

    async addUser(accessToken, userJSON) {
        console.log(userJSON);
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