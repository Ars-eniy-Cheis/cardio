import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { handleExit, handleAddNew, handleChange, handleDeletePatient, handleGetPatients } from "../../model/app/Handlers";

import { cabsPatientsHeader } from "../../config/tableHeaders";

import Cabs from "./Cabs";

function CabsComponent(props) {

  const dispatch = useDispatch()
  const cabsPatientsState = useSelector(state => state.cabsPatients)

  const setPatientsState = (patientsValue) => {
    dispatch({ type: "SET_CABS_PATIENTS", cabsPatients: patientsValue })
  }

  const setCurrentCabsPatientId = (idValue) => {
    dispatch({ type: "SET_CURRENT_CABS_PATIENT_ID", currentCabsPatientId: idValue })
  }

  const columns = useMemo(
    () => cabsPatientsHeader,
    []
  )

  const additionalTableComponents = [];
for(let i = 0; i < cabsPatientsState.length; i++){
  additionalTableComponents.push
  (
      <>
    <td>
      <button onClick={() => { handleDeletePatient(props.navigate, cabsPatientsState, setPatientsState, cabsPatientsState[i].id) }}> <tablebutton>Удалить</tablebutton> </button>
    </td>                
    <td>
      <button onClick={() => { handleChange(props.navigate, '/profile/cabs/patient', setCurrentCabsPatientId, cabsPatientsState[i].id) }}> <tablebutton>Изменить</tablebutton> </button>
    </td>     
    </>
  )
}

  const [skipPageReset, setSkipPageReset] = useState(false)

    const didMount = useRef(false);
    useEffect(() => {
      if (!didMount.current) {
        setCurrentCabsPatientId(-1)
        handleGetPatients(setPatientsState)
      }
      setSkipPageReset(false)
    }, [])

  return (
    <Cabs
      columns={columns}
      data={cabsPatientsState}
      skipPageReset={skipPageReset}
      additionalTableComponents={additionalTableComponents}
      handleExit={() => {handleExit(props.navigate)}}
      handleNewPatient={() => { handleAddNew(props.navigate, '/profile/cabs/patient')}}
    />
  )
}

export default withRouter(CabsComponent)