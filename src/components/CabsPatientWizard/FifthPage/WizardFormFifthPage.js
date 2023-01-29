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

function WizardFormFifthPage({ prevPage, ...props }) {
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
              <TextInput value={selected.alvTime} type={"text"} label="Время ИВЛ (в минутах)" name="alvTime" />
              <DoubleSelection selected={selected.inotropicSupport} title={"Инотропная поддержка "} first={"Есть "} second={"Нет "} name={"inotropicSupport"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.pneumonia} title={"Пневмония "} first={"Есть "} second={"Нет "} name={"pneumonia"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.sn} title={"СН "} first={"Есть "} second={"Нет "} name={"sn"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.fpTp} title={"ФП/ТП "} first={"Есть "} second={"Нет "} name={"fpTp"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.pleuralEffusion} title={"Плевральный выпот "} first={"Есть "} second={"Нет "} name={"pleuralEffusion"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.hydropericardium} title={"Гидроперикард "} first={"Есть "} second={"Нет "} name={"hydropericardium"} value1={"true"} value2={"false"} />
            </Col>
            <Col >
            </Col>
            <Col xs={5}>
              <DoubleSelection selected={selected.pneumothorax} title={"Пневмоторакс/Пневмомедиастинум "} first={"Есть "} second={"Нет "} name={"pneumothorax"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.sternalComplications} title={"Стернальные осложнения "} first={"Есть "} second={"Нет "} name={"sternalComplications"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.akk} title={"АКК "} first={"Есть "} second={"Нет "} name={"akk"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.iapf} title={"иАПФ "} first={"Есть "} second={"Нет "} name={"iapf"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.spironolactone} title={"Спиронолактон "} first={"Есть "} second={"Нет "} name={"spironolactone"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.diuretics} title={"Диуретики "} first={"Есть "} second={"Нет "} name={"diuretics"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.cordaron} title={"Кордарон "} first={"Есть "} second={"Нет "} name={"cordaron"} value1={"true"} value2={"false"} />
              <TextInput value={selected.hospitalizationDuration} type={"text"} label="Продолжительность госпитализации (в днях)" name="hospitalizationDuration" />
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

export default WizardFormFifthPage