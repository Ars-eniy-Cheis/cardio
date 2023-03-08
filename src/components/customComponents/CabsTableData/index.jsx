import {React} from "react"

import "../../../styles/components/customComponents/CabsTableData.css"

function CabsTableData(props) {

  return(
    <tr className="table-light">
      <td>{props.id}</td>
      <td>{new Date(props.dateOfAdmission*1000).toLocaleDateString("en-GB")}</td>
      <td>{props.heartAttack ? "Да" : "Нет"}</td>
      <td>{props.PCI ? "Да" : "Нет"}</td>
      <td>{props.insult ? "Да" : "Нет"}</td>
      <td>{props.death ? "Да" : "Нет"}</td>
      <td> <button onClick={() => {props.handleChange(props.arrayId)}}> <tablebutton>Изменить</tablebutton> </button> </td>
      <td> <button onClick={() => {props.handleDelete(props.arrayId)}}> <tablebutton>Удалить</tablebutton> </button> </td>
    </tr>
  )
}
  

export default CabsTableData