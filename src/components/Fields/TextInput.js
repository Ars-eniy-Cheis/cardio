import React from "react";
import { Input, useValidation } from "usetheform";

import "./TextInput.css"

const required = (value) => (value && value !== "" ? undefined : "Обязательное поле");

export default function Text({ label, ...props }) {
  const [status, validation] = useValidation([required]);
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