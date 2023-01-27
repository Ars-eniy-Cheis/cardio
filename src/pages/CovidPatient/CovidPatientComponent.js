import { React, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { useMultipleForm } from "usetheform";

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

    let breadcrumbPath;
    if(currentCovidPatientIdState === 0)
        breadcrumbPath = "Новый пациент"
    else
        breadcrumbPath = "Изменить"

    console.log("Current patient: ")
    console.log(covidPatientsState[currentCovidPatientIdState])

    let currentPatient
    if(covidPatientsState[currentCovidPatientIdState] != undefined)
        currentPatient = covidPatientsState[currentCovidPatientIdState]
    else
        currentPatient = ""

    const [currentPage, setPage] = useState(1);
    const nextPage = () => setPage((prev) => { return ++prev;});
    const prevPage = () => setPage((prev) => { return --prev;});

    const [getWizardState, wizard] = useMultipleForm();
    const onSubmitWizard = () => console.log(getWizardState());

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