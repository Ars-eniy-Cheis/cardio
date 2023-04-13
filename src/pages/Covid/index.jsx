import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { handleExit, handleAddNew, handleChange, handleDeletePatient, handleGetPatients } from "../../model/app/Handlers";

import { covidPatientsHeader } from "../../config/tableHeaders";

import Covid from "./Covid";

function CovidComponent(props) {

  const dispatch = useDispatch()
  const covidPatientsState = useSelector(state => state.covidPatients)

  const setPatientsState = (patientsValue) => {
    dispatch({ type: "SET_COVID_PATIENTS", covidPatients: patientsValue })
  }

  const setCurrentcovidPatientId = (idValue) => {
    dispatch({ type: "SET_CURRENT_COVID_PATIENT_ID", currentcovidPatientId: idValue })
  }

  const additionalTableComponents = [];
  for(let i = 0; i < covidPatientsState.length; i++){
    additionalTableComponents.push
    (
        <>
      <td>
        <button onClick={() => { handleDeletePatient(props.navigate, covidPatientsState, setPatientsState, covidPatientsState[i].id) }}> <tablebutton>Удалить</tablebutton> </button>
      </td>                
      <td>
        <button onClick={() => { handleChange(props.navigate, '/profile/covid/patient', setCurrentcovidPatientId, covidPatientsState[i].id) }}> <tablebutton>Изменить</tablebutton> </button>
      </td>     
      </>
    )
  }

  const [skipPageReset, setSkipPageReset] = useState(false)

  const columns = useMemo(
    () => covidPatientsHeader,
    []
  )

    const didMount = useRef(false);
    useEffect(() => {
      if (!didMount.current) {
        setCurrentcovidPatientId(-1)
        handleGetPatients(setPatientsState)
      }
      setSkipPageReset(false)
    }, [])

  return (
    <Covid
    columns={columns}
            data={covidPatientsState}
            skipPageReset={skipPageReset}
            additionalTableComponents={additionalTableComponents}
      handleExit={() => {handleExit(props.navigate)}}
      handleNewPatient={() => { handleAddNew(props.navigate, '/profile/covid/patient')}}
    />
  )
}

export default withRouter(CovidComponent)
