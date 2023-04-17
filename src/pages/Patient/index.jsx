import { React, useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useMultipleForm } from "usetheform"

import { handleGetPatient, handleGetParameters, handleSubmitWizard } from "../../model/app/Handlers"

import { withRouter } from '../../utils/withRouter';

import { parametersPerWizardPage } from "../../config";

import WizardFormPage from "../../components/customComponents/WizardFormPage";

import Patient from './Patient'

function PatientComponent(props) {

    const dispatch = useDispatch()

    const currentPatientIdState = useSelector(state => state.currentManipulatingValueId)
    const setCurrentPatientIdState = (idValue) => {
        dispatch({ type: "SET_CURRENT_MANIPULATING_VALUE_ID", currentManipulatingValueId: idValue })
    }

    const currentPatientState = useSelector(state => state.currentManipulatingValue)
    const setCurrentPatientState = (value) => {
        dispatch({ type: "SET_CURRENT_MANIPULATING_VALUE", currentManipulatingValue: value })
    }

    const currentParameters = useSelector(state => state.parameters)
    const setCurrentParameters = (parameters) => {
        dispatch({ type: "SET_PARAMETERS", parameters: parameters })
    }

    const currentServiceName = useSelector(state => state.serviceName)

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            handleGetPatient(currentPatientIdState, setCurrentPatientState)
            handleGetParameters(setCurrentParameters)
        }
    }, [])

    const [currentPage, setPage] = useState(1);
    const nextPage = () => setPage((prev) => { return ++prev; });
    const prevPage = () => setPage((prev) => { return --prev; });

    const [getWizardState, wizard] = useMultipleForm();

    let result = []
    if(currentServiceName === 'covid') {
        currentPatientState ? result.push(currentPatientState.probabilityOfDeath) : result.push(undefined)
    }
    else if(currentServiceName === 'cabs') {
        if(currentPatientState){
            result.push(currentPatientState.heartAttack)
            result.push(currentPatientState.PCI)
            result.push(currentPatientState.insult)
            result.push(currentPatientState.death)
        }
        else{
            result.push(undefined)
            result.push(undefined)
            result.push(undefined)
            result.push(undefined)
        }
    }
    
    let pages

    if(currentParameters.length === 0){

    }
    else{
        pages = []
        console.log("currentParameters.length: ", currentParameters.length);
        let pageCount = parseInt(currentParameters.length/parametersPerWizardPage)
        if(currentParameters.length % parametersPerWizardPage > 0)
            pageCount++

        console.log("pageCount: ", pageCount);
        for(let i = 0; i < pageCount; i++){
            pages.push(
                <>
                    {currentPage === (i + 1) && (
                        <WizardFormPage 
                            {...wizard} 
                            onSubmit={( i + 1 ) === pageCount ? () => {handleSubmitWizard(() => {props.navigate('/')}, currentPatientState, setCurrentPatientState, getWizardState)} : () => {nextPage()} }
                            prevPage={ ( i + 1 ) === 1 ? undefined : prevPage}
                            currentPatient={currentPatientState ? currentPatientState : {}}
                            currentParameters={currentParameters.slice(i * parametersPerWizardPage, i * parametersPerWizardPage + parametersPerWizardPage)}
                            currentServiceName={( i + 1 ) === pageCount ? currentServiceName : undefined}
                            result={ ( i + 1 ) === pageCount ? result : undefined }
                            name = {`form${i + 1}`}
                        />
                    )}
                </>
            )
        }
    }

    //handleSubmitWizard(() => {props.navigate('/')}, currentPatientState, setCurrentPatientState, getWizardState)

    return (
        <Patient
            form={pages}
            back={() => { props.navigate(-1); setCurrentPatientIdState(-1); setCurrentPatientState({}); setCurrentParameters([]) }}
        />
    )
}

export default withRouter(PatientComponent)