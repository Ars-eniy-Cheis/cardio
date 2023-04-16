import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { PatientColumn } from "../../components/standardComponents/Cells/PatientEditableCell";
import { userItems } from "../../config/sideMenuItems";

import { cabsPatientsHeader, covidPatientsHeader } from "../../config/tableHeaders";

import { handleExit, handleAddNew, handleChange, handleDeletePatient, handleGetPatients, selectHandle } from "../../model/app/Handlers";

import EditingService from "./EditingService";

function EditingServiceComponent(props) {

  const dispatch = useDispatch()

  let serviceNameState = useSelector(state => state.serviceName)
  if(!serviceNameState){
    serviceNameState = localStorage.getItem('serviceName')
  }
  const setServiceNameState = (serviceName) => {
    dispatch({ type: "SET_SERVICE_NAME", serviceName: serviceName })
  }

  let serviceTableHeaderState = useSelector(state => state.serviceTableHeader)
  if(serviceTableHeaderState.length === 0){
    serviceTableHeaderState = JSON.parse(localStorage.getItem('serviceTableHeader'))
  }
  const setServiceTableHeaderState = (serviceTableHeader) => {
    dispatch({ type: "SET_SERVICE_TABLE_HEADER", serviceTableHeader: serviceTableHeader })
  }

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
          <button onClick={() => { handleChange(props.navigate, '/' + serviceNameState + '/patient', setCurrentManipulatingValue, manipulatingDataState[i].id) }}> <tablebutton>Изменить</tablebutton> </button>
        </td>     
      </>
    )
  }
  
  const [skipPageReset, setSkipPageReset] = useState(false)

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      setCurrentManipulatingValue(-1)
    }
    handleGetPatients(setManipulatingDataState)
    
  }, [useSelector(state => state.serviceTableHeader)])

  return (
    <>
      <EditingService
        defaultColumn={PatientColumn}
        columns={serviceTableHeaderState}
        data={manipulatingDataState}
        skipPageReset={skipPageReset}
        additionalTableComponents={additionalTableComponents}
        menuItems = {userItems}
        activeItemId = {serviceNameState}
        onSelect = { ({itemId}) => {selectHandle(itemId, setServiceNameState, setServiceTableHeaderState, props.navigate)} }
        handleExit={() => {handleExit(props.navigate)}}
        handleNewPatient={() => { handleAddNew(props.navigate, '/' + serviceNameState +'/patient')}}
      />
    </>
  )
}

export default withRouter(EditingServiceComponent)