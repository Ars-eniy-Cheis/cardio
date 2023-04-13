import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { PatientColumn } from "../../components/standardComponents/Cells/PatientEditableCell";
import { userItems } from "../../config/sideMenuItems";

import { cabsPatientsHeader, covidPatientsHeader } from "../../config/tableHeaders";

import { handleExit, handleAddNew, handleChange, handleDeletePatient, handleGetPatients } from "../../model/app/Handlers";

import EditingService from "./EditingService";

function EditingServiceComponent(props) {

  const dispatch = useDispatch()

  const serviceNameState = localStorage.getItem('serviceName')

  //const serviceTableHeaderState = useSelector(state => state.serviceTableHeader)
  const serviceTableHeaderState = JSON.parse(localStorage.getItem('serviceTableHeader'))

  const manipulatingDataState = useSelector(state => state.manipulatingData)
  const setManipulatingDataState = (manipulatingDataValue) => {
    dispatch({ type: "SET_MANIPULATING_DATA", manipulatingData: manipulatingDataValue })
  }

  const setCurrentManipulatingValue = (idValue) => {
    dispatch({ type: "SET_CURRENT_MANIPULATING_VALUE", currentManipulatingValue: idValue })
  }

  const additionalTableComponents = [];
  for(let i = 0; i < manipulatingDataState.length; i++){
    additionalTableComponents.push
    (
      <>
        <td>
          <button onClick={() => { handleDeletePatient(props.navigate, manipulatingDataState, setManipulatingDataState, manipulatingDataState[i].id) }}> <tablebutton>Удалить</tablebutton> </button>
        </td>                
        <td>
          <button onClick={() => { handleChange(props.navigate, '/profile/' + serviceNameState + '/patient', setCurrentManipulatingValue, manipulatingDataState[i].id) }}> <tablebutton>Изменить</tablebutton> </button>
        </td>     
      </>
    )
  }
  
  const [skipPageReset, setSkipPageReset] = useState(false)

  const columns = useMemo(
    () => serviceTableHeaderState,
    []
  )

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      setCurrentManipulatingValue(-1)
      handleGetPatients(setManipulatingDataState)
    }
    setSkipPageReset(false)
  }, [])

  const selectHandle = ({itemId}) => {
    localStorage.setItem('serviceName', itemId)
    if(itemId === 'covid'){
      localStorage.setItem('serviceTableHeader',JSON.stringify(covidPatientsHeader))
    }
    else{
      localStorage.setItem('serviceTableHeader',JSON.stringify(cabsPatientsHeader))
    }
    props.navigate('/profile/' + itemId)
  }

  return (
    <>
      <EditingService
        defaultColumn={PatientColumn}
        columns={columns}
        data={manipulatingDataState}
        skipPageReset={skipPageReset}
        additionalTableComponents={additionalTableComponents}
        menuItems = {userItems}
        activeItemId = {serviceNameState}
        onSelect = {selectHandle}
        handleExit={() => {handleExit(props.navigate)}}
        handleNewPatient={() => { handleAddNew(props.navigate, '/profile/' + serviceNameState +'/patient')}}
      />
    </>
  )
}

export default withRouter(EditingServiceComponent)