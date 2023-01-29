import React from "react";
import { Form } from "usetheform";

import Button from 'react-bootstrap/Button';

import DoubleSelection from "../../Fields/DoubleSelection";
import Reset from "../../Buttons/Reset";

import "../../Containers/Container.css"

function WizardFormFirstPage(props) {

  let selected
  if (props.currentPatient != "")
    selected = props.currentPatient
  else
    selected = ""

  return (
    //props.currentPatient.sex
    //props.currentPatient.age
    <div className="form-container">
      <Form {...props}>
        <DoubleSelection selected={selected.cabsType} title={"Вид КШ "} first={"БиМКШ "} second={"АКШ "} name={"AG"} value1={"true"} value2={"false"} />
        <div className="field is-grouped">
          <div className="control">
            <Button type="submit" className="right-button-in-form">
              Далее
            </Button>
          </div>
          <br />
          <br />
          <Reset />
        </div>
      </Form>
    </div>
  );
}

export default WizardFormFirstPage