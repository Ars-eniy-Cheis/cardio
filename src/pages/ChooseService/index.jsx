import {React} from "react";

import { useDispatch, useSelector } from "react-redux";

import {withRouter} from '../../utils/withRouter';

import { cabsPatientsHeader, covidPatientsHeader } from "../../config/tableHeaders";

import ChooseService from "./ChooseService";


function ChooseServiceComponent(props) {

    const dispatch = useDispatch()

    const setServiceName = (nameValue) => {
        dispatch({ type: "SET_SERVICE_NAME", serviceName: nameValue })
    }

    const setServiceTableHeader = (tableHeaderValue) => {
        dispatch({ type: "SET_SERVICE_TABLE_HEADER", serviceTableHeader: tableHeaderValue })
    }

    const handleCovid = async () => {
        localStorage.setItem('serviceName', 'covid')
        localStorage.setItem('serviceTableHeader', JSON.stringify(covidPatientsHeader))
        setServiceName('covid')
        setServiceTableHeader(covidPatientsHeader)
        props.navigate('/covid')
    }

    const handleCabs = async () => {
        localStorage.setItem('serviceName', 'cabs')
        localStorage.setItem('serviceTableHeader', JSON.stringify(cabsPatientsHeader))
        setServiceName('cabs')
        setServiceTableHeader(cabsPatientsHeader)
        props.navigate('/cabs')
    }
    
    return (
        <ChooseService
            handleCovid = {handleCovid}
            handleCabs = {handleCabs}
        />
    );
    
}

export default withRouter(ChooseServiceComponent)