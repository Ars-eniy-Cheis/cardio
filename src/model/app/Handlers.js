import Token from '../../model/dataClasses/Token'
import Patient from '../../model/dataClasses/Patient'
import Patients from '../../model/dataClasses/Patients'
import User from '../dataClasses/User'
import Users from '../dataClasses/Users'
import Parameters from '../dataClasses/Parameters'

import { covidPatientsHeader, cabsPatientsHeader } from '../../config/tableHeaders'

import { wizardStateToPatientJSON } from '../utils'

async function handleEventChange(event, eventSetter) {
  eventSetter(event.target.value);
}

async function handleEnter (login, password, loginStateChanger, serviceNameStateChanger, serviceTableHeaderStateChanger, navigate) {
  let token = new Token()
  await token.getToken(login, password)
  if (token.status >= 200 && token.status < 300) {
      loginStateChanger(login)
      localStorage.setItem('accessToken', token.accessToken)
      localStorage.setItem('refreshToken', token.refreshToken)
      localStorage.setItem('serviceName', 'cabs')
      localStorage.setItem('serviceTableHeader', JSON.stringify(cabsPatientsHeader))
      serviceNameStateChanger('cabs')
      serviceTableHeaderStateChanger(cabsPatientsHeader)
      navigate()
  }
  else {
      alert("Неверный логин или пароль")
  }
}

async function handleUpdateToken (navigate) {
  let token = new Token()
  let updatedToken = await token.updateToken(localStorage.getItem('refreshToken'))
  if (token.status >= 200 && token.status < 300) {
    localStorage.setItem('accessToken', updatedToken.accessToken)
    localStorage.setItem('refreshToken', updatedToken.refreshToken)
    return true
  }
  else {
    return false
    handleExit(navigate)
  }
}

async function handleExit (navigate) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    navigate()
}

async function handleGetPatients (stateChanger) {
  let patientsData = new Patients()
  await patientsData.getPatients(localStorage.getItem('accessToken'))
  stateChanger(patientsData.patients)
}

async function handleGetPatient (patientId, stateChanger) {
  let patient = new Patient({})
  stateChanger(await patient.getPatient(localStorage.getItem('accessToken'), patientId))
}

async function handleGetParameters (stateChanger) {
  let parameters = new Parameters()
  await parameters.getParameters(localStorage.getItem('accessToken'))
  stateChanger(parameters.parameters)
}

async function handleSubmitWizard (navigate, patientState, patientStateChanger, getWizardState) {
  let patient = new Patient({})
  let patientJSON = await wizardStateToPatientJSON(getWizardState())

  if (!patientState) {
      let patientAnswer = await patient.addPatient(localStorage.getItem('accessToken'), patientJSON)
      let addedPatient = new Patient(patientAnswer)
      if (patient.status >= 200 && patient.status < 300) {
          console.log("addedPatient:",addedPatient);
          patientStateChanger(addedPatient)
      }
      else {
          if(await handleUpdateToken(navigate)){
            await handleSubmitWizard (navigate, patientState, patientStateChanger, getWizardState)
          }
      }
  }
  else {
      let patientAnswer = await patient.patchPatient(localStorage.getItem('accessToken'), patientState.id, patientJSON)
      let addedPatient = new Patient(patientAnswer)
      if (patient.status >= 200 && patient.status < 300) {
        console.log("addedPatient:",addedPatient);
        patientStateChanger(addedPatient)
      }
      else {
        if(await handleUpdateToken(navigate)){
          await handleSubmitWizard (navigate, patientState, patientStateChanger, getWizardState)
        }
      }
  }
  console.log(patientJSON)
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
      if(await handleUpdateToken(navigate)){
        await handleDeletePatient (navigate, state, stateChanger, id)
      }
    }
}

async function handleGetUsers (stateChanger) {
    let usersData = new Users()
    await usersData.getUsers(localStorage.getItem('accessToken'))
    stateChanger(usersData.users)
}

async function handleDeleteUser (navigate, state, stateChanger, id) {
    let user = new User({})

    await user.deleteUser(localStorage.getItem('accessToken'), id)

    if (user.status >= 200 && user.status < 300) {
      let newUsersState = state.filter(user => user.id !== id)
      stateChanger(newUsersState)
    }
    else{
      if(await handleUpdateToken(navigate)){
        await handleDeleteUser (navigate, state, stateChanger, id)
      }
    }
}

async function selectHandle (itemId, nameStateChanger, headerStateChanger, navigate) {
  console.log("itemId: ", itemId);
  localStorage.setItem('serviceName', itemId)
  nameStateChanger(itemId)
  if(!itemId){
    handleExit(navigate)
  }
  else if(itemId === 'covid'){
    localStorage.setItem('serviceTableHeader',JSON.stringify(covidPatientsHeader))
    headerStateChanger(covidPatientsHeader)
  }
  else if (itemId === 'cabs'){
    localStorage.setItem('serviceTableHeader',JSON.stringify(cabsPatientsHeader))
    headerStateChanger(cabsPatientsHeader)
  }
  navigate('/' + itemId)
}

export { handleExit, handleGetPatients, handleGetPatient, handleAddNew, handleChange, handleDeletePatient, 
  handleGetUsers, handleDeleteUser, selectHandle, handleEventChange, handleEnter, handleGetParameters, handleSubmitWizard }