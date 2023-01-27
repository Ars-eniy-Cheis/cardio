const defaultState = {
    login: "",
    covidPatients: [],
    currentCovidPatientId: -1,
  }
  
function reducer(state = defaultState, action){
    switch (action.type){
  
        case "SET_LOGIN":
            return {...state, login: action.login}

        case "SET_COVID_PATIENTS":
            return {...state, covidPatients: action.covidPatients}

        case "SET_CURRENT_COVID_PATIENT_ID":
            return {...state, currentCovidPatientId: action.currentCovidPatientId}
      
        default:
            return state
    }
}

export default reducer;