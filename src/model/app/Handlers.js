import Token from '../../model/dataClasses/Token'
import Patient from '../../model/dataClasses/Patient'
import Patients from '../../model/dataClasses/Patients'

async function handleExit (navigate) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    navigate('/')
}

async function handleGetPatients (stateChanger) {
    let patientsData = new Patients()
    await patientsData.getPatients(localStorage.getItem('accessToken'))
    stateChanger(patientsData.patients)
}

async function handleAddNew (navigate, path) {
    navigate(path)
}

async function handleChange (navigate, path, stateChanger, id){
    if (stateChanger){
        stateChanger(id)
    }
    navigate(path)
}

async function handleDeletePatient (navigate, state, stateChanger, id) {
    let patient = new Patient({})

    await patient.deletePatient(localStorage.getItem('accessToken'), id)

    if (patient.status >= 200 && patient.status < 300) {
      let newPatientsState = state.filter(patient => patient.id !== id)
      stateChanger(newPatientsState)
    }
    else{
      let token = new Token()
      let updatedToken = await token.updateToken(localStorage.getItem('refreshToken'))
      if (token.status >= 200 && token.status < 300) {
        localStorage.setItem('accessToken', updatedToken.accessToken)
        localStorage.setItem('refreshToken', updatedToken.refreshToken)
        handleDeletePatient (navigate, state, stateChanger, id)
      }
      else{
        handleExit(navigate)
      }
    }
}

export { handleExit, handleGetPatients, handleAddNew, handleChange, handleDeletePatient }