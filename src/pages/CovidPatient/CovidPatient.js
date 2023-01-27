import { React } from "react"

import { useMultipleForm } from "usetheform";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import WizardFormFirstPage from '../../components/CovidPatientWizard/FirstPage/WizardFormFirstPage'
import WizardFormSecondPage from '../../components/CovidPatientWizard/SecondPage/WizardFormSecondPage'
import WizardFormThirdPage from '../../components/CovidPatientWizard/ThirdPage/WizardFormThirdPage'

import './CovidPatient.css';

function CovidNewPatient(props) {
    const wizard = props.wizard
    const nextPage = props.nextPage
    const prevPage = props.prevPage
    const onSubmitWizard = props.onSubmitWizard

    //console.log(props);
    return (
        <div >
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item className="breadcrumb" href="/profile">Выбор сервиса</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb" href="/profile/covid">COVID</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb" active>{props.breadcrumbPath}</Breadcrumb.Item>
                </Breadcrumb>

                <div className="pretty-text"> &nbsp;&nbsp;&nbsp;&nbsp; {props.breadcrumbPath} </div>

            </div>
            <div >
                <Container >
                    {props.currentPage === 1 && (
                        <WizardFormFirstPage 
                        {...wizard} 
                        onSubmit={nextPage} 
                        currentPatient={props.currentPatient} 
                        name="form1" 
                        />
                    )}
                    {props.currentPage === 2 && (
                        <WizardFormSecondPage
                            {...wizard}
                            prevPage={prevPage}
                            onSubmit={nextPage}
                            currentPatient={props.currentPatient}
                            name="form2"
                        />
                    )}
                    {props.currentPage === 3 && (
                        <WizardFormThirdPage
                            {...wizard}
                            prevPage={prevPage}
                            onSubmit={onSubmitWizard}
                            currentPatient={props.currentPatient}
                            name="form3"
                        />
                    )}
                </Container>
            </div>

        </div>
    )
}

export default CovidNewPatient