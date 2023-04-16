import Token from '../../model/dataClasses/Token'
import Patient from '../../model/dataClasses/Patient'
import Patients from '../../model/dataClasses/Patients'
import User from '../dataClasses/User'
import Users from '../dataClasses/Users'

import { covidPatientsHeader, cabsPatientsHeader } from '../../config/tableHeaders'

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
      let token = new Token()
      let updatedToken = await token.updateToken(localStorage.getItem('refreshToken'))
      if (token.status >= 200 && token.status < 300) {
        localStorage.setItem('accessToken', updatedToken.accessToken)
        localStorage.setItem('refreshToken', updatedToken.refreshToken)
        handleDeleteUser (navigate, state, stateChanger, id)
      }
      else{
        handleExit(navigate)
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

export { handleExit, handleGetPatients, handleAddNew, handleChange, handleDeletePatient, handleGetUsers, handleDeleteUser, selectHandle }