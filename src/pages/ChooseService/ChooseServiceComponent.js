import {React} from "react";

import {withRouter} from '../../model/withRouter';

import ChooseService from "./ChooseService";

import './ChooseService.css';


function ChooseServiceComponent(props) {

    const handleCovid = async () => {
        props.navigate('/profile/covid')
    }

    const handleCabs = async () => {
        props.navigate('/profile/cabs')
    }
    
    return (
        
        <ChooseService
        handleCovid = {handleCovid}
        handleCabs = {handleCabs}
        />
    );
    
}

export default withRouter(ChooseServiceComponent)