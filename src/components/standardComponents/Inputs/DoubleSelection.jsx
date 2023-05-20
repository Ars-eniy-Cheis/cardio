import { React, useState } from "react";
import { Input, useValidation, Collection } from "usetheform";

//const required = (value) => (value && value !== "" ? undefined : "Обязательное поле");

export default function DoubleSelection(props) {

  const required = (value) =>{
    if((props.isRequired && (!value || value === "")))
      return "Обязательное поле"
    else 
      return undefined
  }

  const [status, validation] = useValidation([required]);
  let keys = Object.keys(props.enum)
  let input1 = <Input className="form-wizard-radio" tabIndex="1" type="radio" name={props.name} value={keys[0]} />
  let input2 = <Input className="form-wizard-radio" tabIndex="2" type="radio" name={props.name} value={keys[1]} />
  if (props.selected == keys[0] && props.selected !== undefined) {
    input1 = <Input className="form-wizard-radio" tabIndex="1" type="radio" name={props.name} value={keys[0]} checked />
  }
  else if (props.selected == keys[1] && props.selected !== undefined) {
    input2 = <Input className="form-wizard-radio" tabIndex="2" type="radio" name={props.name} value={keys[1]} checked />
  }

  return (
    <div>
      <label className="form-label">{props.title} :</label>
      <Collection className="radio-group" object touched name={props.name + "Object"} {...validation}>
        <div className="radio-option" >
          {input1}
          <label className="form-label radio-option-label">{props.first}</label>
        </div>
        <div className="radio-option" >
          {input2}
          <label className="form-label radio-option-label">{props.second}</label>
        </div>
      </Collection>
      <span className="invalid-value-label">{status.error}</span>
    </div>
  );
}