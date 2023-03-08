import React from "react";
import { useForm } from "usetheform";

import Button from 'react-bootstrap/Button';

import "../../../styles/components/standardComponents/buttons/StandardButton.css"

export default function Sumbit({ children }) {
  const { isValid } = useForm();
  return (
    <Button disabled={!isValid} type="submit" className="right-button-in-form">
      {children}
    </Button>
  );
}