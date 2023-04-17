import Request from "../Request"

class Parameter {
    constructor(object) 
        {

        this.answer = {};
        this.status = 200;

        this.label = object.label;
        this.name = object.name;
        this.type = object.type;
        this.values = object.values;
        this.isRequired = object.isRequired;
        this.inputLimitation = object.inputLimitation;
    }

    async addParameter(accessToken){
        //this.answer = await Request.addPatientAsync(refreshToken, patientJSON)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
    }
    
    async getParameter(accessToken){
        //this.answer = await Request.getPatientAsync(accessToken, patientID)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
    }

    async deleteParameter(accessToken){
        //this.answer = await Request.deletePatientAsync(accessToken, patientID)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
    }

    async patchParameter(accessToken){
        //this.answer = await Request.patchPatientAsync(accessToken, patientID, patientJSON)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
    }

}

export default Parameter