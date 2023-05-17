import React, {  } from "react";
import { Input, useValidation } from "usetheform";

import "../../../styles/components/standardComponents/inputs/textInputs/TextInput.css"

export default function TextInput({ label, isRequired, limits, ...props }) {

  const required = (value) =>{
    if((isRequired && (!value || value === "")))
      return "Обязательное поле"
    else 
      return undefined
  }

  const isValidValue = (value) =>
  {
    if(!value)
      return undefined
    return (!(value && !/(^\d+$)|(^\d+.\d+$)|[,.]/i.test(value)) && (parseFloat(value) <= parseFloat(limits.max) && parseFloat(value) >= parseFloat(limits.min))) ? undefined: 'Неверное значение'
  }
    

  const [status, validation] = useValidation([required, isValidValue]);

  return (
    <div className="pretty-text">
      <div className="quantity">
        <label>{label} : </label>
        <Input value={props.value} type={props.type} className="input" touched {...validation}  {...props} />
      </div>
      <p className="required">{status.error}</p>
    </div>
  );
}