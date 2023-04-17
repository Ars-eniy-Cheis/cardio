import Token from "./Token";

import Request from "../Request"

import Parameter from './Parameter'

import { covidParametersAnswer } from "./fakeAnswers";

class Parameters {

    constructor(){
        this.answer = {};
        this.status = 200;
        this.parameters = []
    }
    async getParameters(accessToken){

        //this.answer = await getParametersAsync(accessToken)
        //this.status = await this.answer.status
        //let covidParametersAnswer = await this.answer.json()
        
        for(let i = 0; i < covidParametersAnswer.length; i++){
            this.parameters.push(new Parameter(covidParametersAnswer[i]))
        }
    }

}

export default Parameters
