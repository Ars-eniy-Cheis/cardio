import { React, useState } from "react";
import { Input, useValidation, Collection } from "usetheform";

import "./DoubleSelection.css"

const required = (value) => (value && value !== "" ? undefined : "Обязательное поле");

export default function TripleSelection(props) {
  const [status, validation] = useValidation([required]);

  let input1 = <Input tabIndex="1" type="radio" name={props.name} value={props.value1} />
  let input2 = <Input tabIndex="2" type="radio" name={props.name} value={props.value2} />
  let input3 = <Input tabIndex="3" type="radio" name={props.name} value={props.value3} />
  if (props.selected === "s" && props.selected != undefined) {
    input1 = <Input tabIndex="1" type="radio" name={props.name} value={props.value1} checked />
  }
  else if (props.selected === "f" && props.selected != undefined) {
    input2 = <Input tabIndex="2" type="radio" name={props.name} value={props.value2} checked />
  }
  else if (props.selected === "n" && props.selected != undefined) {
    input3 = <Input tabIndex="3" type="radio" name={props.name} value={props.value3} checked />
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