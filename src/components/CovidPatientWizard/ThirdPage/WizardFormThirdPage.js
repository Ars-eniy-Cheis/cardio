import React from "react";
import { Form } from "usetheform";

import TextInput from "../../Fields/TextInput";
import DoubleSelection from "../../Fields/DoubleSelection";

import Submit from "../../Buttons/Submit";
import Reset from "../../Buttons/Reset";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WizardFormSecondPage({ prevPage, ...props }) {
  console.log(props)
  return (
    <div className="form-container" >
      <Form {...props}>
        <Container>
          <Row>
            <Col>
              <TextInput type={"text"} label="D-димер, ед." name="d-dimer" />
              <DoubleSelection title={"АГ "} first={"Есть "} second={"Нет "} name={"AG"} value1={"true"} value2={"false"} />
              <DoubleSelection title={"СД "} first={"Есть "} second={"Нет "} name={"SD"} value1={"true"} value2={"false"} />
              <DoubleSelection title={"ИБС (с ХСН) "} first={"Есть "} second={"Нет "} name={"IBS"} value1={"true"} value2={"false"} />
              <DoubleSelection title={"ХОБЛ + астма "} first={"Есть "} second={"Нет "} name={"HOBL"} value1={"true"} value2={"false"} />
              <DoubleSelection title={"ХБП (3-5) "} first={"Есть "} second={"Нет "} name={"HBP"} value1={"true"} value2={"false"} />
            </Col>
            <Col>
              <TextInput type={"text"} label="CRP " name="CRP" />
              <TextInput type={"text"} label="СКФ (CKD-EPI 2021)" name="SKF" />
              <TextInput type={"text"} label="Нейтрофильно-лимфоцитарное состояние" name="Neutrophil-lymphocyteRatio" />
            </Col>
          </Row>
        </Container>
        <div className="field is-grouped">
          <div className="control">
            <Button type="button" className="left-button-in-form" onClick={prevPage}>
              Назад
            </Button>
            <Submit type="submit">Расчитать результат</Submit>
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