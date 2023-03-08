import { React, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useMultipleForm } from "usetheform"

import Patient from '../../model/dataClasses/Patient'
import Token from '../../model/dataClasses/Token'

import { withRouter } from '../../utils/withRouter';

import { wizardStateToPatientJSON } from '../../model/utils'

import CabsPatient from './CabsPatient'



function CabsPatientComponent(props) {

    const dispatch = useDispatch()
    const currentCabsPatientIdState = useSelector(state => state.currentCabsPatientId)

    const setCurrentCabsPatientId = (idValue) => {
        dispatch({ type: "SET_CURRENT_CABS_PATIENT_ID", currentCabsPatientId: idValue })
    }

    const cabsPatientsState = useSelector(state => state.cabsPatients)
    const setPatientsState = (patientsValue) => {
        dispatch({ type: "SET_CABS_PATIENTS", cabsPatients: patientsValue })
    }

    const setCabsHeartAttack = (cabsHeartAttackValue) => {
        dispatch({ type: "SET_CABS_HEART_ATTACK", cabsHeartAttack: cabsHeartAttackValue })
    }

    const setCabsPCI = (cabsPCIValue) => {
        dispatch({ type: "SET_CABS_PCI", cabsPCI: cabsPCIValue })
    }

    const setCabsInsult = (cabsInsultValue) => {
        dispatch({ type: "SET_CABS_INSULT", cabsInsult: cabsInsultValue })
    }

    const setCabsDeath = (cabsDeathValue) => {
        dispatch({ type: "SET_CABS_DEATH", cabsDeath: cabsDeathValue })
    }

    let currentPatient
    if (cabsPatientsState[currentCabsPatientIdState] != undefined)
        currentPatient = cabsPatientsState[currentCabsPatientIdState]
    else
        currentPatient = ""

    let breadcrumbPath;
    if (currentCabsPatientIdState === -1)
        breadcrumbPath = "Новый пациент"
    else {
        setCabsHeartAttack(currentPatient.heartAttack ? "Да" : "Нет")
        setCabsPCI(currentPatient.PCI ? "Да" : "Нет")
        setCabsInsult(currentPatient.insult ? "Да" : "Нет")
        setCabsDeath(currentPatient.death ? "Да" : "Нет")
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

    const onSubmitWizard = async () => {
        let patientJSON
        if (currentPatient === "") {
            let patient = new Patient({})
            patientJSON = await wizardStateToPatientJSON(getWizardState())
            let patientAnswer = patient.addPatient(localStorage.getItem('accessToken'), patientJSON)
            let addedPatient = new Patient(patientAnswer)
            if (patient.status >= 200 && patient.status < 300) {
                setCabsHeartAttack(addedPatient.heartAttack ? "Да" : "Нет")
                setCabsPCI(addedPatient.PCI ? "Да" : "Нет")
                setCabsInsult(addedPatient.insult ? "Да" : "Нет")
                setCabsDeath(addedPatient.death ? "Да" : "Нет")
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
            let patientAnswer = patient.patchPatient(localStorage.getItem('accessToken'), currentCabsPatientIdState, patientJSON)
            let addedPatient = new Patient(patientAnswer)
            if (patient.status >= 200 && patient.status < 300) {
                setCabsHeartAttack(addedPatient.heartAttack ? "Да" : "Нет")
                setCabsPCI(addedPatient.PCI ? "Да" : "Нет")
                setCabsInsult(addedPatient.insult ? "Да" : "Нет")
                setCabsDeath(addedPatient.death ? "Да" : "Нет")
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
        <CabsPatient
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

export default withRouter(CabsPatientComponent)