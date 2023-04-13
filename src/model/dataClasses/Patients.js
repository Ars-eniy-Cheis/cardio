import Token from "./Token";

import Request from "../Request"

import Patient from './Patient'

import { patientsAnswer } from "./fakeAnswers";

class Patients {

    constructor(){
        this.answer = {};
        this.status = 200;
        this.patients = []
    }
    async getPatients(accessToken){

        //this.answer = await getPatientsAsync(accessToken)
        //this.status = await this.answer.status
        //let patientsAnswer = await this.answer.json()

        for(let i = 0; i < patientsAnswer.length; i++){
            this.patients.push(new Patient(patientsAnswer[i]))
        }
    }

}

export default Patients
