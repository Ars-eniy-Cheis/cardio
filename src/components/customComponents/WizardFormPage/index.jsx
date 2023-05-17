import React from "react";
import { Form } from "usetheform";

import TextInput from "../../standardComponents/Inputs/TextInput";
import DoubleSelection from "../../standardComponents/Inputs/DoubleSelection";
import TripleSelection from "../../standardComponents/Inputs/TripleSelection";

import Submit from "../../standardComponents/Buttons/Submit";
import Reset from "../../standardComponents/Buttons/Reset";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../../../styles/components/standardComponents/containers/Container.css"

function WizardFormPage(props) {

  let firstColLength = parseInt(props.currentParameters.length / 2)

  if(props.currentParameters.length % 2 !== 0)
    firstColLength++
  
  let formparametersFirstCol = []
  let formparametersSecondCol = []

  for(let i = 0; i < firstColLength; i++){
    switch (props.currentParameters[i].type) {
      default:
          break
      case 'textInput':
        formparametersFirstCol.push(
          <TextInput 
            value={props.currentPatient[props.currentParameters[i].name]} 
            type={"text"} 
            label={props.currentParameters[i].label}
            name={props.currentParameters[i].name} 
            isRequired={props.currentParameters[i].isRequired} 
            limits={props.currentParameters[i].limits}
          />
        )
        break
      case 'doubleSelection':
        formparametersFirstCol.push(
          <DoubleSelection 
            selected={props.currentPatient[props.currentParameters[i].name]} 
            title={props.currentParameters[i].label} 
            first={props.currentParameters[i].values[0]} 
            second={props.currentParameters[i].values[1]} 
            name={props.currentParameters[i].name} 
            isRequired={props.currentParameters[i].isRequired}
            enum={props.currentParameters[i].enum ? props.currentParameters[i].enum : undefined }
          />
        )
        break
      case 'tripleSelection':
        formparametersFirstCol.push(
          < TripleSelection 
            selected={props.currentPatient[props.currentParameters[i].name]} 
            title={props.currentParameters[i].label} 
            first={props.currentParameters[i].values[0]} 
            second={props.currentParameters[i].values[1]} 
            third={props.currentParameters[i].values[2]} 
            name={props.currentParameters[i].name} 
            isRequired={props.currentParameters[i].isRequired}
            enum={props.currentParameters[i].enum ? props.currentParameters[i].enum : undefined }
          />
        )
        break
    }
  }

  for(let i = firstColLength; i < props.currentParameters.length; i++) {
    switch (props.currentParameters[i].type) {
      default:
          break
      case 'textInput':
        formparametersSecondCol.push(
          <TextInput 
            value={props.currentPatient[props.currentParameters[i].name]} 
            type={"text"} 
            label={props.currentParameters[i].label} 
            name={props.currentParameters[i].name} 
            isRequired={props.currentParameters[i].isRequired} 
            limits={props.currentParameters[i].limits}
          />
        )
        break
      case 'doubleSelection':
        formparametersSecondCol.push(
          <DoubleSelection 
            selected={props.currentPatient[props.currentParameters[i].name]} 
            title={props.currentParameters[i].label} 
            first={props.currentParameters[i].values[0]} 
            second={props.currentParameters[i].values[1]} 
            name={props.currentParameters[i].name} 
            isRequired={props.currentParameters[i].isRequired} 
            enum={props.currentParameters[i].enum ? props.currentParameters[i].enum : undefined }
          />
        )
        break
      case 'tripleSelection':
        formparametersSecondCol.push(
          < TripleSelection 
            selected={props.currentPatient[props.currentParameters[i].name]} 
            title={props.currentParameters[i].label} 
            first={props.currentParameters[i].values[0]} 
            second={props.currentParameters[i].values[1]} 
            third={props.currentParameters[i].values[2]} 
            name={props.currentParameters[i].name} 
            isRequired={props.currentParameters[i].isRequired}
            enum={props.currentParameters[i].enum ? props.currentParameters[i].enum : undefined }
          />
        )
        break
    }
  }

  const isExist = (value) => {
    if ( value !== undefined )
      return value ? "Да" : "Нет"
    return ""
  }

  if(props.result){
    console.log("props.currentPatient.death:", props.currentPatient.death);
    if(props.currentServiceName === 'covid'){
      formparametersSecondCol.push(
        <>
          <br />
          <br />
          <div className="pretty-text">
            Летальный исход: { isExist(props.currentPatient.death) }
          </div>
        </>
      )
    }
    else if(props.currentServiceName === 'cabs'){
      formparametersSecondCol.push(
        <>
          <br />
          <br />
          <div className="pretty-text">
            Инфаркт: {isExist(props.currentPatient.MI)}
            <br/>
            <br/>
            ЧКВ: {isExist(props.currentPatient.CI)}
            <br/>
            <br/>
            Инсульт: {isExist(props.currentPatient.insultOutcome)}
            <br/>
            <br/>
            Смерть: {isExist(props.currentPatient.death)}
            <br/>
            <br/>
          </div>
        </>
      )
    }
  }

  return (
    <div className="form-container">
      <Form {...props}>
        <Row>
          <Col xs={5}>
            {formparametersFirstCol}
          </Col>
          <Col>
          </Col>
          <Col xs={5}>
            {formparametersSecondCol}
          </Col>
          </Row>
        <div className="field is-grouped">
          <div className="control">
            {props.prevPage ? <Button type="button" className="left-button-in-form" onClick={props.prevPage}> Назад </Button> : ""}
            <Submit type="submit"> {props.result ? "Сохранить" : "Далее"} </Submit>
            <br />
            <br />
            <Reset />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default WizardFormPage