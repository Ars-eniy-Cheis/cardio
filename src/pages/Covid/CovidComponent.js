import { React, useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../model/withRouter';

import Patients from '../../model/dataClasses/Patients'
import Patient from '../../model/dataClasses/Patient'
import Token from '../../model/dataClasses/Token'

import CovidTableData from '../../components/CovidTableData/CovidTableData'

import Covid from "./Covid";



function CovidComponent(props) {

  const [covidPatients, setCovidPatients] = useState(new Patients());
  const didMount = useRef(false);

  const dispatch = useDispatch()
  const covidPatientsState = useSelector(state => state.covidPatients)

  const setPatientsState = (patientsValue) => {
    dispatch({ type: "SET_COVID_PATIENTS", covidPatients: patientsValue })
  }

  const setCurrentCovidPatientId = (idValue) => {
    dispatch({ type: "SET_CURRENT_COVID_PATIENT_ID", currentCovidPatientId: idValue })
  }

  const getTable = async () => {
    await covidPatients.getPatients(localStorage.getItem('accessToken'))
    setPatientsState(covidPatients.patients)
  }

  useEffect(() => {
    if (!didMount.current) {
      setCurrentCovidPatientId(-1)
      getTable()
    }
    console.log(covidPatients.patients)

  }, []);

  const handleExit = async () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    props.navigate('/')
  }

  const handleNewPatient = async () => {
    props.navigate('/profile/covid/patient')
  }

  const handleChange = (id) => {
    console.log(id)
    setCurrentCovidPatientId(id)
    props.navigate('/profile/covid/patient')
  }

  const handleDelete = async (id) => {
    let patient = new Patient({})

    await patient.deletePatient(localStorage.getItem('accessToken'), id)

    if (patient.status >= 200 && patient.status < 300) {
      covidPatientsState.splice(id, 1)
      let newCovidPatientsState = covidPatientsState.slice()
      setPatientsState(newCovidPatientsState)
      console.log(id)
    }
    else{
      let token = new Token()
      let updatedToken = await token.updateToken(localStorage.getItem('refreshToken'))
      if (token.status >= 200 && token.status < 300) {
        localStorage.setItem('accessToken', updatedToken.accessToken)
        localStorage.setItem('refreshToken', updatedToken.refreshToken)
      }
      else{
        handleExit()
      }
    }
    //id

  }

  let tableData = covidPatientsState.map(
    (item, i) => {
      return (
        <CovidTableData
          arrayId={i}
          id={item.id}
          dateOfAdmission={item.dateOfAdmission}
          probabilityOfDeath={item.probabilityOfDeath ? "Да" : "Нет"}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      )
    }
  )

  return (
    <Covid
      handleExit={handleExit}
      tableData={tableData}
      handleNewPatient={handleNewPatient}
    />
  )
}

export default withRouter(CovidComponent)
