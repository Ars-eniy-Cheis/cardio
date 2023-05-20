import { React } from "react"

import { Navigation } from 'react-minimal-side-navigation';

import SidebarMenu from "../../components/customComponents/SideBarMenu";

import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from "../../components/standardComponents/Tables/Table"

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import "../../styles/test.css"

function EditingService(props) {
    return (
        <div className="grid">
            <SidebarMenu
                activeItemId={props.activeItemId}
                onItemSelect={props.onSelect}
                items={props.menuItems}
                onLogout={props.handleExit}
            />
            <div  className="edit">
                <Table
                    defaultColumn={props.defaultColumn}
                    columns={props.columns}
                    data={props.data}
                    skipPageReset={props.skipPageReset}
                    additionalTableComponents={props.additionalTableComponents}
                />
                <Button onClick={props.handleNewPatient} className="cabsButton"> Новый пациент </Button>
            </div>
        </div>
    )
}

export default EditingService