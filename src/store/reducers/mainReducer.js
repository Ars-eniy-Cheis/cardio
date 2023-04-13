const defaultState = {
    login: "",
    covidPatients: [],
    currentCovidPatientId: -1,
    covidDeathProbability: "",
    cabsPatients: [],
    currentCabsPatientId: -1,
    cabsHeartAttack: "",
    cabsPCI: "",
    cabsInsult: "",
    cabsDeath: "",
    users: [],

    manipulatingData: [],
    currentManipulatingValue: -1,
    serviceName: "",
    serviceTableHeader: [],
}

function reducer(state = defaultState, action) {
    switch (action.type) {

        case "SET_LOGIN":
            return { ...state, login: action.login }

        case "SET_COVID_PATIENTS":
            return { ...state, covidPatients: action.covidPatients }

        case "SET_CURRENT_COVID_PATIENT_ID":
            return { ...state, currentCovidPatientId: action.currentCovidPatientId }

        case "SET_COVID_DEATH_PROBABILITY":
            return { ...state, covidDeathProbability: action.covidDeathProbability }

        case "SET_CABS_PATIENTS":
            return { ...state, cabsPatients: action.cabsPatients }

        case "SET_CURRENT_CABS_PATIENT_ID":
            return { ...state, currentCabsPatientId: action.currentCabsPatientId }

        case "SET_CABS_HEART_ATTACK":
            return { ...state, cabsHeartAttack: action.cabsHeartAttack }

        case "SET_CABS_PCI":
            return { ...state, cabsPCI: action.cabsPCI }

        case "SET_CABS_INSULT":
            return { ...state, cabsInsult: action.cabsInsult }

        case "SET_CABS_DEATH":
            return { ...state, cabsDeath: action.cabsDeath }

        case "SET_MANIPULATING_DATA":
            return { ...state, manipulatingData: action.manipulatingData }

        case "SET_CURRENT_MANIPULATING_VALUE":
            return { ...state, currentManipulatingValue: action.currentManipulatingValue }

        case "SET_SERVICE_NAME":
            return { ...state, serviceName: action.serviceName }

        case "SET_SERVICE_TABLE_HEADER":
            return { ...state, serviceTableHeader: action.serviceTableHeader }
            
        case "SET_USERS":
            return { ...state, users: action.users }
            
        default:
            return state
    }
}

export default reducer;