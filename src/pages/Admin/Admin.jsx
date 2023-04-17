import { React } from "react"

import Table from "../../components/standardComponents/Tables/Table"
import "../../styles/test.css"

function Admin(props) {
    return (
        <>
            <Table
                defaultColumn={props.defaultColumn}
                columns={props.columns}
                data={props.data}
                skipPageReset={props.skipPageReset}
                additionalTableComponents={props.additionalTableComponents}
            />
            <button className="standard-button">
                Добавить пользователя
            </button>
        </>
    )
}

export default Admin