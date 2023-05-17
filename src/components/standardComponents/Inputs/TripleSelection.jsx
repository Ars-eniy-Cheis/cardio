import { React, useState } from "react";
import { Input, useValidation, Collection } from "usetheform";

import "../../../styles/components/standardComponents/inputs/doubleSelections/DoubleSelection.css"

const required = (value) => (value && value !== "" ? undefined : "Обязательное поле");

export default function TripleSelection(props) {
  const [status, validation] = useValidation([required]);
  let keys = Object.keys(props.enum)
  let input1 = <Input tabIndex="1" type="radio" name={props.name} value={keys[0]} />
  let input2 = <Input tabIndex="2" type="radio" name={props.name} value={keys[1]} />
  let input3 = <Input tabIndex="3" type="radio" name={props.name} value={keys[2]} />
  if (props.selected === keys[0] && props.selected != undefined) {
    input1 = <Input tabIndex="1" type="radio" name={props.name} value={keys[0]} checked />
  }
  else if (props.selected === keys[1] && props.selected != undefined) {
    input2 = <Input tabIndex="2" type="radio" name={props.name} value={keys[1]} checked />
  }
  else if (props.selected === keys[2] && props.selected != undefined) {
    input3 = <Input tabIndex="3" type="radio" name={props.name} value={keys[2]} checked />
  }

  return (
    <div className="pretty-text">
      <div>
        {props.title} :
        <Collection object touched name={props.name + "Object"} {...validation}>
          <label className="l-radio">
            {input1}
            <span>{props.first}</span>
          </label>
          <label className="l-radio">
            {input2}
            <span> {props.second}</span>
          </label>
          <label className="l-radio">
            {input3}
            <span> {props.third}</span>
          </label>
        </Collection>
      </div>
      <p className="required">{status.error}</p>
    </div>
  );
}