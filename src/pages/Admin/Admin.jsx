import { React } from "react"

import SidebarMenu from '../../components/customComponents/SideBarMenu'
import Table from "../../components/standardComponents/Tables/Table"
import "../../styles/test.css"

function Admin(props) {
    return (
        <div className="grid">
            <SidebarMenu
                activeItemId={props.activeItemId}
                onItemSelect={props.onSelect}
                items={props.menuItems}
                onLogout={props.handleExit}
            />
            <div className="edit">
                <Table
                    defaultColumn={props.defaultColumn}
                    columns={props.columns}
                    data={props.data}
                    skipPageReset={props.skipPageReset}
                    additionalTableComponents={props.additionalTableComponents}
                />
                <button onClick={() => { props.addUser() }} className="standard-button">
                    Добавить пользователя
                </button>
            </div>
        </div>
    )
}

export default Admin