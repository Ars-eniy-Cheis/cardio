import { React, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { useMultipleForm } from "usetheform";

import { withRouter } from '../../model/withRouter';

import CovidPatient from './CovidPatient'



function CovidPatientComponent(props) {

    const [currentPage, setPage] = useState(1);
    const nextPage = () => setPage((prev) => { return ++prev;});
    const prevPage = () => setPage((prev) => { return --prev;});

    const [getWizardState, wizard] = useMultipleForm();
    const onSubmitWizard = () => console.log(getWizardState());

    return (
        <CovidPatient
            wizard={wizard}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            onSubmitWizard={onSubmitWizard}
        />
    )

}

export default withRouter(CovidPatientComponent)