import React, {  } from "react";
import { Input, useValidation } from "usetheform";

import "../../../styles/components/standardComponents/inputs/textInputs/TextInput.css"

export default function TextInput({ label, isRequired, inputLimitation, ...props }) {

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
    return (!(value && !/^[0-9\b]+$/i.test(value)) && (parseFloat(value) <= inputLimitation)) ? undefined: 'Неверное значение'
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