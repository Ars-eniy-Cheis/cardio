import React from "react";
import { Form } from "usetheform";

import TextInput from "../../../standardComponents/Inputs/TextInput";
import DoubleSelection from "../../../standardComponents/Inputs/DoubleSelection";
import TripleSelection from "../../../standardComponents/Inputs/TripleSelection";

import Submit from "../../../standardComponents/Buttons/Submit";
import Reset from "../../../standardComponents/Buttons/Reset";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WizardFormForthPage({ prevPage, ...props }) {
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
              <DoubleSelection selected={selected.ik} title={"ИК "} first={"Есть "} second={"Нет "} name={"ik"} value1={"true"} value2={"false"} />
              <TextInput value={selected.ikTime} type={"text"} label="Время ИК (в минутах)" name="ikTime"/> 
              <TextInput value={selected.aorticClampTime} type={"text"} label="Время пережатия аорты" name="aorticClampTime"/>
              <TextInput value={selected.tBodies} type={"text"} label="Т-тела" name="tBodies"/>
              <DoubleSelection selected={selected.numberOfCardioplegias} title={"Количество кардиоплегий "} first={"0-2 "} second={"3-4 "} name={"numberOfCardioplegias"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.vpLz} title={"ВП ЛЖ "} first={"Есть "} second={"Нет "} name={"vpLz"} value1={"true"} value2={"false"} />
            </Col>
            <Col>
            </Col>
            <Col xs={5}>
              <DoubleSelection selected={selected.revascularizationIndex} title={"Индекс реваскуляризации "} first={"2-3 "} second={"4-5 "} name={"revascularizationIndex"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.tTypeCobs} title={"Y-образное КШ "} first={"Есть "} second={"Нет "} name={"tTypeCobs"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.limaExcretion} title={"Выделение ЛВГА "} first={"Скелет "} second={"Лоскут "} name={"limaExcretion"} value1={"true"} value2={"false"} />
              <TripleSelection selected={selected.rimaExcretion} title={"Выделение ПВГА "} first={"Скелет "} second={"Лоскут "} third={"Нет "} name={"rimaExcretion"} value1={"s"} value2={"f"} value3={"n"}/>
              <DoubleSelection selected={selected.laUsage} title={"Использование ЛА "} first={"Есть "} second={"Нет "} name={"laUsage"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.avUsage} title={"Использование АВ "} first={"есть "} second={"Нет "} name={"avUsage"} value1={"true"} value2={"false"} />
              <TextInput value={selected.bloodLoss} type={"text"} label="Кровопотеря" name="bloodLoss"/> 
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

export default WizardFormForthPage