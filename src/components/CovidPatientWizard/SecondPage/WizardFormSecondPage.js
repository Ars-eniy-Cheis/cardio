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
  console.log(props)
  return (
    <div className="form-container" >
      <Form {...props}>
        <Container>
          <Row>
            <Col>
              <TextInput type={"text"} label="Мочевина" name="urea" />
              <TextInput type={"text"} label="Креатини" name="creatinine" />
              <TextInput type={"text"} label="АСТ" name="AST" />
              <TextInput type={"text"} label="АЛТ" name="ALT" />

            </Col>
            <Col>
              <TextInput type={"text"} label="Глюкоза" name="glucose" />
              <TextInput type={"text"} label="Лейкоциты" name="leukocytes" />
              <TextInput type={"text"} label="Тромбоциты" name="platelet" />
              <TextInput type={"text"} label="Нейтрофилы" name="neutrophils" />
              <TextInput type={"text"} label="Лимфоциты" name="lymphocytes" />
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