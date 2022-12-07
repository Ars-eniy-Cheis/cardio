import React, {Component} from "react"
import ChooseServiceComponent from "./ChooseServiceComponent"
import Request from "../../model/Request"
import {withRouter} from '../../model/withRouter';

class ChooseService extends Component {
    constructor() {
        super()
        this.state = {
        }
        this.handleCovid = this.handleCovid.bind(this);
        this.handleCabs = this.handleCabs.bind(this);
    }

    componentDidMount(){
        console.log("Mount");
    }

    handleCovid(event) {

    }

    handleCabs(event) {

    }

    render() {
        return(
            <ChooseServiceComponent
                handleCovid={this.handleCovid}
                handleCabs={this.handleCabs}
            />
        )
    }
}

export default withRouter(ChooseService);