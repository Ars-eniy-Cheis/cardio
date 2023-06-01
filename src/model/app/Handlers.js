import Users from '../dataClasses/Users'

import SwaggerClient from 'swagger-client'

import jwtDecode from "jwt-decode";

import { getClient, setClient } from '../../common'

import { covidPatientsHeader, cabsPatientsHeader } from '../../config/tableHeaders'

import { wizardStateToPatientJSON } from '../utils'

import {patientsCovid, patientsCabs, patientsAnswer, schemasAnswer} from '../dataClasses/fakeAnswers'

async function handleEventChange(event, eventSetter) {
  eventSetter(event.target.value);
}

async function handleEnter (userName, password, loginStateChanger, serviceNameStateChanger, serviceTableHeaderStateChanger, navigate, exitHandler) {
  try{
    let client = await getClient(exitHandler)
    let token = await client.apis.users.loginUser({}, {requestBody: {userName, password} })
    const decodedToken = jwtDecode(token.body.accessToken)
    const requestInterceptor = (reuest) => {
      reuest.headers["Authorization"] = token.body.accessToken
    }
    
    client.requestInterceptor = requestInterceptor

    loginStateChanger(userName)
    document.cookie = "accessToken=" + encodeURIComponent(token["accessToken"]) + "; samesite=strict"
    document.cookie += "refreshToken=" + encodeURIComponent(token["refreshToken"]) + "; samesite=strict"
    if(decodedToken.role === 'admin'){
      serviceNameStateChanger('admin')
      serviceTableHeaderStateChanger(cabsPatientsHeader)
      navigate('/admin')
    } else if (decodedToken.role === 'user'){
      serviceNameStateChanger('cabs')
      serviceTableHeaderStateChanger(cabsPatientsHeader)
      navigate('/cabs')
    }
    
  } catch (e) {
    console.error(e)
    alert("Неверный логин или пароль")
  }
}

async function handleExit (navigate) {
    try{
      //await client.apis.users.logoutUser()
      localStorage.removeItem("swaggerClient")
      navigate()
    } catch (e){
      console.error(e)
    }
}

async function handleGetPatients (stateChanger, type) {
  try {
    let client = await getClient()
    let patientsPagination = await client.apis.patients.getPatients({"page": 1, "pageSize": 100, "type": type})
    let patients = []
    patientsPagination.body[0].contents.forEach(
      (item, index, array) => {
        patients.push({...item})
      }
    )
    stateChanger(patients)
    console.log("patients:", patients)
  } catch (e){
    console.error(e)
  }
}

async function handleGetPatient (patientId, stateChanger, setCurrentParameters, currentServiceName) {
  try{
    if(patientId !== -1){
      let client = await getClient()
      let patient = await client.apis.patients.getPatient({patientId})
      stateChanger({...patient.body.properties, id:patient.body.id})
    }
    await handleGetParameters(setCurrentParameters, currentServiceName)
  } catch (e) {
    console.error(e)
  }

  
}

async function handleGetParameters (stateChanger, label) {
  try {
    //let schemas = await client.apis.schemas.getSchemas({})
    let schemas = schemasAnswer
    schemas.steps.forEach(
      (item, index, array) => {
        if(item.label === label) {
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
    let client = await getClient()
    if (Object.keys(patientState).length === 0) {
      patient = await client.apis.patients.addPatient({}, {requestBody: {type, properties: patientJSON, description: ""}})
      patientStateChanger({...patient.body.properties, id: patient.body.id})
    }
    else{
      patient = await client.apis.patients.updatePatient({patientId: patientState.id}, {requestBody: patientJSON})
      patientStateChanger({...patient.body.properties, id: patient.body.id})
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
      console.log("id:",id);
      stateChanger(id)
    }
    navigate(path)
}

async function handleDeletePatient (state, stateChanger, patientId) {
    try{
      let client = await getClient()
      await client.apis.patients.deletePatient({patientId})
      let newPatientsState = state.filter(patient => patient.id !== patientId)
      stateChanger(newPatientsState)
    } catch (e){
      console.error(e)
    }
}

async function handleGetUsers (stateChanger) {
  try {
    let client = await getClient()
    let usersPagination = await client.apis.users.getUsers({"page": 1, "pageSize": 100})
    let users = []
    usersPagination.body[0].contents.forEach(
      (item, index, array) => {
        users.push({...item, ...item.properties})
      }
    )
    stateChanger(users)
  } catch (e){
    console.error(e)
  }
}

async function handleChangeUser (user) {
  try{
    let client = await getClient()
    await client.apis.users.updateUser({"userId": user.id}, {requestBody: {"firstName": user.firstName, "middleName": user.middleName, "lastName": user.lastName, "userName": user.userName}})
  } catch (e){
    console.error(e)
  }
}

async function handleDeleteUser (state, stateChanger, userId) {
  try{
    let client = await getClient()
    await client.apis.users.deleteUser({userId})
    let newUsersState = state.filter(patient => patient.id !== userId)
    stateChanger(newUsersState)
  } catch (e){
    console.error(e)
  }
}

async function handleAddUser (user, handleSubmit) {
  //handleSubmit()
  try{
    let client = await getClient()
    await client.apis.users.addUser({}, {requestBody: user })
    alert("Пользователь успешно добавлен")
  } catch (e){
    alert("Пользователь с таким логином уже существует")
    console.error(e)
  }
}

async function handleResetUserPassword (userId, password) {
  try{
    let client = await getClient()
    await client.apis.users.resetUserPassword({userId}, {requestBody: {password}})
    alert("Пароль успешно обновлён")
  } catch (e){
    console.error(e)
  }
}

async function selectHandle (itemId, nameStateChanger, headerStateChanger, navigate) {
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