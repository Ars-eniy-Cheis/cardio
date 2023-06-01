import Request from "../Request"

import { patientsAnswer } from "./fakeAnswers";

class Patient {
    constructor(id, description, properties, type, createdAt, updatedAt) {
        this.id = id;
        this.description = description
        this.properties = properties
        this.type = type
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export default Patient