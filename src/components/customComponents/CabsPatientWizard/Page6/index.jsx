import React from "react";
import { useSelector } from "react-redux";
import { Form } from "usetheform";

import DoubleSelection from "../../../standardComponents/Inputs/DoubleSelection";

import Submit from "../../../standardComponents/Buttons/Submit";
import Reset from "../../../standardComponents/Buttons/Reset";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WizardFormSecondPage({ prevPage, ...props }) {

  const cabsHeartAttack = useSelector(state => state.cabsHeartAttack)
  const cabsPCI = useSelector(state => state.cabsPCI)
  const cabsInsult = useSelector(state => state.cabsInsult)
  const cabsDeath = useSelector(state => state.cabsDeath)

  let selected
  let submit
  if (props.currentPatient != "") {
    selected = props.currentPatient
    submit = "Применить"
  }
  else {
    submit = "Расчитать результат"
    selected = ""
  }
  return (
    <div className="form-container" >
      <Form {...props}>
        <Container>
          <Row>
            <Col xs={6}>
              <DoubleSelection selected={selected.ceaFteer} title={"КЭЭ (после операции) "} first={"Есть "} second={"Нет "} name={"ceaFteer"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.ancoPerationsAfter} title={"Операции на АНК (после операции) "} first={"Есть "} second={"Нет "} name={"ancoPerationsAfter"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.antiplateletAgentsAfter} title={"Антиагреганты (после операции) "} first={"Есть "} second={"Нет "} name={"antiplateletAgentsAfter"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.anticoagulants} title={"Антикоагулянты (после операции) "} first={"Есть "} second={"Нет "} name={"anticoagulants"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.babAfter} title={"БАБ (после операции) "} first={"Есть "} second={"Нет "} name={"babAfter"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.akkAfter} title={"АКК (после операции) "} first={"Есть "} second={"Нет "} name={"akkAfter"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.iAPFAfter} title={"иАПФ (после операции) "} first={"Есть "} second={"Нет "} name={"iAPFAfter"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.araAfter} title={"АРА (после операции) "} first={"Есть "} second={"Нет "} name={"araAfter"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.diureticsAfter} title={"Диуретики (после операции) "} first={"Есть "} second={"Нет "} name={"diureticsAfter"} value1={"true"} value2={"false"} />
              <DoubleSelection selected={selected.statins} title={"Статины (после операции) "} first={"Есть "} second={"Нет "} name={"statins"} value1={"true"} value2={"false"} />
            </Col>
            <Col>
            </Col>
            <Col xs={5}>
              <br />
              <br />
              <div className="pretty-text">
                Инфаркт: {cabsHeartAttack}
                <br/>
                <br/>
                ЧКВ: {cabsPCI}
                <br/>
                <br/>
                Инсульт: {cabsInsult}
                <br/>
                <br/>
                Смерть: {cabsDeath}
                <br/>
                <br/>
              </div>
              <Submit type="submit">Расчитать результат</Submit>
            </Col>
          </Row>
        </Container>
        <div className="field is-grouped">
          <div className="control">
            <Button type="button" className="left-button-in-form" onClick={prevPage}>
              Назад
            </Button>
            <Reset />
            <br />
            <br />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default WizardFormSecondPage