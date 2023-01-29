import React from "react";
import { Form } from "usetheform";

import TextInput from "../../Fields/TextInput";
import DoubleSelection from "../../Fields/DoubleSelection";

import Submit from "../../Buttons/Submit";
import Reset from "../../Buttons/Reset";

import Button from 'react-bootstrap/Button';

function WizardFormSecondPage({ prevPage, ...props }) {
  let selected
  if (props.currentPatient != "")
    selected = props.currentPatient
  else
    selected = ""
  return (
    <div className="form-container" >
      <Form {...props}>
        <DoubleSelection title={"Пол "} first={"Мужской "} second={"Женский "} name={"sex"} value1={"M"} value2={"F"} selected={selected.sex} />
        <TextInput value={selected.creatinine} type={"text"} label="Креатини" name="creatinine" />
        <TextInput value={selected.ast} type={"text"} label="АСТ" name="AST" />
        <div className="field is-grouped">
          <div className="control">
            <Button type="button" className="left-button-in-form" onClick={prevPage}>
              Назад
            </Button>
            <Submit type="submit">Далее</Submit>
            <br />
            <br />
            <Reset />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default WizardFormSecondPage