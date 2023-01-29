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

function WizardFormThirdPage({ prevPage, ...props }) {
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
              <DoubleSelection selected={selected.ag} title={"АГ "} first={"Есть "} second={"Нет "} name={"AG"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.sd} title={"СД "} first={"Есть "} second={"Нет "} name={"SD"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.overweight} title={"Изб. масса тела "} first={"Есть "} second={"Нет "} name={"overweight"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.smoking} title={"Курение "} first={"Есть "} second={"Нет "} name={"smoking"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.heredity} title={"Наследственность "} first={"Есть "} second={"Нет "} name={"heredity"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.dyslipidemia} title={"Дислипидемия "} first={"Есть "} second={"Нет "} name={"dyslipidemia"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.hoblBa} title={"ХОБЛ/БА "} first={"Есть "} second={"Нет "} name={"hoblBa"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.piks} title={"ПИКС "} first={"Есть "} second={"Нет "} name={"piks"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.fp} title={"ФП "} first={"Есть "} second={"Нет "} name={"fp"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.hbp} title={"ХБП "} first={"Есть "} second={"Нет "} name={"hbp"} value1={"true"} value2={"false"} />
            </Col>
            <Col>
            </Col>
            <Col xs={5}>
              <DoubleSelection selected={selected.su} title={"ЯБЖ/Ж "} first={"Есть "} second={"Нет "} name={"su"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.th} title={"ЗЩЖ "} first={"Есть "} second={"Нет "} name={"th"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.varicose} title={"Варикоз "} first={"Есть "} second={"Нет "} name={"varicose"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.cardiacLesions} title={"Поражение БЦА/КЭЭ/инсульт "} first={"Есть "} second={"Нет "} name={"cardiacLesions"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.llaLesions} title={"Поражение АНК или ВА "} first={"Есть "} second={"Нет "} name={"llaLesions"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.fcAnginaPectoris} title={"ФК стенокардии "} first={"1-2 "} second={"3-4 "} name={"fcAnginaPectoris"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.fcchf} title={"ФК ХСН "} first={"1-2 "} second={"3 "} name={"fcchf"} value1={"true"} value2={"false"} />
              <TextInput value={selected.lvef} type={"text"} label="ФВ ЛЖ" name="lvef" />
              <TextInput value={selected.is} type={"text"} label="МЖП" name="is" />
              <TextInput value={selected.euroScore2} type={"text"} label="EuroScore II" name="euroScore2" />
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

export default WizardFormThirdPage