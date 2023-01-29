import React from "react";
import { Form } from "usetheform";

import TextInput from "../../Fields/TextInput";

import Submit from "../../Buttons/Submit";
import Reset from "../../Buttons/Reset";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WizardFormSecondPage({ prevPage, ...props }) {
  let selected
  if (props.currentPatient != "")
    selected = props.currentPatient
  else
    selected = ""
  return (
    <div className="form-container" >
      <Form {...props}>
        <Container>
          <Row>
            <Col xs={5}>
              <TextInput value={selected.urea} type={"text"} label="Мочевина" name="urea" />
              <TextInput value={selected.creatinine} type={"text"} label="Креатини" name="creatinine" />
              <TextInput value={selected.ast} type={"text"} label="АСТ" name="AST" />
              <TextInput value={selected.alt} type={"text"} label="АЛТ" name="ALT" />
            </Col>
            <Col>
            </Col>
            <Col xs={5}>
              <TextInput value={selected.glucose} type={"text"} label="Глюкоза" name="glucose" />
              <TextInput value={selected.leukocytes} type={"text"} label="Лейкоциты" name="leukocytes" />
              <TextInput value={selected.platelets} type={"text"} label="Тромбоциты" name="platelets" />
              <TextInput value={selected.neutrophils} type={"text"} label="Нейтрофилы" name="neutrophils" />
              <TextInput value={selected.lymphocytes} type={"text"} label="Лимфоциты" name="lymphocytes" />
            </Col>
          </Row>
        </Container>
        <div className="field is-grouped">
          <div className="control">
            <Button type="button" className="left-button-in-form" onClick={prevPage}>
              Назад
            </Button>
            <Submit type="submit">Далее</Submit>
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