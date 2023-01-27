const defaultState = {
    login: "",
    covidPatients: [],
    currentCovidPatientId: -1,
    covidDeathProbability: "",
  }
  
function reducer(state = defaultState, action){
    switch (action.type){
  
        case "SET_LOGIN":
            return {...state, login: action.login}

        case "SET_COVID_PATIENTS":
            return {...state, covidPatients: action.covidPatients}

        case "SET_CURRENT_COVID_PATIENT_ID":
            return {...state, currentCovidPatientId: action.currentCovidPatientId}

        case "SET_COVID_DEATH_PROBABILITY":
            return {...state, covidDeathProbability: action.covidDeathProbability}
      
        default:
            return state
    }
}

export default reducer;