const defaultState = {
    login: "",
  }
  
function reducer(state = defaultState, action){
    switch (action.type){
  
        case "SET_LOGIN":
            return {...state, login: action.login}
      
        default:
            return state
    }
}

export default reducer;