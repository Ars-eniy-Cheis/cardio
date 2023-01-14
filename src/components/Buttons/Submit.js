import React from "react";
import { useForm } from "usetheform";

import Button from 'react-bootstrap/Button';

import "./Buttons.css"

export default function Sumbit({ children }) {
  const { isValid } = useForm();
  return (
    <Button disabled={!isValid} type="submit" className="right-button-in-form">
      {children}
    </Button>
  );
}