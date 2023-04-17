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
      case 'textInput':
        formparametersFirstCol.push(
          <TextInput value={props.currentPatient[props.currentParameters[i].name]} type={"text"} label={props.currentParameters[i].label} name={props.currentParameters[i].name} isRequired={props.currentParameters[i].isRequired} inputLimitation={props.currentParameters[i].inputLimitation}/>
        )
        break
      case 'doubleSelection':
        formparametersFirstCol.push(
          <DoubleSelection selected={props.currentPatient[props.currentParameters[i].name]} title={props.currentParameters[i].label} first={props.currentParameters[i].values[0]} second={props.currentParameters[i].values[1]} name={props.currentParameters[i].name} value1={"true"} value2={"false"} isRequired={props.currentParameters[i].isRequired} />
        )
        break
      case 'tripleSelection':
        formparametersFirstCol.push(

        )
        break
    }
  }

  for(let i = firstColLength; i < props.currentParameters.length; i++){
    switch (props.currentParameters[i].type) {
      case 'textInput':
        formparametersSecondCol.push(
          <TextInput value={props.currentPatient[props.currentParameters[i].name]} type={"text"} label={props.currentParameters[i].label} name={props.currentParameters[i].name} isRequired={props.currentParameters[i].isRequired} inputLimitation={props.currentParameters[i].inputLimitation}/>
        )
        break
      case 'doubleSelection':
        formparametersSecondCol.push(
          <DoubleSelection selected={props.currentPatient[props.currentParameters[i].name]} title={props.currentParameters[i].label} first={props.currentParameters[i].values[0]} second={props.currentParameters[i].values[1]} name={props.currentParameters[i].name} value1={"true"} value2={"false"} isRequired={props.currentParameters[i].isRequired} />
        )
        break
      case 'tripleSelection':
        formparametersSecondCol.push(

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
    console.log("props.currentPatient.probabilityOfDeath:", props.currentPatient.probabilityOfDeath);
    if(props.currentServiceName === 'covid'){
      formparametersSecondCol.push(
        <>
          <br />
          <br />
          <div className="pretty-text">
            Летальный исход: { isExist(props.currentPatient.probabilityOfDeath) }
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
            Инфаркт: {isExist(props.currentPatient.heartAttack)}
            <br/>
            <br/>
            ЧКВ: {isExist(props.currentPatient.PCI)}
            <br/>
            <br/>
            Инсульт: {isExist(props.currentPatient.insult)}
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