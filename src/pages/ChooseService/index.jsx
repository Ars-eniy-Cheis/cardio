import {React} from "react";

import {withRouter} from '../../utils/withRouter';

import ChooseService from "./ChooseService";


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