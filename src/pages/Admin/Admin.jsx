import { React } from "react"

import styled from 'styled-components'

import Table from "../../components/standardComponents/Tables/Table"

function Admin(props) {
    return (
        <Table
            columns={props.columns}
            data={props.data}
            updateData={props.updateData}
            skipPageReset={props.skipPageReset}
            onDelete={props.onDelete}
            onSave={props.onSave}
        />
    )
}

export default Admin