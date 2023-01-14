const defaultState = {
    login: "",
    covidPatients: [],
  }
  
function reducer(state = defaultState, action){
    switch (action.type){
  
        case "SET_LOGIN":
            return {...state, login: action.login}

        case "SET_COVID_PATIENTS":
            return {...state, covidPatients: action.covidPatients}
      
        default:
            return state
    }
}

export default reducer;