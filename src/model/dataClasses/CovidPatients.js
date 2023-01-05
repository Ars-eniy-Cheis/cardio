import Token from "./Token";

import Request from "../Request"

import CovidPatient from './CovidPatient'

class CovidPatients {

    constructor(){
        this.answer = true;
        this.patients = []
    }

    async getPatients(accessToken, refreshToken){

        let patientsAnswer = [
            {
                id: 1,
                dateOfAdmission: 1672954195,
                probabilityOfDeath: 10
            },
            {
                id: 2,
                dateOfAdmission: 1672954324,
                probabilityOfDeath: 25
            },
            {
                id: 3,
                dateOfAdmission: 1672954356,
                probabilityOfDeath: 30
            }
        ]

        for(let i = 0; i < patientsAnswer.length; i++){
            this.patients.push(new CovidPatient(patientsAnswer[i].id, patientsAnswer[i].dateOfAdmission, patientsAnswer[i].probabilityOfDeath))
        }
    }

}

export default CovidPatients