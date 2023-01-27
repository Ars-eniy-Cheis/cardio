import { React, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { useMultipleForm } from "usetheform";

import Patient from '../../model/dataClasses/Patient'
import Token from '../../model/dataClasses/Token'

import { withRouter } from '../../model/withRouter';

import CovidPatient from './CovidPatient'



function CovidPatientComponent(props) {

    const dispatch = useDispatch()
    const currentCovidPatientIdState = useSelector(state => state.currentCovidPatientId)

    const setCurrentCovidPatientId = (idValue) => {
        dispatch({ type: "SET_CURRENT_COVID_PATIENT_ID", currentCovidPatientId: idValue })
    }

    const covidPatientsState = useSelector(state => state.covidPatients)
    const setPatientsState = (patientsValue) => {
        dispatch({ type: "SET_COVID_PATIENTS", covidPatients: patientsValue })
    }

    const setCovidDeathProbability = (covidDeathProbabilityValue) => {
        dispatch({ type: "SET_COVID_DEATH_PROBABILITY", covidDeathProbability: covidDeathProbabilityValue })
    }

    let currentPatient
    if (covidPatientsState[currentCovidPatientIdState] != undefined)
        currentPatient = covidPatientsState[currentCovidPatientIdState]
    else
        currentPatient = ""

    let breadcrumbPath;
    if (currentCovidPatientIdState === -1)
        breadcrumbPath = "Новый пациент"
    else {
        setCovidDeathProbability(currentPatient.probabilityOfDeath + "%")
        breadcrumbPath = "Изменить"
    }

    const [currentPage, setPage] = useState(1);
    const nextPage = () => setPage((prev) => { return ++prev; });
    const prevPage = () => setPage((prev) => { return --prev; });

    const [getWizardState, wizard] = useMultipleForm();

    const handleExit = async () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        props.navigate('/')
    }

    const wizardStateToPatientJSON = async (wizardState) => {
        let patient = {}
        Object.keys(wizardState).forEach(function (key, index) {
            if (Object.prototype.toString.call(wizardState[key]) == '[object Object]') {
                let index = key.indexOf('Object')
                patient[key.substr(0, index)] = wizardState[key][key.substr(0, index)]
            }
            else {
                patient[key] = wizardState[key]
            }
        });
        return patient
    }

    const onSubmitWizard = async () => {//отправлять запрос здесь
        let patientJSON
        if (currentPatient === "") {
            let patient = new Patient({})
            patientJSON = await wizardStateToPatientJSON(getWizardState())
            let patientAnswer = patient.addPatient(localStorage.getItem('accessToken'), patientJSON)
            let addedPatient = new Patient(patientAnswer)
            if (patient.status >= 200 && patient.status < 300) {
                setCovidDeathProbability(addedPatient.probabilityOfDeath + "% ")
            }
            else {
                let token = new Token()
                let updatedToken = await token.updateToken(localStorage.getItem('refreshToken'))
                if (token.status >= 200 && token.status < 300) {
                    localStorage.setItem('accessToken', updatedToken.accessToken)
                    localStorage.setItem('refreshToken', updatedToken.refreshToken)
                }
                else {
                    handleExit()
                }
            }
        }
        else {
            let patient = new Patient({})
            patientJSON = await wizardStateToPatientJSON(getWizardState())
            let patientAnswer = patient.patchPatient(localStorage.getItem('accessToken'), currentCovidPatientIdState, patientJSON)
            let addedPatient = new Patient(patientAnswer)
            if (patient.status >= 200 && patient.status < 300) {
                setCovidDeathProbability(addedPatient.probabilityOfDeath + "% ")
            }
            else {
                let token = new Token()
                let updatedToken = await token.updateToken(localStorage.getItem('refreshToken'))
                if (token.status >= 200 && token.status < 300) {
                    localStorage.setItem('accessToken', updatedToken.accessToken)
                    localStorage.setItem('refreshToken', updatedToken.refreshToken)
                }
                else {
                    handleExit()
                }
            }
        }
        console.log(patientJSON)
    };

    return (
        <CovidPatient
            currentPatient={currentPatient}
            breadcrumbPath={breadcrumbPath}
            wizard={wizard}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            onSubmitWizard={onSubmitWizard}
        />
    )

}

export default withRouter(CovidPatientComponent)