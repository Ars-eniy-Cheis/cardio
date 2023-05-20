import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { PatientColumn } from "../../components/standardComponents/Cells/PatientEditableCell";
import { userItems } from "../../config/sideMenuItems";

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
    serviceTableHeaderState = JSON.parse(localStorage.getItem('serviceTableHeader')) //Не привязываться к localStorage на уровне компонента
  }
  const setServiceTableHeaderState = (serviceTableHeader) => {
    dispatch({ type: "SET_SERVICE_TABLE_HEADER", serviceTableHeader: serviceTableHeader })
  }

  const manipulatingDataState = useSelector(state => state.manipulatingData)
  const setManipulatingDataState = (manipulatingDataValue) => {
    dispatch({ type: "SET_MANIPULATING_DATA", manipulatingData: manipulatingDataValue })
  }

  const setCurrentManipulatingValueId = (idValue) => {
    dispatch({ type: "SET_CURRENT_MANIPULATING_VALUE_ID", currentManipulatingValueId: idValue })
  }

  const additionalTableComponents = [];
  for(let i = 0; i < manipulatingDataState.length; i++){
    additionalTableComponents.push
    (
      <>
        <td>
          <button className="tablebutton" onClick={() => { handleDeletePatient(props.navigate, manipulatingDataState, setManipulatingDataState, manipulatingDataState[i].id) }}> <tablebutton-text>Удалить</tablebutton-text> </button>
        </td>                
        <td>
          <button className="tablebutton" onClick={() => { handleChange(props.navigate, '/' + serviceNameState + '/patient', setCurrentManipulatingValueId, manipulatingDataState[i].id) }}> <tablebutton-text>Изменить</tablebutton-text> </button>
        </td>
      </>
    )
  }
  
  const [skipPageReset, setSkipPageReset] = useState(false)

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      setCurrentManipulatingValueId(-1)
    }
    handleGetPatients(setManipulatingDataState, serviceNameState)
    
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
        onSelect = { (itemId) => {selectHandle(itemId, setServiceNameState, setServiceTableHeaderState, props.navigate)} }
        handleExit={() => {handleExit(() => {props.navigate('/')}) }} //Передать колбэк без параметров
        handleNewPatient={() => { handleAddNew(props.navigate, '/' + serviceNameState +'/patient')}}
      />
    </>
  )
}

export default withRouter(EditingServiceComponent)