import { React, useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../model/withRouter';

import Patients from '../../model/dataClasses/Patients'
import Patient from '../../model/dataClasses/Patient'
import Token from '../../model/dataClasses/Token'

import CabsTableData from '../../components/CabsTableData/CabsTableData'

import Cabs from "./Cabs";



function CabsComponent(props) {

  const [cabsPatients, setCabsPatients] = useState(new Patients());
  const didMount = useRef(false);

  const dispatch = useDispatch()
  const cabsPatientsState = useSelector(state => state.cabsPatients)

  const setPatientsState = (patientsValue) => {
    dispatch({ type: "SET_CABS_PATIENTS", cabsPatients: patientsValue })
  }

  const setCurrentCabsPatientId = (idValue) => {
    dispatch({ type: "SET_CURRENT_CABS_PATIENT_ID", currentCabsPatientId: idValue })
  }

  const getTable = async () => {
    await cabsPatients.getPatients(localStorage.getItem('accessToken'))
    setPatientsState(cabsPatients.patients)
  }

  useEffect(() => {
    if (!didMount.current) {
      setCurrentCabsPatientId(-1)
      getTable()
    }
    console.log(cabsPatients.patients)

  }, []);

  const handleExit = async () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    props.navigate('/')
  }

  const handleNewPatient = async () => {
    props.navigate('/profile/cabs/patient')
  }

  const handleChange = (id) => {
    console.log(id)
    setCurrentCabsPatientId(id)
    props.navigate('/profile/cabs/patient')
  }

  const handleDelete = async (id) => {
    let patient = new Patient({})

    await patient.deletePatient(localStorage.getItem('accessToken'), id)

    if (patient.status >= 200 && patient.status < 300) {
      cabsPatientsState.splice(id, 1)
      let newCabsPatientsState = cabsPatientsState.slice()
      setPatientsState(newCabsPatientsState)
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
  }

  let tableData = cabsPatientsState.map(
    (item, i) => {
      return (
        <CabsTableData
          arrayId={i}
          id={item.id}
          dateOfAdmission={item.dateOfAdmission}
          heartAttack={item.heartAttack}
          PCI={item.PCI}
          insult={item.insult}
          death={item.death}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      )
    }
  )

  return (
    <Cabs
      handleExit={handleExit}
      tableData={tableData}
      handleNewPatient={handleNewPatient}
    />
  )
}

export default withRouter(CabsComponent)
