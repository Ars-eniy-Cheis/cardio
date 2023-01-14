import { React, useState } from "react";
import { Input, useValidation, Collection } from "usetheform";

import "./DoubleSelection.css"

const required = (value) => (value && value !== "" ? undefined : "Обязательное поле");



export default function DoubleSelection(props) {
  const [status, validation] = useValidation([required]);

  return (
    <div className="pretty-text">
      <div>
        {props.title} :
        
        <Collection object touched name={props.name + "Object"} {...validation}>
        <label className="l-radio">
          <Input tabIndex="1" type="radio"  name={props.name} value={props.value1} />
          <span>{props.first}</span>
        </label>
        <label className="l-radio">
          <Input tabIndex="2" type="radio"  name={props.name} value={props.value2} />
          <span> {props.second}</span>
        </label>
        </Collection>
      </div>
      <p className="required">{status.error}</p>
    </div>
  );
}