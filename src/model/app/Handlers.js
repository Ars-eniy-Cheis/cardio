import Token from '../../model/dataClasses/Token'
import User from '../dataClasses/User'
import Users from '../dataClasses/Users'

import SwaggerClient from 'swagger-client'

import { getClient } from '../../common'

import { covidPatientsHeader, cabsPatientsHeader } from '../../config/tableHeaders'

import { wizardStateToPatientJSON } from '../utils'

import {patientsCovid, patientsCabs, patientsAnswer, schemasAnswer} from '../dataClasses/fakeAnswers'

let client = getClient().then( client => client)

async function handleEventChange(event, eventSetter) {
  eventSetter(event.target.value);
}

async function handleEnter (username, password, loginStateChanger, serviceNameStateChanger, serviceTableHeaderStateChanger, navigate) {
  try{
    //let token = await client.apis.users.loginUser({username, password})
    let token = {"accessToken": "", "refreshToken": ""}
    //client.clientAuthorizations.add('jwt', new SwaggerClient.ApiKeyAuthorization('Authorization', 'Bearer ' + token, 'header'));
    loginStateChanger(username)
    //document.cookie = "accessToken=" + encodeURIComponent(token["accessToken"]) + "; samesite=strict"
    //document.cookie += "refreshToken=" + encodeURIComponent(token["refreshToken"]) + "; samesite=strict"
    serviceNameStateChanger('admin')
    serviceTableHeaderStateChanger(cabsPatientsHeader)
    navigate('/admin')
  } catch (e) {
    console.error(e)
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
    try{
      //await client.apis.users.logoutUser()
      navigate()
    } catch (e){
      console.error(e)
    }
}

async function handleGetPatients (stateChanger, type) {
  try {
    //let patientsPagination = await client.apis.patients.getPatients({"page": 1, "pageSize": 100, "type": type})
    let patientsPagination
    let patients = []
    if( type === 'cabs'){
      patientsPagination = patientsCabs
    }
    else if ( type === 'covid' ){
      patientsPagination = patientsCovid
    }
    patientsPagination.contents.forEach(
      (item, index, array) => {
        patients.push({...item, ...item.properties})
      }
    )
    stateChanger(patients)
  } catch (e){
    console.error(e)
  }
}

async function handleGetPatient (patientId, stateChanger) {
  try{
    if(patientId !== -1){
      //let patient = await client.apis.patients.getPatient({patientId})
      let patient = patientsAnswer[0]
      stateChanger(patient)
    }
  } catch (e) {
    console.log(e)
  }
  
}

async function handleGetParameters (stateChanger, label) {
  try {
    //let schemas = await client.apis.schemas.getSchemas({})
    let schemas = schemasAnswer
    schemas.steps.forEach(
      (item, index, array) => {
        if(item.label === label) {
          console.log(item.fields)
          stateChanger(item.fields)
        }
      }
    )
  } catch (e){
    console.error(e)
  }
}

async function handleSubmitWizard (navigate, patientState, patientStateChanger, getWizardState, type) {
  let patient
  let patientJSON = await wizardStateToPatientJSON(getWizardState())
  console.log("patientJSON:", patientJSON)
  try{
    if (!patientState) {
      //patient = await client.apis.patients.addPatient({type: type, properties: patientJSON})
      //patientStateChanger(patient)
    }
    else{
      //patient = await client.apis.patients.updatePatient({patientId: patientState.id, properties: patientJSON})
      //patientStateChanger(patient)
    }
  } catch (e) {
    console.error(e)
  }
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

async function handleDeletePatient (navigate, state, stateChanger, patientId) {
    try{
      //await client.apis.patients.deletePatient({patientId})
      let newPatientsState = state.filter(patient => patient.id !== patientId)
      stateChanger(newPatientsState)
    } catch (e){
      console.error(e)
    }
}

async function handleGetUsers (stateChanger) {
    let usersData = new Users()
    await usersData.getUsers(localStorage.getItem('accessToken'))
    stateChanger(usersData.users)
}

async function handleChangeUser (user) {
  try{
    await client.apis.users.updateUser({"userId": user.id, "userUpdate": {"firstName": user.name, "middleName": user.fathersName, "lastName": user.surname, "login": user.login}})
  } catch (e){
    console.error(e)
  }
}

async function handleDeleteUser (userId) {
  try{
    await client.apis.users.deleteUser({userId})
  } catch (e){
    console.error(e)
  }
}

async function handleAddUser (user, handleSubmit) {
  handleSubmit()
  try{
    await client.apis.users.addUser(user)
  } catch (e){
    console.error(e)
  }
}

async function handleResetUserPassword (userId, password) {
  console.log("userId:",userId)
  console.log("password:",password)
  try{
    await client.apis.users.resetUserPassword({userId, "resetPassword": {password}})
  } catch (e){
    console.error(e)
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
  handleGetUsers, handleChangeUser, handleAddUser, handleResetUserPassword, handleDeleteUser, selectHandle, handleEventChange, handleEnter, handleGetParameters, handleSubmitWizard }