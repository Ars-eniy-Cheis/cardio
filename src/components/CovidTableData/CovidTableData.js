import {React} from "react"

import "./CovidTableData.css"

function CovidTableData(props) {

  return(
    <tr className="table-light">
      <td>{props.id}</td>
      <td>{new Date(props.dateOfAdmission*1000).toLocaleDateString("en-GB")}</td>
      <td>{props.probabilityOfDeath}</td>
      <td> <button onClick={() => {props.handleChange(props.arrayId)}}> <tablebutton>Изменить</tablebutton> </button> </td>
      <td> <button onClick={() => {props.handleDelete(props.arrayId)}}> <tablebutton>Удалить</tablebutton> </button> </td>
    </tr>
  )
}
  

export default CovidTableData