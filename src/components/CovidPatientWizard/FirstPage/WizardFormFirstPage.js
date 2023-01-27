import React from "react";
import { Form, Input, useValidation } from "usetheform";

import Button from 'react-bootstrap/Button';

import TextInput from "../../Fields/TextInput";
import DoubleSelection from "../../Fields/DoubleSelection";
import Reset from "../../Buttons/Reset";

import "../../Containers/Container.css"

function WizardFormFirstPage(props) {

  let selected
  if(props.currentPatient != "")
    selected = props.currentPatient
  else
    selected = ""

  return (
//props.currentPatient.sex
//props.currentPatient.age
    <div className="form-container">
      <Form {...props}>
        <DoubleSelection title={"Пол "} first={"Мужской "} second={"Женский "} name={"sex"} value1={"M"} value2={"F"} selected={selected.sex} />
        <TextInput type={"text"} label="Возраст" name="age" value={selected.age} />
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