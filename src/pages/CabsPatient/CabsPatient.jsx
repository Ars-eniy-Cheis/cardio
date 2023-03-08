import { React } from "react"

import { useMultipleForm } from "usetheform";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import WizardFormFirstPage from '../../components/customComponents/CabsPatientWizard/Page1'
import WizardFormSecondPage from '../../components/customComponents/CabsPatientWizard/Page2'
import WizardFormThirdPage from '../../components/customComponents/CabsPatientWizard/Page3'
import WizardFormForthPage from '../../components/customComponents/CabsPatientWizard/Page4'
import WizardFormFifthPage from '../../components/customComponents/CabsPatientWizard/Page5'
import WizardFormSixthPage from '../../components/customComponents/CabsPatientWizard/Page6'

import '../../styles/pages/CabsPatient.css';

function CabsNewPatient(props) {
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
                    <Breadcrumb.Item className="breadcrumb" href="/profile/cabs">Прогноз по шунтированию</Breadcrumb.Item>
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
                            onSubmit={nextPage}
                            currentPatient={props.currentPatient}
                            name="form3"
                        />
                    )}
                    {props.currentPage === 4 && (
                        <WizardFormForthPage
                            {...wizard}
                            prevPage={prevPage}
                            onSubmit={nextPage}
                            currentPatient={props.currentPatient}
                            name="form4"
                        />
                    )}
                    {props.currentPage === 5 && (
                        <WizardFormFifthPage
                            {...wizard}
                            prevPage={prevPage}
                            onSubmit={nextPage}
                            currentPatient={props.currentPatient}
                            name="form5"
                        />
                    )}
                    {props.currentPage === 6 && (
                        <WizardFormSixthPage
                            {...wizard}
                            prevPage={prevPage}
                            onSubmit={onSubmitWizard}
                            currentPatient={props.currentPatient}
                            name="form6"
                        />
                    )}
                </Container>
            </div>

        </div>
    )
}

export default CabsNewPatient