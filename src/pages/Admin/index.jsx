import { React, useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from '../../utils/withRouter';

import { UserColumn } from "../../components/standardComponents/Cells/UserEditableCell";

import { handleGetUsers, handleChangeUser, handleDeleteUser, handleExit, selectHandle } from "../../model/app/Handlers";

import { usersHeader } from "../../config/tableHeaders";

import { adminItems } from "../../config/sideMenuItems";

import Admin from './Admin';

import "../../styles/test.css"

function AdminComponent(props) {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.users)

    let serviceNameState = useSelector(state => state.serviceName)
    if(!serviceNameState){
      serviceNameState = localStorage.getItem('serviceName')
    }
    const setServiceNameState = (serviceName) => {
        dispatch({ type: "SET_SERVICE_NAME", serviceName: serviceName })
    }

    const setCurrentManipulatingValueState = (currentManipulatingValue) => {
        dispatch({ type: "SET_CURRENT_MANIPULATING_VALUE", currentManipulatingValue: currentManipulatingValue })
    }

    const setUsersState = (usersValue) => {
        dispatch({ type: "SET_USERS", users: usersValue })
    }

    const addUser = () => {
        props.navigate('/admin/add-user')
    }

    const columns = useMemo(
        () => usersHeader,
        []
    )

    const additionalTableComponents = [];
    for(let i = 0; i < usersState.length; i++) {
        additionalTableComponents.push
        (
            <>
                <td>
                    <button className="tablebutton" onClick={() => { setCurrentManipulatingValueState(usersState[i]); props.navigate('/admin/reset-password') }}> <tablebutton-text>Сброс пароля</tablebutton-text> </button>
                </td>
                <td>
                    <button className="tablebutton" onClick={() => { handleDeleteUser(usersState, setUsersState, usersState[i].id) }}> <tablebutton-text>Удалить</tablebutton-text> </button>
                </td>             
                <td>
                    <button className="tablebutton" onClick={() => { handleChangeUser(usersState[i]) }}> <tablebutton-text>Сохранить</tablebutton-text> </button>
                </td>     
            </>
        )
    }

    const didMount = useRef(false);
    useEffect(() => {
        if (!didMount.current) {
            handleGetUsers(setUsersState)
        }
        setSkipPageReset(false)
    }, [])

    const [skipPageReset, setSkipPageReset] = useState(false)

    return (
        <Admin
            defaultColumn={UserColumn}
            columns={columns}
            data={usersState}
            addUser={addUser}
            skipPageReset={skipPageReset}
            menuItems = {adminItems}
            activeItemId = {serviceNameState}
            onSelect = { (itemId) => {selectHandle(itemId, setServiceNameState, () => {}, props.navigate)} }
            handleExit={() => {handleExit(() => {props.navigate('/')}) }} //Передать колбэк без параметров
            additionalTableComponents={additionalTableComponents}
        />
    )
}

export default withRouter(AdminComponent)